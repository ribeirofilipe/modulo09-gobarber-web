import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string()
    .min(6)
    .required(),
});

export default function SignIn({ email, password }) {
  async function handleSubmit() {}

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
