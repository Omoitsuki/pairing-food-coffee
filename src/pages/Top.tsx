import React, { VFC, useEffect, useState } from 'react';
import Layout from '../common/Layout';
import Data from '../mock/top.json';
import { ContinentType, FoodType, TopPage } from '../types/type';
import { URL } from '../env';

const Top: VFC = () => {
  // 仮でモックJSONからデータを表示している
  const [topData, setTopData] = useState(Data as TopPage);

  // ここでAPIリクエストを送信し、受け取ったデータを表示する
  useEffect(() => {
    void fetch(URL)
      .then((res) => res.json())
      .then((data: TopPage) => {
        setTopData(data);
      });
  }, []);

  return (
    <>
      <Layout>
        <div>Status: {topData.status}</div>
        <div>
          <span>大陸</span>
          {topData.continents.map((continent: ContinentType, index: number) => (
            <div key={index}>
              <div>{continent.name}</div>
            </div>
          ))}
        </div>
        <div>
          <span>フード</span>
          {topData.foods.map((food: FoodType, index: number) => (
            <div key={index}>
              <div>{food.name}</div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Top;
