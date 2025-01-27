import React from 'react';
import { useState } from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const HeaderForm = ({ countries, setCountries, sortByMedals }) => {
  //state
  const [name, setName] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  //정보 추가 로직
  const addCountry = (name, gold, silver, bronze) => {
    const newData = {
      name,
      gold,
      silver,
      bronze,
      total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
    };

    //예외처리 : 이미 존재하는 데이터
    if (
      countries.some(
        (country) => country.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('이미 존재하는 정보입니다.');
      return;
    }

    //예외처리 : 이름 빈칸
    if (!name.trim()) {
      alert('국가명을 입력해주세요.');
      return;
    }

    const newCountryList = sortByMedals([...countries, newData]);
    localStorage.setItem('countryList', JSON.stringify(newCountryList));
    setCountries(newCountryList);

    alert('정보가 추가되었습니다!');
  };

  //정보 수정 로직
  const updateCountry = (name, gold, silver, bronze) => {
    const updateData = {
      name,
      gold,
      silver,
      bronze,
      total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
    };

    //예외처리 : 해당 정보 없음
    if (
      !countries.some(
        (country) => country.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('없는 정보 입니다.');
      return;
    }

    const newCountryList = sortByMedals(
      [...countries].map((country) =>
        country.name.toLowerCase() === name.toLowerCase() ? updateData : country
      )
    );
    localStorage.setItem('countryList', JSON.stringify(newCountryList));
    setCountries(newCountryList);

    alert('정보가 수정되었습니다!');
  };

  return (
    <div id="form-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCountry(name, gold, silver, bronze);
        }}
      >
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Country Name"
        >
          Country
        </Input>

        <Input
          type="number"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
          min={0}
          max={100}
          placeholder="0"
        >
          Golds
        </Input>

        <Input
          type="number"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
          min={0}
          max={100}
        >
          Silver
        </Input>

        <Input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
          min={0}
          max={100}
        >
          Bronze
        </Input>

        <Button type="submit">ADD</Button>
        <Button
          type="button"
          onClick={() => updateCountry(name, gold, silver, bronze)}
        >
          UPDATE
        </Button>
      </form>
    </div>
  );
};
