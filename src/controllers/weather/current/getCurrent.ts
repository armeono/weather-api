import weatherAxios from "../../../config/axios";
import { parseCurrent } from "./helpers/parseCurrent";
import { CurrentReturnObject } from "../../../types";

export const getCurrent = async (location: string) => {
  try {
    const currentWeather = await weatherAxios.get("/current.json", {
      params: {
        q: location,
      },
    });

    const returnObject: CurrentReturnObject = parseCurrent(currentWeather);

    return returnObject;
  } catch (err: any) {
    return err.response.data.error;
  }
};
