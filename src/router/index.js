import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FormPage, InviteForm, MultiFormPage } from '../pages';
import { ROUTE_NAME } from './route-constant';

export const RouteList = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTE_NAME.SIGN_UP}>
        <MultiFormPage />
      </Route>
      <Route exact path={ROUTE_NAME.INVITE}>
        <InviteForm />
      </Route>
      <Route exact path={[ROUTE_NAME.FORM, ROUTE_NAME.BASE]}>
        <FormPage />
      </Route>
    </Switch>
  </Router>
);
