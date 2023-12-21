import {
  desktopScreen,
  extraSmallScreen,
  laptopScreen,
  mobileScreen,
  tabletScreen,
} from "@/styles/Global.styled";
import styled, { css } from "styled-components";

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 0.25rem;
  margin: auto;
  border-width: 1px;

  ${extraSmallScreen(
    css`
      width: 100%;
    `
  )}
  ${mobileScreen(css`
    width: 100%;
  `)}

  ${tabletScreen(
    css`
      width: 75%;
    `
  )}

  ${laptopScreen(
    css`
      width: 50%;
    `
  )}

  ${desktopScreen(
    css`
      width: 35%;
    `
  )}

  div {
    display: flex;
    flex-direction: column;
    input {
      border-width: 1px;
      border-radius: 0.25rem;
      width: 100%;
      padding: 0.5rem 0.75rem;
      appearance: none;
      line-height: 1.25rem;
      &:focus {
        outline: none;
      }
    }
  }
`;
