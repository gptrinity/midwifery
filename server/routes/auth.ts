import { Router } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../index.js";
import { createSessionToken, setSessionCookie, destroySessionCookie, getSessionUser } from "../lib/auth.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password are required." });
    const user = await prisma.user.findUnique({ where: { email: String(email).toLowerCase().trim() } });
    if (!user) return res.status(401).json({ error: "Invalid email or password." });
    const ok = await bcrypt.compare(String(password), user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid email or password." });
    const token = await createSessionToken(user.id);
    setSessionCookie(res, token);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "All fields are required." });
    if (String(password).length < 6) return res.status(400).json({ error: "Password must be at least 6 characters." });
    const cleanEmail = String(email).toLowerCase().trim();
    const existing = await prisma.user.findUnique({ where: { email: cleanEmail } });
    if (existing) return res.status(409).json({ error: "An account with this email already exists." });
    const user = await prisma.user.create({
      data: {
        name: String(name).trim(),
        email: cleanEmail,
        passwordHash: await bcrypt.hash(String(password), 10),
        role: "STUDENT",
      },
    });
    const token = await createSessionToken(user.id);
    setSessionCookie(res, token);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.post("/logout", (_req, res) => {
  destroySessionCookie(res);
  res.json({ ok: true });
});

router.get("/me", async (req, res) => {
  const user = await getSessionUser(req);
  res.json({ user });
});

export default router;
