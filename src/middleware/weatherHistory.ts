import { NextFunction, Request, Response } from "express";
import { redisClient } from "../config/redis";

export const weatherHistoryMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const redisWeather = await redisClient.get("weatherHistory");

  if (
    redisWeather &&
    JSON.parse(redisWeather).city === req.params.location &&
    JSON.parse(redisWeather).date === req.params.date
  ) {
    res.status(200).json(JSON.parse(redisWeather).weatherHistory);
  } else {
    next();
  }
};
