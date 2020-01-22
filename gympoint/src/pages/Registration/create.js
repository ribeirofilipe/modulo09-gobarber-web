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

  const [student, setStudent] = useState({});
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState({});
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
          const { start_date } = response.data;
          const { id: studentId, name } = response.data.student;
          const { id: planId, title, duration, price } = response.data.plan;

          setStudent({ value: studentId, label: name }); 
          setPlan({ value: planId, label: title });
          setStartDate(format(new Date(start_date), 'yyyy-MM-dd'));
          setFinalValue(formatPrice(duration * price));
        }
      }
  
      loadStudent();

    }
  },[]);

  async function handleAddRegistration() {
    dispatch(
      addRequest({
        studentId: student.value,
        planId: plan.value,
        startDate,
      })
    );
  }

  async function handleUpdateRegistration() {
    dispatch(
      updateRequest({
        studentId: student.value,
        planId: plan.value,
        startDate,
        id
      })
    );
  }

  function handleChangePlan(e) {
    setPlan({ value: e.value, label: e.label });

    const plan = plans.filter(plan => plan.id === e.value);

    setFinalValue(formatPrice(plan[0].duration * plan[0].price));
  }

  useMemo(() => {
    if (startDate && plan.value) {
      const newPlan = plans.filter(x => x.id === plan.value);

      console.log(newPlan);

      const planFinishDate = format(addDays(new Date(startDate), (newPlan[0].duration * 30)), 'yyyy-MM-dd');

      return setFinishDate(planFinishDate);
    }
  }, [startDate, plan, plans])

  return (
    <>
      <Header>
        <p>{isEdition ? 'Edição de matrícula' : 'Nova matrícula'}</p>
        <Actions>
        <Link to="/registration">
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
           value={student}
           onChange={e => setStudent({ value: e.value, label: e.label})}
           />
          <Details spanWidth={23.5}>
            <span>
              <p>PLANO</p>
              <Select 
                cacheOptions
                loadOptions={loadPlans}
                defaultOptions  
                value={plan}
                onChange={e => handleChangePlan(e)}
              />
            </span>

            <span>
              <p>DATA DE INÍCIO</p>
              <Input
                value={startDate} 
                className="input-form"
                name="startDate"
                type="date"
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
