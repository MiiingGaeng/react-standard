import React from 'react';
import { useState } from 'react';
import { HeaderForm } from './header/Form';
import { MainTable } from './main/MainTable';
import { Title } from './header/Title';

const App = () => {
  //state
  const countryList = JSON.parse(localStorage.getItem('countryList')) || [];
  const [countries, setCountries] = useState(countryList);

  //금-은-동 순서 정렬
  const sortByMedals = (list) => {
    return list.sort((a, b) => {
      if (a.gold !== b.gold) return b.gold - a.gold;
      if (a.silver !== b.silver) return b.silver - a.silver;
      if (a.bronze !== b.bronze) return b.bronze - a.bronze;
    });
  };

  //전체 메달수 정렬
  const sortByTotal = (list) => {
    return list.sort((a, b) => b.total - a.total);
  };

  return (
    <div id="wrapper">
      <Title
        countries={countries}
        setCountries={setCountries}
        sortByMedals={sortByMedals}
        sortByTotal={sortByTotal}
      />
      <HeaderForm
        countries={countries}
        setCountries={setCountries}
        sortByMedals={sortByMedals}
      />
      <MainTable countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
