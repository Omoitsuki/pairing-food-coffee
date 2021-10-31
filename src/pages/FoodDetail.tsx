import React, { VFC, useEffect, useState } from 'react';
import FoodDetailData from '../mock/foodDetail.json';
import {  CoffeeType, FoodDetailPage } from '../types/type';
import { URL } from '../env';

const FoodDetail: VFC = () => {
  const [foodDetailData, setFoodDetailData] = useState(FoodDetailData as FoodDetailPage);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const json = await res.json();
      setFoodDetailData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Status: {foodDetailData.status}</div>
      <div>Food: {foodDetailData.food.name}</div>
      <div>
        <span>Coffees</span>
        {foodDetailData.coffees.map((coffee: CoffeeType, index: number) => (
          <div key={index}>
            <div>{coffee.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodDetail;
