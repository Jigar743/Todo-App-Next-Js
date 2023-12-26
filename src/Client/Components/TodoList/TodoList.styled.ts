import styled from "styled-components";

export const TodoListContainer = styled.div`
  width: 75%;
  margin: auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .todo-container {
    padding: 10px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .todo-title {
      font-weight: 500;
      font-size: x-large;
    }
    .todo-description {
      font-weight: 100;
      font-size: smaller;
    }
    .todo-actions {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, -50%);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      gap: 5px;

      .anticon {
        padding: 10px;
        cursor: pointer;
        font-size: 17px;
        border-radius: 50%;
      }
    }
  }
`;
