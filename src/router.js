import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import App from './App';

import BasicLayout from './layouts/BasicLayout';
// import {  DatePicker} from 'antd';

// function dec(id){
//   console.log('evaluated', id);
//   return (target, property, descriptor) => console.log('executed', id);
// }
//
// class Example {
//   @dec(1)
//   @dec(2)
//   method(){}
// }

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={BasicLayout} />
        <Route path="/user" component={App} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
