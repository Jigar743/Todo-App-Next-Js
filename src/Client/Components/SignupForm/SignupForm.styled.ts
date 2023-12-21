import {
  desktopScreen,
  extraSmallScreen,
  laptopScreen,
  mobileScreen,
  tabletScreen,
} from "@/Styles/Global.styled";
import styled from "styled-components";
import { css } from "styled-components";

export const SignupFormStyled = styled.form.attrs({
  className: "shadow-md flex flex-col gap-4 p-5 rounded border m-auto",
})`
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
`;
