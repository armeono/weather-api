export const parseHistory = (history: any) => {
  return history.data.forecast.forecastday.map((day: any) => {
    return {
      date: day.date,
      averageTemperatureCelcius: day.day.avgtemp_c,
      averageTemperatureFahrenheit: day.day.avgtemp_f,
      description: day.day.condition.text,
      uv: day.day.uv,
      chanceOfRain: day.day.daily_chance_of_rain,
      humidity: day.day.avghumidity,
      windSpeedKPH: day.day.maxwind_kph,
      windSpeedMPH: day.day.maxwind_mph,
    };
  });
};
