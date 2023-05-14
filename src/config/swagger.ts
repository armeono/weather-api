export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API docs with Swagger",
      version: "0.1.0",
      description:
        "This is a simple Weather API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["src/routes/weather/index.ts"],
};
