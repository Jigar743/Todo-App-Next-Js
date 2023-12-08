import { CSSProp, createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Apply Tailwind CSS classes in global styles */
  body{
    font-family: 'Mooli-regular', sans-serif;
  }
  `;

const sizes = {
  xs: "320px", // Extra Small
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
};

// Media query templates

export const extraSmallScreen = (args: CSSProp) => css`
  @media (min-width: ${sizes.xs}) {
    ${args}
  }
`;

export const mobileScreen = (args: CSSProp) => css`
  @media (min-width: ${sizes.mobile}) {
    ${args}
  }
`;

export const tabletScreen = (args: CSSProp) => css`
  @media (min-width: ${sizes.tablet}) {
    ${args}
  }
`;

export const laptopScreen = (args: CSSProp) => css`
  @media (min-width: ${sizes.laptop}) {
    ${args}
  }
`;

export const desktopScreen = (args: CSSProp) => css`
  @media (min-width: ${sizes.desktop}) {
    ${args}
  }
`;
