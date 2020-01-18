import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateSuccess, addSuccess, deleteSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* deleteStudent({ payload }) {
    try {
      const { id } = payload;
  
      yield call(api.delete, `student/${id}`, payload);
  
      yield put(deleteSuccess(payload));
  
      history.push('/student');
      toast.success('Estudante deletado com sucesso!');
    } catch (err) {
      toast.error('Falha ao deletar o Estudante!');
    }
  }

export function* updateStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.put, `student/${id}`, payload);

    yield put(updateSuccess(payload));

    history.push('/student');
    toast.success('Estudante atualizado com sucesso!');
  } catch (err) {
    toast.error('Falha ao atualizar o Estudante!');
  }
}

export function* addStudent({ payload }) {
  try {
    const response = yield call(api.post, 'students', payload.data);

    yield put(addSuccess(response));

    history.push('student');
    toast.success('Estudante adicionado com sucesso!');
  } catch (err) {
    toast.error('Erro ao adicionar novo Estudante!');
  }
}

export default all([
  takeLatest('@student/UPDATE_REQUEST', updateStudent),
  takeLatest('@student/ADD_REQUEST', addStudent),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
]);
