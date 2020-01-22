import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  height: 100%;
  max-width: 700px;
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
    color: #fff;
    font-weight: bold;
    width: 20%;
  }

  input {
    width: 40%;
    margin-left: 15px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    padding: 5px 10px;
  }
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 15px 0 10px 0;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const AwnserButton = styled.button`
  background: #EE4D64;
  border: 0;
  padding: 8px;
  border-radius: 5px;
  color: #FFF;
  font-weight: bold;
  width: 100%;
  height: 45px;
`;

export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border: 1px solid #eee;
  padding: 12px;
  font-family: 'Roboto';
`;

export const OpenModalButton = styled.button`
  background: #FFF;
  border: 0;
  color: #4D85EE;
`;