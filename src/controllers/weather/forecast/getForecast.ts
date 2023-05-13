import weatherAxios from "../../../config/axios";
import { ForecastReturnObject } from "../../../types";
import { parseForecast } from "./helpers/parseForecast";

export const getForecast = async (location: string) => {
  try {
    const forecast = await weatherAxios.get("/forecast.json", {
      params: {
        q: location,
        days: "3",
      },
    });

    const returnObject: ForecastReturnObject[] = parseForecast(forecast);

    return returnObject;
  } catch (err: any) {
    return err.response;
  }
};
