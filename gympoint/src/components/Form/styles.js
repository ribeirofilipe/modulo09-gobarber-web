import styled from 'styled-components';

export const Header = styled.div`
  max-width: 900px;
  padding: 10px 0 20px 0;
  width: 100%;
  border-radius: 4px;
  margin: auto;
  margin-top: 20px;

  display: flex;
  align-items: center;

  p {
    @media only screen and (max-width: 600px) {
      width: 50%;
    }

    width: 70%;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  button {
    :not(:first-child) {
      background: #ee4d64;
    }

    background: #cccccc;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    width: 25%;
    margin-left: 16px;
    height: 36px;
    color: #fff;
  }
`;
