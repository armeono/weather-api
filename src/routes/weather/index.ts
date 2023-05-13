import { Router } from "express";
import { getCurrent } from "../../controllers/weather/current/getCurrent";
import { getForecast } from "../../controllers/weather/forecast/getForecast";
import { getHistory } from "../../controllers/weather/history/getHistory";

const router = Router();

router.get("/current/:location", async (req, res) => {
  const location = req.params.location;

  const currentWeather = await getCurrent(location);

  res.send(currentWeather);
});

router.get("/forecast/:location", async (req, res) => {
  const location = req.params.location;

  const weatherForecast = await getForecast(location);

  res.send(weatherForecast);
});

router.get("/history/:location", async (req, res) => {
  const location = req.params.location;

  const weatherHistory = await getHistory(location);

  res.send(weatherHistory);
});
export default router;
