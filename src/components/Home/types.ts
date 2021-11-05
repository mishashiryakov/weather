export interface IWeatherData {
  humidity: number,
  temp: {
    day: number
  },
  feels_like: {
    day: number
  },
  weather: {description: string}[],
  dt: number
}

export interface IResponseData {
  isLoading: boolean, 
  error: string | null, 
  weatherData: IWeatherData[]
}
