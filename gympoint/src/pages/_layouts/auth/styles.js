import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 350px;
  text-align: center;
  background: #fff;
  height: 53%;
  border-radius: 5px;
  padding: 30px;

  > p {
    margin-top: 5px;
    font-weight: bold;
    font-size: 29px;
    color: #ee4d64;
    line-height: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    p {
      font-weight: bold;
      text-align: left;
      margin-bottom: 10px;
      font-size: 14px;
    }

    input {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6191;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }

    a {
      color: #ee4d64;
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
