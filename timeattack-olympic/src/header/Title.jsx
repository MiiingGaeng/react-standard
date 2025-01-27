import React from 'react';
import { Button } from '../common/Button';

export const Title = ({
  countries,
  setCountries,
  sortByMedals,
  sortByTotal,
}) => {
  return (
    <div>
      <h1>Olympic Medals Tracking</h1>

      <Button
        type="button"
        onClick={() => setCountries(sortByMedals([...countries]))}
      >
        MEDALS
      </Button>
      <Button
        type="button"
        onClick={() => setCountries(sortByTotal([...countries]))}
      >
        TOTAL
      </Button>
    </div>
  );
};
