# Weather API

This API provides weather information based on location.

## Endpoints

### Current Weather

Get the current weather for a specific location.

- **URL:** `/weather/current/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the current weather.

#### Example


### Weather Forecast

Get the weather forecast for a specific location.

- **URL:** `/weather/forecast/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the weather forecast.

#### Example


### Weather History

Get the weather history for a specific location.

- **URL:** `/weather/history/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the weather history.

#### Example


## Response Format

The API responds with weather information in JSON format. The response contains the following fields:

- `location`: The location for which the weather information is provided.
- `temperature`: The current temperature in Celsius.
- `description`: A brief description of the weather conditions.
- `humidity`: The humidity percentage.
- `windSpeed`: The wind speed in kilometers per hour.

#### Example Response

```json
{
  "location": "New York",
  "temperature": 20,
  "description": "Partly cloudy",
  "humidity": 70,
  "windSpeed": 15
}
