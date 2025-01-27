import React from 'react';
import { List } from './List';

export const MainTable = ({ countries, setCountries }) => {
  //정보 삭제 로직
  const deleteCountry = (name) => {
    const newCountryList = [...countries].filter(
      (country) => country.name !== name
    );
    localStorage.setItem('countryList', JSON.stringify(newCountryList));
    setCountries(newCountryList);

    alert('정보가 삭제되었습니다!');
  };

  return (
    <ul id="list-wrapper">
      <List countries={countries} deleteCountry={deleteCountry} />
    </ul>
  );
};
