import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateSuccess, addSuccess, deleteSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* deletePlan({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `plan/${id}`, payload);

    yield put(deleteSuccess(payload));

    history.push('/plan');
    toast.success('Plano deletado com sucesso!');
  } catch (err) {
    toast.error('Falha ao deletar o Plano!');
  }
}

export function* updatePlan({ payload }) {
  try {
    const { id, title, price, duration } = payload.data;

    yield call(api.put, `plans/${id}`, {
      title, 
      price,
      duration
    });

    yield put(updateSuccess(payload));

    history.push('/plan');
    toast.success('Plano atualizado com sucesso!');
  } catch (err) {
    toast.error('Falha ao atualizar o plano!');
  }
}

export function* addPlan({ payload }) {
  try {
    const plan = yield call(api.post, 'plans', payload.data);

    yield put(addSuccess(plan));

    history.push('plan');
    toast.success('Plano adicionado com sucesso!');
  } catch (err) {
    toast.error('Erro ao adicionar novo plano!');
  }
}

export default all([
  takeLatest('@plan/UPDATE_REQUEST', updatePlan),
  takeLatest('@plan/ADD_REQUEST', addPlan),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
