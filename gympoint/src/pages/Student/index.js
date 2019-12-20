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
import { Container, SubMenu, Actions } from './styles';

export default function Student() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');

      setStudents(response.data);
    }

    loadStudents();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!filteredStudents[0]) {
      setFilteredStudents(students);
    }

    if (!filter) {
      setStudents(filteredStudents);
    } else {
      const filtered = students.filter(x => x.name.includes(filter));
      setStudents(filtered);
    }
    // eslint-disable-next-line
  }, [filter]);

  return (
    <Container>
      <SubMenu>
        <p>Gerenciamento de alunos</p>
        <Actions>
          <button type="button">
            <Link to="/register-student">CADASTRAR</Link>
          </button>
          <input
            onChange={e => setFilter(e.target.value)}
            placeholder="Buscar aluno"
          />
        </Actions>
      </SubMenu>

      {students.length > 0 ? (
        <List>
          <Head>
            <HeaderColumn>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
              <th>AÇÕES</th>
            </HeaderColumn>
          </Head>
          <Body>
            {students.map(item => (
              <HeaderColumn key={item.email}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <Link to="/">Editar</Link>
                  <Link to="/">Deletar</Link>
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
