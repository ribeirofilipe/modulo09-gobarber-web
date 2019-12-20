import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;
  height: 100%;
  max-width: 1380px;
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
  a {
    color: #fff;
  }

  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    background: #ee4d64;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    width: 18%;
  }
`;

export const Status = styled.p.attrs(props => ({
  status: props.status,
}))`
  background: ${props => (props.status ? '#7159c1' : '#ee4d64')};
  width: 30%;
  color: #fff !important;
  border-radius: 7px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
