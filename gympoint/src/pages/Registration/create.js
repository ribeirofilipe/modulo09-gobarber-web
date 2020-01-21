import React, { useEffect, useState, useMemo } from 'react';
import { addDays, format } from 'date-fns';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Details } from '~/components/Container/styles';
import { Header, Actions } from '~/components/Form/styles';
import { Select } from './styles';
import { formatPrice } from '~/services/format';

import { addRequest, updateRequest } from '~/store/modules/registration/actions';

import api from '~/services/api';

export default function RegistrationCreate({ isEdition, match }) {
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

  const [studentId, setStudent] = useState(0);
  const [plans, setPlans] = useState([]);
  const [planId, setPlan] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [finalValue, setFinalValue] = useState('');

  async function loadStudents() {
    const response = await api.get('/students');

    return response.data.data.map(student => (
      { 
        value: student.id,
        label: student.name
      } 
    ));
  }

  async function loadPlans() {
    const response = await api.get('/plans');

    setPlans(response.data);

    return response.data.map(plan => (
      { 
        value: plan.id,
        label: plan.title
      } 
    ));
  }

  useEffect(() => {
    if (isEdition) {
      async function loadStudent() {
        const response = await api.get(`registration/${id}`);
        
        if (response) {
          const { name, email, startDate, price, active } = response.data;
        
          setStudent(name);
          setPlan(email);
          setStartDate(startDate);
        }
      }
  
      loadStudent();

    }
  },[]);

  async function handleAddRegistration() {
    dispatch(
      addRequest({
        studentId,
        planId,
        startDate,
      })
    );
  }

  async function handleUpdateRegistration() {
    dispatch(
      updateRequest({
        studentId: 1,
        planId: 2,
        startDate,
      }, id)
    );
  }

  function handleChangePlan(e) {
    setPlan(e);

    const plan = plans.filter(plan => plan.id === e);

    setFinalValue(formatPrice(plan[0].duration * plan[0].price));
  }

  useMemo(() => {
    if (startDate && planId) {
      const plan = plans.filter(plan => plan.id === planId);

      const planFinishDate = format(addDays(new Date(startDate), (plan[0].duration * 30)), 'yyyy-MM-dd');

      return setFinishDate(planFinishDate);
    }
  }, [startDate])

  return (
    <>
      <Header>
        <p>Edição de matrícula</p>
        <Actions>
        <Link to="/student">
              <button type="button">
                CANCELAR
              </button>
            </Link>
          <button
            onClick={isEdition ? handleUpdateRegistration : handleAddRegistration}
            type="button"
          >
            {isEdition ? 'ATUALIZAR' : 'SALVAR'}
          </button>
        </Actions>
      </Header>

      <Container>
        <Form schema={schema}>
          <p>ALUNO</p>
          <Select
           cacheOptions
           loadOptions={loadStudents}
           defaultOptions 
           onChange={e => setStudent(e.value)}
           />
          <Details spanWidth={23.5}>
            <span>
              <p>PLANO</p>
              <Select 
                cacheOptions
                loadOptions={loadPlans}
                defaultOptions  
                onChange={e => handleChangePlan(e.value)}
              />
            </span>

            <span>
              <p>DATA DE INÍCIO</p>
              <Input
                className="input-form"
                name="startDate"
                type="date"
                value={startDate} 
                onChange={e => setStartDate(e.target.value)}
              />
            </span>

            <span>
              <p>DATA DE TÉRMINO</p>
              <Input 
                value={finishDate} 
                className="input-form" 
                readOnly 
                name="finishDate" 
                type="date" 
                disabled/>
            </span>

            <span>
              <p>VALOR FINAL</p>
              <Input 
                value={finalValue} 
                className="input-form" 
                name="finalValue" 
                readOnly
                disabled />
            </span>
          </Details>
        </Form>
      </Container>
    </>
  );
}
