import React from 'react';
import moment from 'moment';
import { ONE_SECOND } from '../../../constants/dateConstants';
import { IWeatherData } from '../types';
import './index.css';

export const NextDayWeather = (props: IWeatherData) => {
  let { temp, feels_like, humidity, weather, dt } = props;

  let currentTemprature = Math.round(temp.day);
  let feelsLike = Math.round(feels_like.day);
  
  return (
    <div className='weatherInfoSmall'>
      <span className='degreeSmall'>{currentTemprature}°</span>
      <div className='detailedInfoSmall'>
        <span className='date'>{moment(dt * ONE_SECOND).format('LL')}</span>
        <span>Feels like: {feelsLike}°</span>
        <span>Humidity: {humidity}%</span>
        <span>Description: {weather[0].description}</span>
      </div>
    </div>
  );
}