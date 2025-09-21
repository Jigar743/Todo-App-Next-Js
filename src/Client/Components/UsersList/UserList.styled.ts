import styled from "styled-components";

export const UsersTable = styled.table`
  width: 90%;
  margin: auto;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #f0d6a8;
  }

  thead th {
    background: #ffecb3;
    color: #333;
    font-weight: 600;
  }

  tbody tr {
    transition: all 0.2s ease;
    &:hover {
      background: #fff3e0;
      transform: scale(1.01);
    }
  }

  td .anticon {
    margin: 0 5px;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #ff9800;

    &:hover {
      background: #ffd54f;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    th,
    td {
      padding: 8px 10px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
