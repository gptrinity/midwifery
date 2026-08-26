import { Router } from "express";
import { aiConfigured } from "../lib/ai.js";

const router = Router();

router.get("/configured", (_req, res) => {
  res.json({ configured: aiConfigured() });
});

export default router;
