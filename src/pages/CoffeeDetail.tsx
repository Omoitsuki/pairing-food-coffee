import React, { VFC, useEffect, useState } from 'react';
import CoffeeDetailData from '../mock/coffeeDetail.json';
import { FoodType, CoffeeDetailPage } from '../types/type';
import { URL } from '../env';

const CoffeeDetail: VFC = () => {
  const [coffeeDetailData, setCoffeeDetailData] = useState(CoffeeDetailData as CoffeeDetailPage);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const json = (await res.json()) as CoffeeDetailPage;
      setCoffeeDetailData(json);
    };
    void fetchData();
  }, []);

  return (
    <>
      <div>Status: {coffeeDetailData.status}</div>
      <div>Coffee: {coffeeDetailData.coffee.name}</div>
      <div>
        <span>Foods</span>
        {coffeeDetailData.foods.map((food: FoodType, index: number) => (
          <div key={index}>
            <div>{food.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoffeeDetail;
