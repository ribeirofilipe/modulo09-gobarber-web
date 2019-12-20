import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  max-height: 1440px;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px;

  img {
    margin: 10px;
  }

  p {
    margin-left: 5px;
    font-weight: bold;
    color: #ee4d64;
    padding-right: 25px;
    border-right: 1px solid #dddddd;
    line-height: 35px;
  }
`;

export const SubMenu = styled.ul`
  a {
    transition: 0.5s;
    color: #999999;
    font-weight: bold;

    &:first-child {
      padding-left: 25px;
    }

    padding-right: 19px;

    &:hover {
      color: #444444;
      cursor: pointer;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 25px;
  text-align: right;

  p {
    font-weight: bold;
    font-size: 14px;
    color: #666666;

    margin-bottom: 5px;
  }

  button {
    text-align: right;
    border: none;
    font-size: 14px;
    background: #fff;
    color: #de3b3b;

    &:hover {
      cursor: pointer;
    }
  }
`;
