import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 80px auto;
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
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  display: flex;

  button {
    margin-right: 15px;
    background: #ee4d64;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    width: 142px;
  }

  input {
    width: 247px;
    border-radius: 5px;
    border: 1px solid #dddddd;
    padding: 5px 10px;
  }
`;

export const StudentList = styled.ul`
  max-height: 542px;
  background: #ffffff;
  border-radius: 4px;
`;

export const StudentInfo = styled.li`
  &:first-child {
    padding-top: 20px;
  }

  color: #666666;
  padding: 0 20px 10px 20px;
  margin-right: 20px;

  display: flex;
  justify-items: space-between;

  margin-bottom: 20px;
  border-bottom: 1px solid #dddddd;
`;
