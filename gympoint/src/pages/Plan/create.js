import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';
import api from '~/services/api';
import history from '~/services/history';

export default function PlanCreate({ isEdition, match }) {
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

  const { id } = match.params;

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`plan/${id}`);

      const data = {
        ...response.data,
        totalPrice: `R$ ${response.data.price * response.data.duration}`,
      };

      setDuration(data.duration);
      setPrice(data.price);
      setTitle(data.title);
      setTotalPrice(data.totalPrice);
    }

    if (isEdition) {
      loadPlan();
    }
  }, [id, isEdition]);

  async function handleAddPlan() {
    await api.post('plans', {
      title,
      duration,
      price,
    });

    history.push('/plan');
    toast.success('Plano inserido com sucesso!');
  }

  async function handleUpdatePlan() {
    await api.put(`plans/${id}`, {
      title,
      duration,
      price,
    });

    history.push('/plan');
    toast.success('Plano atualizado com sucesso!');
  }

  return (
    <>
      <Header>
        <p>{isEdition ? 'Edição de plano' : 'Novo plano'}</p>
        <Actions>
          <button type="button">
            <Link to="plan">CANCELAR</Link>
          </button>
          <button
            onClick={isEdition ? handleUpdatePlan : handleAddPlan}
            type="button"
          >
            {isEdition ? 'ATUALIZAR' : 'SALVAR'}
          </button>
        </Actions>
      </Header>

      <Container>
        <Form schema={schema}>
          <p>TÍTULO DO PLANO</p>
          <Input
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <Details spanWidth={32}>
            <span>
              <p>DURAÇÃO (em meses)</p>
              <Input
                name="age"
                type="number"
                value={duration}
                onChange={e => {
                  setDuration(e.target.value);
                  setTotalPrice(`R$ ${e.target.value * price}`);
                }}
              />
            </span>

            <span>
              <p>PREÇO MENSAL</p>
              <Input
                name="weight"
                value={price}
                onChange={e => {
                  setPrice(e.target.value);
                  setTotalPrice(`R$ ${e.target.value * duration}`);
                }}
              />
            </span>

            <span>
              <p>PREÇO TOTAL</p>
              <Input disabled name="height" value={totalPrice} />
            </span>
          </Details>
        </Form>
      </Container>
    </>
  );
}

PlanCreate.propTypes = {
  isEdition: PropTypes.bool.isRequired,
};
