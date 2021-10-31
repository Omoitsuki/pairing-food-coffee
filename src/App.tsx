import React, { VFC } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { routes } from './routes';
import Layout from "./common/Layout";

const history = createBrowserHistory();

const App: VFC = () => {
  return (
    <Layout>
      <Router history={history}>{routes}</Router>
    </Layout>
  );
};

export default App;
