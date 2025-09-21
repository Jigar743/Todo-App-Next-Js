import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #ffecb3, #ffd54f);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  color: #ff9800;
  letter-spacing: 2px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 2px 8px rgba(255, 152, 0, 0.5);
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 25px;
  align-items: center;

  li {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
      color: #fb8c00;
    }
  }

  button {
    background: #ff9800;
    color: #fff;
    padding: 8px 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;

    &:hover {
      transform: scale(1.05);
      background: #fb8c00;
      box-shadow: 0 3px 10px rgba(255, 152, 0, 0.4);
    }
  }
`;
