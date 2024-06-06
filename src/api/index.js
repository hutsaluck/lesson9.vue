import axios from 'axios';

const API_KEY = '5d34934e1e10ca4d0d47ae4f53cb402a'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = city => {
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}