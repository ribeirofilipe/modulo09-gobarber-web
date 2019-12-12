import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('You are not a provider.');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Sign failure');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
