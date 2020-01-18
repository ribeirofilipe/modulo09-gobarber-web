import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';
import api from '~/services/api';
import {
  updateRequest,
  addRequest,
} from '~/store/modules/plan/actions';
import { formatPrice, formatToNumber } from '~/services/format';

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

  const dispatch = useDispatch();

  const [duration, setDuration] = useState(0);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { id } = match.params;

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`plan/${id}`);

      if (response) {
        const { title, price, duration } = response.data;
      
        setPrice(formatPrice(price));
        setDuration(duration);
        setTitle(title);
        setTotalPrice(formatPrice(price * duration));
      }
    }

    loadPlan();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (price && duration) {
      setTotalPrice(formatPrice(formatToNumber(price) * duration));    
    }
  }, [price, duration])

  async function handleAddPlan() {
    dispatch(
      addRequest({
        price,
        duration,
        title,
      })
    );
  }

  async function handleUpdatePlan() {
    dispatch(
      updateRequest({
        id,
        price: formatToNumber(price),
        duration,
        title,
      })
    );
  }

  return (
    <>
      <Header>
        <p>{isEdition ? 'Edição de plano' : 'Novo plano'}</p>
        <Actions>
         
            <Link to="/plan">
              <button type="button">
                CANCELAR
              </button>
            </Link>
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
                name="duration"
                type="number"
                value={duration} 
                onChange={e => setDuration(e.target.value)}
              />
            </span>

            <span>
              <p>PREÇO MENSAL</p>
              <Input
                name="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </span>

            <span>
              <p>PREÇO TOTAL</p>
              <Input
                disabled
                type="money"
                name="totalPrice"
                value={totalPrice}
              />
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
