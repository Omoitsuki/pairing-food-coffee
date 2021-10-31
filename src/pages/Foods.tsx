import React, { VFC, useEffect, useState } from 'react';
import FoodsData from '../mock/foods.json';
import { FoodType, FoodsPage } from '../types/type';
import { URL } from '../env';

const Foods: VFC = () => {
  const [foodsData, setFoodsData] = useState(FoodsData as FoodsPage);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const json = (await res.json()) as FoodsPage;
      setFoodsData(json);
    };
    void fetchData();
  }, []);

  return (
    <>
      <div>Status: {foodsData.status}</div>
      <div>
        <span>Foods</span>
        {foodsData.foods.map((food: FoodType, index: number) => (
          <div key={index}>
            <div>{food.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Foods;
