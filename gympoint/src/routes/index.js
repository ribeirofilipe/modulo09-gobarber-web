import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Student from '~/pages/Student';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/student" component={Student} isPrivate />

      <Route path="/" component={() => <h1>404 NOT FOUND</h1>} />
    </Switch>
  );
}
