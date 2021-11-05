import React from 'react';
import { IWeatherData } from '../types';
import './index.css';

export const TodayWeather = (props: IWeatherData) => {
  let { temp, feels_like, humidity, weather } = props;

  let currentTemprature = Math.round(temp.day);
  let feelsLike = Math.round(feels_like.day);
  
  return (
    <div className='weatherInfo'>
      <span className='degree'>{currentTemprature}°</span>
      <div className='detailedInfo'>
        <span>Feels like: {feelsLike}°</span>
        <span>Humidity: {humidity}%</span>
        <span>Description: {weather[0].description}</span>
      </div>
    </div>
  );
};
