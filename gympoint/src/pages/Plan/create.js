import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';

export default function PlanCreate() {
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
        <p>Edição de plano</p>
        <Actions>
          <button type="button">CANCELAR</button>
          <button type="button">SALVAR</button>
        </Actions>
      </Header>

      <Container>
        <Form schema={schema}>
          <p>TÍTULO DO PLANO</p>
          <Input name="title" />

          <Details spanWidth={32}>
            <span>
              <p>DURAÇÃO (em meses)</p>
              <Input name="age" type="number" />
            </span>

            <span>
              <p>PREÇO MENSAL</p>
              <Input name="weight" type="number" />
            </span>

            <span>
              <p>PREÇO TOTAL</p>
              <Input name="height" type="number" />
            </span>
          </Details>
        </Form>
      </Container>
    </>
  );
}
