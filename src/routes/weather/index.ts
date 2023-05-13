import { Router } from "express";
import { getCurrent } from "../../controllers/weather/current/getCurrent";

const router = Router();

router.get("/current/:location", async (req, res) => {
  const location = req.params.location;

  const currentWeather = await getCurrent(location);

  res.send(currentWeather);
});

router.get("/forecast/:location", (req, res) => {
  res.send("this the weather man");
});

router.get("/history/:location", (req, res) => {
  res.send("this the weather man");
});
export default router;
