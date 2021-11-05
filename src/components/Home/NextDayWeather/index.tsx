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
      {temp ? <span className='degreeSmall'>{currentTemprature}°</span> : null}
      <div className='detailedInfoSmall'>
        <span className='date'>{moment(dt * ONE_SECOND).format('LL')}</span>
        {feels_like ? <span>Feels like: {feelsLike}°</span> : null}
        {humidity ? <span>Humidity: {humidity}%</span> : null}
        {weather?.[0]?.description ? <span>Description: {weather[0].description}</span> : null}
      </div>
    </div>
  );
}