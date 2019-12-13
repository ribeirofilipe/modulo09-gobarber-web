import React from 'react';
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
          <span>ALUNOS</span>
          <span>PLANOS</span>
          <span>MATRÍCULAS</span>
          <span>PEDIDOS DE AUXÍLIO</span>
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
