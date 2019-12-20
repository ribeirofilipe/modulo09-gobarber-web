import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';

export default function StudentCreate() {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    age: Yup.number()
      .min(1)
      .required(),
    weight: Yup.number().required(),
    height: Yup.number().required(),
  });

  return (
    <>
      <Header>
        <p>Cadastro de aluno</p>
        <Actions>
          <button type="button">CANCELAR</button>
          <button type="button">SALVAR</button>
        </Actions>
      </Header>

      <Container>
        <Form schema={schema}>
          <p>NOME COMPLETO</p>
          <Input name="name" />

          <p>ENDEREÇO DE E-MAIL</p>
          <Input name="email" type="email" />

          <Details spanWidth={32}>
            <span>
              <p>IDADE</p>
              <Input name="age" type="number" />
            </span>

            <span>
              <p>PESO (em kg)</p>
              <Input name="weight" type="number" />
            </span>

            <span>
              <p>ALTURA</p>
              <Input name="height" type="number" />
            </span>
          </Details>
        </Form>
      </Container>
    </>
  );
}
