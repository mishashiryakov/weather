import React, { useCallback, useEffect, useState } from 'react';
import { makeWeatherRequest } from '../../utils/makeWeatherRequest';
import { NextDayWeather } from '../Home/NextDayWeather';
import { IResponseData } from '../Home/types';
import './index.css';

const TEN_DAYS = 10;
let timer: any;

export const ExtendedWeather = () => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [responseData, setResponseData] = useState<IResponseData>({ isLoading: true, error: null, weatherData: []});
  
  useEffect(() => {
    let params = window.location.href.split('/');
    let cityFromPath = params[params.length - 1];
    setSelectedCity(cityFromPath.toLowerCase());
  }, [])

  const updateWeather = useCallback(() => {
    setResponseData({ isLoading: true, error: null, weatherData: []});
    makeWeatherRequest(selectedCity, TEN_DAYS)
      .then(res => 
        setResponseData({ isLoading: false, error: null, weatherData: res.list})
      )
      .catch(err => 
        setResponseData({ isLoading: false, error: err.message, weatherData: []})
      )
  }, [selectedCity])

  useEffect(() => {
    clearTimeout(timer)
    timer = setTimeout(updateWeather, 320)
  }, [selectedCity, updateWeather])

  return (
    <div>
      <input className='selectedCityInput' value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}/>
      {
        responseData.isLoading 
          ? <p>Данные загружаются</p>
          : responseData.error 
            ? <p className='error'>Ошибка при загрузке данных: {responseData.error}</p>
            : responseData.weatherData.length 
              ? <div className="extendedWeatherInfo">
                  {
                  responseData.weatherData.map((weather, index) =>
                   <NextDayWeather key={index} {...weather} />
                  )
                  }
              </div>
            : <p>Нет данных</p>
      }
    </div>
  )
}