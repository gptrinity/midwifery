export function aiConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY);
}