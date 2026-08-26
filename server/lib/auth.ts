import { SignJWT, jwtVerify } from "jose";
import { prisma } from "../index.js";

const SESSION_COOKIE = "mw_session";
const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "change-me-to-a-long-random-string-at-least-32-chars"
);

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export function createSessionToken(userId: string): Promise<string> {
  return new SignJWT({ uid: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);
}

export function setSessionCookie(res: any, token: string) {
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}

export function destroySessionCookie(res: any) {
  res.clearCookie(SESSION_COOKIE, { path: "/" });
}

export async function getSessionUser(req: any): Promise<SessionUser | null> {
  const token = req.cookies?.[SESSION_COOKIE];
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    const uid = payload.uid as string;
    if (!uid) return null;
    const user = await prisma.user.findUnique({ where: { id: uid } });
    if (!user) return null;
    return { id: user.id, name: user.name, email: user.email, role: user.role };
  } catch {
    return null;
  }
}
