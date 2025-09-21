import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

// Styled components
export const FormContainer = styled.div<{ open: boolean }>`
  width: 80%;
  max-width: 600px;
  margin: 30px auto;
  padding: 20px 30px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.3s ease forwards;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #ff9800;
    box-shadow: 0 0 8px rgba(255, 152, 0, 0.3);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  resize: vertical;
  min-height: 80px;
  &:focus {
    outline: none;
    border-color: #ff9800;
    box-shadow: 0 0 8px rgba(255, 152, 0, 0.3);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "primary"
      ? `
    background: #ff9800;
    color: #fff;
    &:hover {
      background: #fb8c00;
      transform: scale(1.05);
    }
  `
      : `
    background: #f5f5f5;
    color: #333;
    border: 1px solid #ddd;
    &:hover {
      background: #eee;
      transform: scale(1.03);
    }
  `}
`;
