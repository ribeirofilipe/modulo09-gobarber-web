import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  height: 100%;
  max-width: 1200px;
`;
export const SubMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

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
  width: 100%;

  button {
    background: #ee4d64;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    width: 20%;

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  input {
    width: 40%;
    margin-left: 15px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    padding: 5px 10px;
  }
`;
