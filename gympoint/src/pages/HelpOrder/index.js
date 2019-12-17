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
import { Container } from './styles';

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
    <Container width={800}>
      {helpOrders.length > 0 ? (
        <StudentList>
          <Head>
            <HeaderColumn>
              <th>ALUNO</th>
              <th>AÇÕES</th>
            </HeaderColumn>
          </Head>
          <Body>
            {helpOrders.map(item => (
              <HeaderColumn key={item.student_id}>
                <td>{item.student_id}</td>
                <td>
                  <Link to="/">Responsder</Link>
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
