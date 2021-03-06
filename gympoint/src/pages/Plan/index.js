import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { formatPrice } from '~/services/format';
import { deleteRequest } from '~/store/modules/plan/actions';

import {
  List,
  Body,
  HeaderColumn,
  Head,
  Empty,
} from '~/components/Table/styles';
import { Container, SubMenu, Actions } from './styles';
import { useDispatch } from 'react-redux';

export default function Plan() {
  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();
  
  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      const data = response.data.map(plan => ({
        ...plan,
        formattedPrice: formatPrice(plan.price),
        formattedDuration: plan.duration !== 1 ? `${plan.duration} meses` : `${plan.duration} mês`
      }));

      setPlans(data);
    }

    loadPlans();
  }, []);

  async function handleDeletePlan(id) {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      <SubMenu>
        <p>Gerenciamento de planos</p>
        <Actions>
          <button type="button">
            <Link to="register-plan">CADASTRAR</Link>
          </button>
        </Actions>
      </SubMenu>

      {plans.length > 0 ? (
        <List>
          <Head>
            <HeaderColumn>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>PREÇO</th>
              <th>AÇÕES</th>
            </HeaderColumn>
          </Head>
          <Body>
            {plans.map(item => (
              <HeaderColumn key={item.id}>
                <td>{item.title}</td>
                <td>{item.formattedDuration}</td>
                <td>{item.formattedPrice}</td>
                <td>
                  <Link to={{ pathname: `edit-plan/${item.id}` }}>Editar</Link>
                  <Link to="" onClick={() => handleDeletePlan(item.id)}>Deletar</Link>
                </td>
              </HeaderColumn>
            ))}
          </Body>
        </List>
      ) : (
        <Empty>Nada encontrado.</Empty>
      )}
    </Container>
  );
}
