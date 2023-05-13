import express from "express";
import weatherRouter from "./routes/weather";
require("dotenv").config();

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the Weather API!");
});

// Routes
app.use("/api/weather", weatherRouter);

app
  .listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
  });
