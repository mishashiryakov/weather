import React, { useEffect, useState, useCallback } from "react";
import { makeWeatherRequest } from "../../utils/makeWeatherRequest";
import { SelectCity } from "./SelectCity";
import { TodayWeather } from "./TodayWeather";
import { NextDayWeather } from "./NextDayWeather";
import { IResponseData } from "./types";
import "./index.css";
import moment from "moment";

const FOUR_DAYS = 4;
const cities = ["Minsk", "Moscow", "Bratislava"];

let initialSelectedCity: string;

if (window.localStorage.getItem("selectedCity") !== null) {
  initialSelectedCity = String(window.localStorage.getItem("selectedCity"));
} else {
  initialSelectedCity = "Minsk";
}

export const Home = () => {
  const [selectedCity, setSelectedCity] = useState<string>(initialSelectedCity);
  const [responseData, setResponseData] = useState<IResponseData>({
    isLoading: false,
    error: null,
    weatherData: [],
  });

  const updateWeather = useCallback(() => {
    setResponseData({ isLoading: true, error: null, weatherData: [] });
    makeWeatherRequest(selectedCity, FOUR_DAYS)
      .then((res) =>
        setResponseData({
          isLoading: false,
          error: null,
          weatherData: res.list,
      }))
      .catch((err) =>
        setResponseData({
          isLoading: false,
          error: err.message,
          weatherData: [],
      }));
    }, [selectedCity]
  );

  useEffect(() => {
    updateWeather();
  }, [selectedCity, updateWeather]);

  return (
    <div>
      <SelectCity
        cities={cities}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      />
      <div className='selectedCityBlock'>
        <span className="selectedCity">{selectedCity} </span>
        <span>{moment().format('LL')}</span>
      </div>
      {
        responseData.isLoading 
          ? <p>Данные загружаются</p>
          : responseData.error 
            ? <p className='error'>Ошибка при загрузке данных: {responseData.error}</p>
            : responseData.weatherData.length 
              ? <><TodayWeather {...responseData.weatherData[0]} />
                <div className="nextDaysWeatherBlock">
                  {responseData.weatherData.map((weather, index) => {
                    if (index !== 0) {
                      return <NextDayWeather key={index} {...weather} />;
                    } else {
                      return null;
                    }
                  })}
                </div>
              </>
            : <p>Нет данных</p>
      }
    </div>
  );
};
