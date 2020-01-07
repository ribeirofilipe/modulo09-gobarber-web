import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import CurrencyInput from '@pismo/react-currency-input';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';
import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/services/format';
import {
  updateRequest,
  getRequest,
  addRequest,
} from '~/store/modules/plan/actions';

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

  const [currentPlan, setCurrentPlan] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const plan = useSelector(state => state.plan.plan);

  const { id } = match.params;

  useEffect(() => {
    dispatch(getRequest(id));
    setCurrentPlan(plan);

    // eslint-disable-next-line
  }, []);

  async function handleAddPlan() {
    dispatch(
      addRequest({
        price: plan.price,
        duration: plan.duration,
        title: plan.title,
      })
    );
  }

  async function handleUpdatePlan() {
    dispatch(
      updateRequest({
        price: plan.price,
        duration: plan.duration,
        title: plan.title,
      })
    );
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
            value={plan.title}
            onChange={e => setCurrentPlan({ ...plan, title: e.target.value })}
          />

          <Details spanWidth={32}>
            <span>
              <p>DURAÇÃO (em meses)</p>
              <Input
                name="duration"
                type="number"
                value={plan.duration}
                onChange={e => {
                  setCurrentPlan({ ...plan, duration: e.target.value });
                  setTotalPrice(plan.price * e.target.value);
                }}
              />
            </span>

            <span>
              <p>PREÇO MENSAL</p>
              <Input
                name="price"
                value={plan.price}
                onChange={e => {
                  setCurrentPlan({ ...plan, price: e.target.value });
                  setTotalPrice(e.target.value * plan.duration);
                }}
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
