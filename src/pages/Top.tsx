import React, { VFC, useEffect, useState } from 'react';
import TopData from '../mock/top.json';
import { ContinentType, FoodType, TopPage } from '../types/type';
import { URL } from '../env';

const Top: VFC = () => {
  // 仮でモックJSONからデータを表示している
  const [topData, setTopData] = useState(TopData as TopPage);

  // ここでAPIリクエストを送信し、受け取ったデータを表示する
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const json = await res.json();
      setTopData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Status: {topData.status}</div>
      <div>
        <span>Continents</span>
        {topData.continents.map((continent: ContinentType, index: number) => (
          <div key={index}>
            <div>{continent.name}</div>
          </div>
        ))}
      </div>
      <div>
        <span>Foods</span>
        {topData.foods.map((food: FoodType, index: number) => (
          <div key={index}>
            <div>{food.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Top;
