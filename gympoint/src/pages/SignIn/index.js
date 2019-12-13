import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('e-mail inválido.')
    .required('e-mail obrigatório.'),
  password: Yup.string().required('senha obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <p>GYMPOINT</p>
      <Form schema={schema} onSubmit={handleSubmit}>
        <p>SEU E-MAIL</p>
        <Input name="email" type="email" />

        <p>SUA SENHA</p>
        <Input name="password" type="password" />

        <button type="submit">Entrar no sistema</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
