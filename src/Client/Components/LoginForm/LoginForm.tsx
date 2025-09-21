import React from "react";
import {
  LoginFormStyled,
  LoginContainer,
  LoginButton,
  SignupLink,
} from "./LoginForm.styled";
import Link from "next/link";

export default function LoginForm() {
  return (
    <LoginContainer>
      <h1 className="text-center font-extrabold text-3xl mb-4">Welcome</h1>

      <LoginFormStyled onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Enter email" type="email" required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Enter password"
            type="password"
            required
          />
        </div>

        <LoginButton type="submit">Login</LoginButton>
      </LoginFormStyled>

      <p className="mt-2 text-sm">
        Don&apos;t have an account?{" "}
        <SignupLink href="/users/signup">Sign up</SignupLink>
      </p>
    </LoginContainer>
  );
}
