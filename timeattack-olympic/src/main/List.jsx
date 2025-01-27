import React from 'react';
import { Button } from '../common/Button';

export const List = ({ countries, deleteCountry }) => {
  return (
    <>
      {!countries.length ? (
        <li>아직 정보가 없습니다.</li>
      ) : (
        countries.map(({ name, gold, silver, bronze, total }) => {
          return (
            <li key={name}>
              {name} {gold} {silver} {bronze} {total}
              <Button type="button" onClick={() => deleteCountry(name)}>
                DELETE
              </Button>
            </li>
          );
        })
      )}
    </>
  );
};
