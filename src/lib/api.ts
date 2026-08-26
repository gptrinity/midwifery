const API = "";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${url}`, options);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const api = {
  login: (email: string, password: string) =>
    request<{ ok: true }>("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }),

  register: (name: string, email: string, password: string) =>
    request<{ ok: true }>("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    }),

  logout: () =>
    request<{ ok: true }>("/api/auth/logout", { method: "POST" }),

  me: () =>
    request<{ user: { id: string; name: string; email: string; role: string } | null }>("/api/auth/me"),

  subjects: () =>
    request<{ subjects: any[] }>("/api/subjects"),

  subjectBySlug: (slug: string) =>
    request<{ subject: any }>(`/api/subjects/${slug}`),

  topicById: (id: string) =>
    request<{ topic: any }>(`/api/topics/${id}`),

  selectQuestions: (params: Record<string, string>) => {
    const qs = new URLSearchParams(params).toString();
    return request<{ questions: any[] }>(`/api/questions/select?${qs}`);
  },

  saveAttempt: (data: any) =>
    request<{ ok: true; id: string }>("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),

  tutorSessions: () =>
    request<{ sessions: any[] }>("/api/tutor/sessions"),

  createTutorSession: (subjectId?: string, title?: string) =>
    request<{ session: any }>("/api/tutor/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subjectId, title }),
    }),

  tutorMessages: (sessionId: string) =>
    request<{ session: any; messages: any[] }>(`/api/tutor/messages?session=${sessionId}`),

  rateMessage: (messageId: string, rating: number, feedback?: string) =>
    request<{ ok: true }>("/api/tutor/rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId, rating, feedback }),
    }),

  progress: () =>
    request<{ attempts: any[]; subjects: any[]; topicCount: number }>("/api/progress"),

  papers: (params?: Record<string, string>) => {
    const qs = params ? new URLSearchParams(params).toString() : "";
    return request<{ papers: any[]; years: any[]; subjects: any[] }>(`/api/papers${qs ? `?${qs}` : ""}`);
  },

  importPaper: (fd: FormData) =>
    request<{ ok: true; paper: any; chars: number; preview: string }>("/api/papers/import", {
      method: "POST",
      body: fd,
    }),

  adminStats: () =>
    request<{ subjectCount: number; questionCount: number; paperCount: number; openMisses: number; studentCount: number }>("/api/admin/stats"),

  adminMisses: () =>
    request<{ misses: any[] }>("/api/admin/misses"),

  updateMiss: (id: string, status: string) =>
    request<{ ok: true }>("/api/admin/misses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    }),

  homePage: () =>
    request<{ subjectCount: number; questionCount: number; user: any; recentQuestions: any[] }>("/api/home"),
};
