import { Router } from "express";

const router = Router();

router.get("/current/:location", (req, res) => {
  res.send("this the weather man");
});

router.get("/forect/:location", (req, res) => {
  res.send("this the weather man");
});

router.get("/history/:location", (req, res) => {
  res.send("this the weather man");
});
export default router;
