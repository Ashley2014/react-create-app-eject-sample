import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './App';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/user" component={App} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
