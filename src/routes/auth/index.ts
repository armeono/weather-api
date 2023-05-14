import { Router } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../../../prisma/client";

const router = Router();

type Auth = {
  username: string;
  password: string;
};

router.post("/signup", async (req, res) => {
  const requestObject: Auth = req.body;

  const user = {
    username: requestObject.username,
    password: requestObject.password,
  };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!);

  if (accessToken) {
    await prisma.user.create({
      data: {
        userName: user.username,
        password: user.password,
        token: accessToken,
      },
    });
  }

  res.status(200).json({ accessToken });
});

router.post("/login", (req, res) => {});

export default router;
