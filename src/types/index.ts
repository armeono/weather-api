export type CurrentReturnObject = {
  location: string;
  temeperatureCelcius: number;
  temperatureFahrenheit: number;
  description: string;
  humidity: number;
  windSpeedKPH: number;
  windSpeedMPH: number;
};

export type ForecastReturnObject = {
  date: string;
  averageTemperatureCelcius: number;
  averageTemperatureFahrenheit: number;
  description: string;
  uv: number;
  chanceOfRain: number;
  humidity: number;
  windSpeedKPH: number;
  windSpeedMPH: number;
};

export type HistoryReturnObject = {
  date: string;
  averageTemperatureCelcius: number;
  averageTemperatureFahrenheit: number;
  description: string;
  uv: number;
  chanceOfRain: number;
  humidity: number;
  windSpeedKPH: number;
  windSpeedMPH: number;
};
