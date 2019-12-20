import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import {
  List,
  Body,
  HeaderColumn,
  Head,
  Empty,
} from '~/components/Table/styles';
import { Container, SubMenu } from './styles';

export default function Plan() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('help-orders');

      setHelpOrders(response.data);
    }

    loadPlans();
  }, []);

  return (
    <Container>
      <SubMenu>
        <p>Pedidos de auxílio</p>
      </SubMenu>

      {helpOrders.length > 0 ? (
        <List>
          <Head>
            <HeaderColumn>
              <th>ALUNO</th>
              <th>AÇÕES</th>
            </HeaderColumn>
          </Head>
          <Body>
            {helpOrders.map(item => (
              <HeaderColumn key={item.student_id}>
                <td>{item.student.name}</td>
                <td>
                  <Link to="/">Responder</Link>
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
