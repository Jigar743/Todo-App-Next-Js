import styled, { css } from "styled-components";
import {
  desktopScreen,
  laptopScreen,
  tabletScreen,
  mobileScreen,
  extraSmallScreen,
} from "@/Styles/Global.styled";
import Link from "next/link";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1rem;
`;

export const SignupFormStyled = styled.form.attrs({
  className: "flex flex-col gap-4 p-5 rounded border bg-white shadow-md",
})`
  width: 100%;
  max-width: 500px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    label {
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      padding: 0.75rem;
      font-size: 1rem;
      transition: all 0.2s ease;
      &:focus {
        outline: none;
        border-color: #ff9800;
        box-shadow: 0 0 8px rgba(255, 152, 0, 0.2);
      }
    }
  }

  ${extraSmallScreen(css`
    width: 95%;
  `)}
  ${mobileScreen(css`
    width: 95%;
  `)}
  ${tabletScreen(css`
    width: 75%;
  `)}
  ${laptopScreen(css`
    width: 50%;
  `)}
  ${desktopScreen(css`
    width: 35%;
  `)}
`;

export const SignupButton = styled.button`
  background: #ff9800;
  color: #fff;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #fb8c00;
    transform: scale(1.03);
    box-shadow: 0 3px 10px rgba(255, 152, 0, 0.3);
  }
`;

export const LoginLink = styled(Link)`
  color: #ff9800;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
