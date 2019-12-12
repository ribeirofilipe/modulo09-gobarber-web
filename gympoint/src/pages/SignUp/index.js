import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required(),
  email: Yup.string()
    .email('e-mail inválido.')
    .required('e-mail obrigatório.'),
  password: Yup.string().required('senha obrigatória'),
});

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <p>GYMPOINT</p>
      <Form schema={schema}>
        <p>SEU NOME</p>
        <Input name="email" type="email" />

        <p>SEU E-MAIL</p>
        <Input name="email" type="email" />

        <p>SUA SENHA</p>
        <Input name="password" type="password" />

        <button type="submit">Cadastrar</button>
        <Link to="/">Login</Link>
      </Form>
    </>
  );
}
