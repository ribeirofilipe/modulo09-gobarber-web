import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  margin: auto;
  padding: 20px;

  form {
    p {
      font-weight: bold;
    }

    display: flex;
    flex-direction: column;

    .input-form {
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin: 10px 10px 10px 0;
      height: 45px; 
      padding: 10px;
    }
  }
`;

export const Details = styled.div.attrs(props => ({
  spanWidth: props.spanWidth,
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    width: ${props => `${props.spanWidth}%`};

    input {
      width: 100%;
    }
  }
`;
