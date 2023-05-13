export const parseHistory = (history: any) => {
  return {
    location: history.data.location.name,
    temeperatureCelcius: history.data.current.temp_c,
    temperatureFahrenheit: history.data.current.temp_f,
    description: history.data.current.condition.text,
    humidity: history.data.current.humidity,
    windSpeedKPH: history.data.current.wind_kph,
    windSpeedMPH: history.data.current.wind_mph,
  };
};
