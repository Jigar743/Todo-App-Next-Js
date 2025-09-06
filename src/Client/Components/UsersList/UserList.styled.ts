import styled from "styled-components";

export const UsersTable = styled.table`
  th,
  td {
    padding: 10px 20px;
    text-align: left;
    border: 2px solid #f9d6a8;
    > .anticon {
      border: 1px solid #f9d6a8;
      border-radius: 50%;
      padding: 5px;
      cursor: pointer;
      margin: 0 5px;
    }
  }
`;
