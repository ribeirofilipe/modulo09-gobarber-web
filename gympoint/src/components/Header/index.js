import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Menu, UserInfo, SubMenu } from './styles';
import logo from '~/assets/logoHeader.svg';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Menu>
        <img src={logo} alt="" />
        <p>GYMPOINT</p>

        <SubMenu>
          <Link to="/student">ALUNOS</Link>
          <Link to="/plan">PLANOS</Link>
          <Link to="/registration">MATRÍCULAS</Link>
          <Link to="/help-order">PEDIDOS DE AUXÍLIO</Link>
        </SubMenu>
      </Menu>

      <UserInfo>
        <p>{profile.name}</p>
        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </UserInfo>
    </Container>
  );
}
