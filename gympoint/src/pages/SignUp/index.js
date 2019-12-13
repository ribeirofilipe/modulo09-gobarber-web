import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'nome muito curto.')
    .required('nome inválido.'),
  email: Yup.string()
    .email('e-mail inválido.')
    .required('e-mail obrigatório.'),
  password: Yup.string()
    .min(6, 'senha muito curta.')
    .required('senha obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <p>GYMPOINT</p>
      <Form schema={schema} onSubmit={handleSubmit}>
        <p>SEU NOME</p>
        <Input name="name" />

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
