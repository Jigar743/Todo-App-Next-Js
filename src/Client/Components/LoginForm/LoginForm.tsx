import React from "react";
import { LoginFormStyled } from "./LoginForm.styled";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-center font-extrabold text-3xl">Welcome</h1>
      <LoginFormStyled className={`shadow-md`}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="shadow text-gray-700 focus:shadow-outline"
            id="email"
            placeholder="Enter email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="shadow text-gray-700 focus:shadow-outline"
            id="password"
            placeholder="Enter password"
            type="password"
          />
        </div>
        <button type="submit" className="bg-orange-200 rounded-lg py-2 px-2">
          Login
        </button>
      </LoginFormStyled>
      <p className="flex gap-2">
        Dont have an account?
        <Link className="text-orange-200" href="/users/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
}
