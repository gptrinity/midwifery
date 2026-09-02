import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/auth.js";
import subjectsRoutes from "./routes/subjects.js";
import topicsRoutes from "./routes/topics.js";
import questionsRoutes from "./routes/questions.js";
import attemptsRoutes from "./routes/attempts.js";
import tutorRoutes from "./routes/tutor.js";
import papersRoutes from "./routes/papers.js";
import adminRoutes from "./routes/admin.js";
import homeRoutes from "./routes/home.js";
import progressRoutes from "./routes/progress.js";
import aiRoutes from "./routes/ai.js";

export const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectsRoutes);
app.use("/api/topics", topicsRoutes);
app.use("/api/questions", questionsRoutes);
app.use("/api/attempts", attemptsRoutes);
app.use("/api/tutor", tutorRoutes);
app.use("/api/papers", papersRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/ai", aiRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");

app.use(express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
