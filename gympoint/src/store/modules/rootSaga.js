import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import plan from './plan/sagas';
import student from './student/sagas';
import registration  from './registration/sagas';
import helpOrder  from './help-order/sagas';

export default function* rootSaga() {
  return yield all([
    auth, 
    user, 
    plan, 
    student, 
    registration,
    helpOrder,
  ]);
}
