import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import {
  StudentList,
  Body,
  HeaderColumn,
  Head,
  Empty,
} from '~/components/Table/styles';
import { Container, SubMenu, Actions } from './styles';

export default function Plan() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      setPlans(response.data);
    }

    loadPlans();
  }, []);

  return (
    <Container>
      <SubMenu>
        <p>Gerenciamento de planos</p>
        <Actions>
          <button type="button">CADASTRAR</button>
        </Actions>
      </SubMenu>

      {plans.length > 0 ? (
        <StudentList>
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
              <HeaderColumn key={item.title}>
                <td>{item.title}</td>
                <td>{item.duration}</td>
                <td>{item.price}</td>
                <td>
                  <Link to="/">Editar</Link>
                  <Link to="/">Deletar</Link>
                </td>
              </HeaderColumn>
            ))}
          </Body>
        </StudentList>
      ) : (
        <Empty>Nada encontrado.</Empty>
      )}
    </Container>
  );
}
