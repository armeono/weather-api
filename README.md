# Weather API

This API provides weather information based on location.

## Endpoints

### Current Weather

Get the current weather for a specific location.

- **URL:** `/weather/current/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the current weather.

#### Example Current Weather Response

```json
{
    "location": "Barcelona",
    "temeperatureCelcius": 14,
    "temperatureFahrenheit": 57.2,
    "description": "Partly cloudy",
    "humidity": 88,
    "windSpeedKPH": 11.2,
    "windSpeedMPH": 6.9
}
```


### Weather Forecast

Get the weather forecast for a specific location.

- **URL:** `/weather/forecast/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the weather forecast.
  
#### Example Forecast Response

```json
[
 {
        "date": "2023-05-14",
        "averageTemperatureCelcius": 18,
        "averageTemperatureFahrenheit": 64.3,
        "description": "Patchy rain possible",
        "uv": 4,
        "chanceOfRain": 83,
        "humidity": 61,
        "windSpeedKPH": 18.7,
        "windSpeedMPH": 11.6
    },
]
```

### Weather History

Get the weather history for a specific location.

- **URL:** `/weather/history/:location/:date`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the weather history.
  - `date`: The date for which to retrieve the weather history.
  
#### Example Weather History Response

```json
{
    "location": "Barcelona",
    "temeperatureCelcius": 14,
    "temperatureFahrenheit": 57.2,
    "description": "Partly cloudy",
    "humidity": 88,
    "windSpeedKPH": 11.2,
    "windSpeedMPH": 6.9
}
```


