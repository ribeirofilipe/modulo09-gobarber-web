import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';


export function* updateHelpOrder({ payload }) {
  try {
    const { orderId, answer } = payload.data;

    yield call(api.put, `help-orders/${orderId}/answer`, {
      answer
    });

    yield put(updateSuccess());

    history.push('/help-order');
    toast.success('Resposta enviada com sucesso!');
  } catch (err) {
    toast.error('Falha ao enviar a resposta ao aluno!');
  }
}

export default all([
  takeLatest('@help-order/UPDATE_REQUEST', updateHelpOrder),
]);
