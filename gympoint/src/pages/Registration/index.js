import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import { deleteRequest } from '~/store/modules/registration/actions';

import {
  List,
  Body,
  HeaderColumn,
  Head,
  Empty,
} from '~/components/Table/styles';
import { Container, SubMenu, Actions, Status } from './styles';

export default function Registration() {
  const [registrations, setRegistrations] = useState([]);

  const dispatch = useDispatch();

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

  async function handleDeleteRegistration(id) {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      <SubMenu>
        <p>Gerenciamento de matrículas</p>
        <Actions>
          <button type="button">
            <Link to="register-registration">CADASTRAR</Link>
          </button>
        </Actions>
      </SubMenu>

      {registrations.length > 0 ? (
        <List>
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
                <td>
                  <Status status={item.active}>
                    {item.active ? 'Ativo' : 'Inativo'}
                  </Status>
                </td>
                <td>
                  <Link to={{ pathname: `edit-registration/${item.id}` }}>Editar</Link>
                  <Link to="" onClick={() => handleDeleteRegistration(item.id)}>Deletar</Link>
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
