import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import plan from './plan/reducer';
import student from './student/reducer';

export default combineReducers({
  auth,
  user,
  plan,
  student,
});
