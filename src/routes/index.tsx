import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Top from '../pages/Top';
import Coffees from '../pages/Coffees';
import CoffeeDetail from '../pages/CoffeeDetail';
import Foods from '../pages/Foods';
import FoodDetail from '../pages/FoodDetail';
import NotFound from '../pages/NotFound';

export const Path = {
  top: '/',
  coffees: '/coffees',
  coffee_detail: '/coffees/:id',
  foods: '/foods',
  food_detail: '/foods/:id',
};

export const routes = (
  <>
    <Switch>
      <Route exact path={Path.top} component={Top} />
      <Route exact path={Path.coffees} component={Coffees} />
      <Route exact path={Path.coffee_detail} component={CoffeeDetail} />
      <Route exact path={Path.foods} component={Foods} />
      <Route exact path={Path.food_detail} component={FoodDetail} />
      <Route exact component={NotFound} />
      FoodDetail
    </Switch>
  </>
);
