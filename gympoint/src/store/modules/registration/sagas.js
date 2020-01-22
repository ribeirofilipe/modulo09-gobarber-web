import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateSuccess, addSuccess, deleteSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* deleteRegistration({ payload }) {
    try {
      const { id } = payload;
  
      yield call(api.delete, `registration/${id}`, payload);
  
      yield put(deleteSuccess(payload));
  
      history.push('/registration');
      toast.success('Matrícula deletada com sucesso!');
    } catch (err) {
      toast.error('Falha ao deletar a Matrícula!');
    }
  }

export function* updateRegistration({ payload }) {
  try {
    const { planId, studentId, startDate, id } = payload.data;

    yield call(api.put, `registration/${id}?plan_id=${planId}&student_id=${studentId}`, { start_date: startDate });

    yield put(updateSuccess(payload));

    history.push('/registration');
    toast.success('Matrícula atualizada com sucesso!');
  } catch (err) {
    toast.error('Falha ao atualizar a Matrícula!');
  }
}

export function* addRegistration({ payload }) {
  try {
    const { planId, studentId, startDate } = payload.data;   

    const response = yield call(api.post, `registration?plan_id=${planId}&student_id=${studentId}`, { start_date: startDate } );

    yield put(addSuccess(response));

    history.push('/registration');
    toast.success('Matrícula adicionada com sucesso!');
  } catch (err) {
    toast.error('Erro ao adicionar nova Matrícula!');
  }
}

export default all([
  takeLatest('@registration/UPDATE_REQUEST', updateRegistration),
  takeLatest('@registration/ADD_REQUEST', addRegistration),
  takeLatest('@registration/DELETE_REQUEST', deleteRegistration),
]);
