import { Router } from "express";
import { getCurrent } from "../../controllers/weather/current/getCurrent";
import { getForecast } from "../../controllers/weather/forecast/getForecast";
import { getHistory } from "../../controllers/weather/history/getHistory";
const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Weather
 *     description: Weather API
 *
 * components:
 *   schemas:
 *     CurrentReturnObject:
 *       type: object
 *       properties:
 *         location:
 *           type: string
 *         temperatureCelcius:
 *           type: number
 *         temperatureFahrenheit:
 *           type: number
 *         description:
 *           type: string
 *         humidity:
 *           type: number
 *         windSpeedKPH:
 *           type: number
 *         windSpeedMPH:
 *           type: number
 *
 *     ForecastReturnObject:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *         averageTemperatureCelcius:
 *           type: number
 *         averageTemperatureFahrenheit:
 *           type: number
 *         description:
 *           type: string
 *         uv:
 *           type: number
 *         chanceOfRain:
 *           type: number
 *         humidity:
 *           type: number
 *         windSpeedKPH:
 *           type: number
 *         windSpeedMPH:
 *           type: number
 *
 *     HistoryReturnObject:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *         averageTemperatureCelcius:
 *           type: number
 *         averageTemperatureFahrenheit:
 *           type: number
 *         description:
 *           type: string
 *         uv:
 *           type: number
 *         chanceOfRain:
 *           type: number
 *         humidity:
 *           type: number
 *         windSpeedKPH:
 *           type: number
 *         windSpeedMPH:
 *           type: number
 */

/**
 * @swagger
 * /api/weather/current/{location}:
 *   get:
 *     summary: Get the current weather for a specific location.
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: location
 *         required: true
 *         description: The location for which to retrieve the current weather.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CurrentReturnObject'
 *
 */

router.get("/current/:location", async (req, res) => {
  const location = req.params.location;

  const currentWeather = await getCurrent(location);

  res.status(200).json(currentWeather);
});

/**
 * @swagger
 * /api/weather/forecast/{location}:
 *   get:
 *     summary: Get the weather forecast for a specific location.
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: location
 *         required: true
 *         description: The location for which to retrieve the weather forecast.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForecastReturnObject'
 */

router.get("/forecast/:location", async (req, res) => {
  const location = req.params.location;

  const weatherForecast = await getForecast(location);

  res.status(200).json(weatherForecast);
});

/**
 * @swagger
 * /api/weather/history/{location}/{date}:
 *   get:
 *     summary: Get the weather history for a specific location and date.
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: location
 *         required: true
 *         description: The location for which to retrieve the weather history.
 *         schema:
 *           type: string
 *       - in: path
 *         name: date
 *         required: true
 *         description: The date for which to retrieve the weather history.
 *         schema:
 *           type: string
 *           format: date
 *           example: 2023-01-01
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HistoryReturnObject'
 */

router.get("/history/:location/:date", async (req, res) => {
  const location = req.params.location;
  const date = req.params.date;

  const weatherHistory = await getHistory(location, date);

  res.status(200).json(weatherHistory);
});
export default router;
