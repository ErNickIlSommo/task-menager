import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.json({ routes: "task" });
});

export default router;
