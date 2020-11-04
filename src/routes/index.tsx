import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default Routes;
