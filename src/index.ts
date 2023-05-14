import express from "express";
import weatherRouter from "./routes/weather";
import loginRouter from "./routes/auth";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./config/swagger";
import bodyParser from "body-parser";
import { authMiddleware } from "./middleware/auth";
require("dotenv").config();

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Weather API!");
});

// Middleware
app.use(authMiddleware);

// Swagger
const specs = swaggerJsDoc(swaggerOptions);

// Routes
app.use("/api/weather", weatherRouter);
app.use("/api/auth", loginRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

app
  .listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
  });
