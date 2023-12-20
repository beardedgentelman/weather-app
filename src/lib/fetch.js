import axios from 'axios';

const GOOGLE_API_KEY = process.env.VUE_APP_GOOGLE_API;
const WEATHER_API_KEY = process.env.VUE_APP_WEATHER_API;
export const fetchLocations = async (value) => {
  try {
    const response = await axios.post(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=${GOOGLE_API_KEY}`);
    return response.data?.predictions ? response.data.predictions : null;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return null;
  }
};
export const fetchWeatherForDay = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return null;
  }
};
export const fetchWeatherForCharts = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=${WEATHER_API_KEY}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return null;
  }
};
export const fetchWeather = async (city) => ({
  day: await fetchWeatherForDay(city),
  charts: await fetchWeatherForCharts(city),
});
// eslint-disable-next-line consistent-return
export const fetchWeatherById = async (id) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${WEATHER_API_KEY}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchUserLocation = async (longitude, latitude) => {
  try {
    const response = await axios.post(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`);
    return response.data.predictions;
  } catch (error) {
    console.log(error);
    return null;
  }
};
