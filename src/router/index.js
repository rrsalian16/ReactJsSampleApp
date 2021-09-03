import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MultiStepForm from '../components/MultiStepForm';
import { ROUTE_NAME } from './route-constant';

export const RouteList = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTE_NAME.SIGN_UP}>
        <MultiStepForm />
      </Route>
    </Switch>
  </Router>
);
