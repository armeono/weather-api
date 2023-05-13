import weatherAxios from "../../../config/axios";
import { HistoryReturnObject } from "../../../types";
import { parseHistory } from "./helpers/parseHistory";

export const getHistory = async (location: string, date: string) => {
  try {
    const history = await weatherAxios.get("/history.json", {
      params: {
        q: location,
        date: date,
        lang: "en",
      },
    });

    const returnObject: HistoryReturnObject[] = parseHistory(history);

    return returnObject;
  } catch (err: any) {
    return err.response;
  }
};
