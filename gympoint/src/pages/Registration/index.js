import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import {
  StudentList,
  Body,
  HeaderColumn,
  Head,
  Empty,
} from '~/components/Table/styles';
import { Container, SubMenu, Actions } from './styles';

export default function Registration() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('registrations');

      const data = response.data.map(register => ({
        ...register,
        startDate: format(
          parseISO(register.start_date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
        endDate: format(parseISO(register.end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
      }));

      setRegistrations(data);
    }

    loadRegistrations();
  }, []);

  return (
    <Container>
      <SubMenu>
        <p>Gerenciamento de matrículas</p>
        <Actions>
          <button type="button">CADASTRAR</button>
        </Actions>
      </SubMenu>

      {registrations.length > 0 ? (
        <StudentList>
          <Head>
            <HeaderColumn>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>STATUS</th>
              <th>AÇÕES</th>
            </HeaderColumn>
          </Head>
          <Body>
            {registrations.map(item => (
              <HeaderColumn key={item.student.name}>
                <td>{item.student.name}</td>
                <td>{item.plan.title}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.active ? 'Ativo' : 'Inativo'}</td>
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
