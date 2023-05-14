import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.originalUrl === "/api/auth/signup") return next();

  const authHeader = req.headers.authorization;

  const token = authHeader?.split(" ")[1];

  if (!token)
    res.status(403).json({ message: "Access forbidden! No token provided!" });

  jwt.verify(token!, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
    if (err) res.status(403).json({ message: "Invalid token!" });

    next();
  });
};
