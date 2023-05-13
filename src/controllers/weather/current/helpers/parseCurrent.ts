import { WeatherReturnObject } from "../../../../types";

export const parseCurrent = (currentWeather: any): WeatherReturnObject => {
  return {
    location: currentWeather.data.location.name,
    temeperatureCelcius: currentWeather.data.current.temp_c,
    temperatureFahrenheit: currentWeather.data.current.temp_f,
    description: currentWeather.data.current.condition.text,
    humidity: currentWeather.data.current.humidity,
    windSpeedKPH: currentWeather.data.current.wind_kph,
    windSpeedMPH: currentWeather.data.current.wind_mph,
  };
};
