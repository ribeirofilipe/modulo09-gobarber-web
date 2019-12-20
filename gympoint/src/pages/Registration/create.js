import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';

export default function RegistrationCreate() {
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
        <p>Edição de matrícula</p>
        <Actions>
          <button type="button">CANCELAR</button>
          <button type="button">SALVAR</button>
        </Actions>
      </Header>

      <Container>
        <Form schema={schema}>
          <p>ALUNO</p>
          <Input name="name" />

          <Details spanWidth={23.5}>
            <span>
              <p>PLANO</p>
              <Input name="plan" />
            </span>

            <span>
              <p>DATA DE INÍCIO</p>
              <Input name="startDate" type="number" />
            </span>

            <span>
              <p>DATA DE TÉRMINO</p>
              <Input readOnly name="finishDate" type="number" />
            </span>

            <span>
              <p>VALOR FINAL</p>
              <Input readOnly name="finalValue" type="number" />
            </span>
          </Details>
        </Form>
      </Container>
    </>
  );
}
