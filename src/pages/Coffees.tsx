import React, { VFC, useEffect, useState } from 'react';
import CoffeesData from '../mock/coffees.json';
import {  CoffeeType, CoffeesPage } from '../types/type';
import { URL } from '../env';

const Coffees: VFC = () => {
  const [coffeesData, setCoffeesData] = useState(CoffeesData as CoffeesPage);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const json = await res.json();
      setCoffeesData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Status: {coffeesData.status}</div>
      <div>
        <span>Coffees</span>
        {coffeesData.coffees.map((coffee: CoffeeType, index: number) => (
          <div key={index}>
            <div>{coffee.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Coffees;
