import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import {
  updateRequest,
  addRequest,
  deleteRequest,
} from '~/store/modules/student/actions';

export default function StudentCreate({ isEdition, match }) {
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

  const { id } = match.params;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);

  useEffect(() => {
    if (isEdition) {
      async function loadStudent() {
        const response = await api.get(`student/${id}`);
        
        if (response) {
          const { name, email, age, weight, height } = response.data;
        
          setName(name);
          setEmail(email);
          setAge(age);
          setWeight(weight);
          setHeight(height);
        }
      }
  
      loadStudent();
    }
  },[]);

  async function handleAddStudent() {
    dispatch(
      addRequest({
        name,
        email,
        age,
        weight,
        height
      })
    );
  }

  async function handleUpdateStudent() {
    dispatch(
      updateRequest({
        name,
        email,
        age: Number(age),
        weight: Number(weight),
        height: Number(height),
      }, id)
    );
  }

  return (
    <>
      <Header>
      <p>{isEdition ? 'Ediçao de aluno' : 'Cadastro de aluno'}</p>
        <Actions>
          
        <Link to="/student">
              <button type="button">
                CANCELAR
              </button>
            </Link>
          <button
            onClick={isEdition ? handleUpdateStudent : handleAddStudent}
            type="button"
          >
            {isEdition ? 'ATUALIZAR' : 'SALVAR'}
          </button>
        </Actions>
      </Header>

      <Container>
        <Form schema={schema}>
          <p>NOME COMPLETO</p>
          <Input
            name="name"
            value={name} 
            onChange={e => setName(e.target.value)}
          />

          <p>ENDEREÇO DE E-MAIL</p>
          <Input
            name="email"
            type="email"
            value={email} 
            onChange={e => setEmail(e.target.value)}
          />
          <Details spanWidth={32}>
            <span>
              <p>IDADE</p>
              <Input
                name="age"
                type="number"
                value={age} 
                onChange={e => setAge(e.target.value)}
              />
            </span>

            <span>
              <p>PESO (em kg)</p>
              <Input
                name="weight"
                type="number"
                value={weight} 
                onChange={e => setWeight(e.target.value)}
              />
            </span>

            <span>
              <p>ALTURA</p>
              <Input
                name="height"
                type="number"
                value={height} 
                onChange={e => setHeight(e.target.value)}
              />
            </span>
          </Details>
        </Form>
      </Container>
    </>
  );
}
