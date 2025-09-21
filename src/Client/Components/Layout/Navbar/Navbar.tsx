import { getAppName } from "@/Utils/Constants";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { Logo, NavbarContainer, NavLinks } from "./Navbar.styled";

type NavbarPropsType = {};

function Navbar({ children }: PropsWithChildren<NavbarPropsType>) {
  const router = useRouter();

  return (
    <NavbarContainer>
      <Logo onClick={() => router.push("/")}>{getAppName()}</Logo>
      <NavLinks>
        <li onClick={() => router.push("/todos")}>Todos</li>
        <li onClick={() => router.push("/users/all")}>Users</li>
        <li>
          <button onClick={() => router.push("/users/login")}>
            Log In / Sign Up
          </button>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
