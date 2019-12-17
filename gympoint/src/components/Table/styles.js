import styled from 'styled-components';

export const StudentList = styled.table`
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
`;

export const HeaderColumn = styled.tr`
  width: 100%;
  display: flex;

  font-size: 16px;

  td {
    a {
      padding-right: 10px;
      color: #de3b3b;

      &:first-child {
        color: #4d85ee;
      }
    }
  }
`;

export const Head = styled.thead`
  th {
    text-align: left;
    width: 100%;
    align-items: center;
    font-size: 16px;
  }
`;

export const Body = styled.tbody`
  td {
    font-size: 15px;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    padding: 20px 0 20px 0;
    color: #666666;
    text-align: left;
  }
`;

export const Empty = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
`;
