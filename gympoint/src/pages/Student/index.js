import React from 'react';

import {
  Container,
  SubMenu,
  StudentList,
  Actions,
  StudentInfo,
} from './styles';

export default function Student() {
  const data = [
    { id: 1, name: 'filipe', age: 25 },
    { id: 2, name: 'je', age: 4002 },
  ];

  return (
    <Container>
      <SubMenu>
        <p>Gerenciamento de alunos</p>
        <Actions>
          <button type="button">CADASTRAR</button>
          <input placeholder="Buscar aluno" />
        </Actions>
      </SubMenu>
      <StudentList>
        {data.map(student => (
          <StudentInfo>
            {student.name}
            {student.age}
          </StudentInfo>
        ))}
      </StudentList>
    </Container>
  );
}
