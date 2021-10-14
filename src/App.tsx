import React, { VFC } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { routes } from './routes';

const history = createBrowserHistory();

const App: VFC = () => {
  return (
    <>
      <Router history={history}>{routes}</Router>
    </>
  );
};

export default App;
