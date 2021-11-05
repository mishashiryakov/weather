import { WEATHER_API } from '../constants/apiConstants';

export const makeWeatherRequest = (city, count) => {
  return fetch(`${WEATHER_API}q=${city}&cnt=${count}&units=metric`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "a057add1e6mshd7851d7438d13c9p19c1aajsn469e5f5fec27"
    }})
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        throw new Error(res.statusText)
      }
    })
}
