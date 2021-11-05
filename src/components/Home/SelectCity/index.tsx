import React from 'react';
import './index.css';

interface ISelectCityProps {
  cities: string[]
  setSelectedCity: (city: string) => void
  selectedCity: string
}

export const SelectCity = (props: ISelectCityProps) => {
  let { cities, setSelectedCity, selectedCity } = props;

  const selectCity = (city: string) => {
    window.localStorage.setItem('selectedCity', city);
    setSelectedCity(city);
  }

  return (
    <div className='selectCityButtons'>
      {cities.map(city => 
        <button
          key={city} 
          onClick={() => selectCity(city)}
          className={selectedCity === city ? 'selected' : ''}
        >{city}</button>
      )}
    </div>
  )
}