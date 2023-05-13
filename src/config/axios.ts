import axios from "axios";
require("dotenv").config();

const weatherAxios = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": process.env.WEATHER_API_KEY,
  },
});

export default weatherAxios;
