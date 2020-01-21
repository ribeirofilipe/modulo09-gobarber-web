import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Student from '~/pages/Student/index';
import StudentCreate from '~/pages/Student/create';

import Plan from '~/pages/Plan/index';
import PlanCreate from '~/pages/Plan/create';

import Registration from '~/pages/Registration/index';
import RegistrationCreate from '~/pages/Registration/create';

import HelpOrder from '~/pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/student" component={Student} isPrivate />
      <Route path="/plan" component={Plan} isPrivate />
      <Route path="/registration" component={Registration} isPrivate />
      <Route path="/help-order" component={HelpOrder} isPrivate />
      <Route path="/register-student" component={StudentCreate} isPrivate isEdition={false} />
      <Route path="/edit-student/:id" component={StudentCreate} isPrivate isEdition />
      <Route
        path="/register-plan"
        component={PlanCreate}
        isPrivate
        isEdition={false}
      />
      <Route path="/edit-plan/:id" component={PlanCreate} isPrivate isEdition />
      <Route
        path="/register-registration"
        component={RegistrationCreate}
        isPrivate
        isEdition={false}
      />
      <Route
        path="/edit-registration/:id"
        component={RegistrationCreate}
        isPrivate
        isEdition={true}
      />
      <Route path="/" component={() => <h1>404 NOT FOUND</h1>} />
    </Switch>
  );
}
