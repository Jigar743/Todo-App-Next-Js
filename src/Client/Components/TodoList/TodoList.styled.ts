import styled, { keyframes } from "styled-components";

// Animation for todo items
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TodoListContainer = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TodoCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: ${fadeIn} 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  .todo-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
  }

  .todo-description {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.3;
  }

  .todo-timestamp {
    font-size: 0.8rem;
    color: #888;
  }

  .todo-actions {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    gap: 10px;
    opacity: 0;
    transition: opacity 0.2s ease;

    .anticon {
      font-size: 18px;
      padding: 6px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #444;

      &:hover {
        background-color: #ffecb3;
        color: #ff9800;
        transform: scale(1.1);
      }
    }
  }

  &:hover .todo-actions {
    opacity: 1;
  }
`;
