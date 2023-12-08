import React from "react";
import { SignupFormStyled } from "./SignupForm.styled";
import Link from "next/link";

export default function SignupForm() {
  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  // };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="font-extrabold text-3xl text-center">Sign Up</h1>
      <SignupFormStyled onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-4 justify-between">
          <div className="sm:w-full md:w-[50%]">
            <label htmlFor="first_name">First name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              placeholder="Enter first name"
              type="text"
            />
          </div>
          <div className="sm:w-full md:w-[50%]">
            <label htmlFor="last_name">Last name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              placeholder="Enter last name"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Enter Email"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            placeholder="Enter password"
            type="password"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="c_password">Confirm password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="c_password"
            placeholder="Enter confirm password"
            type="password"
          />
        </div>
        <button type="submit" className="bg-orange-200 rounded-lg py-2 px-2">
          Sign up
        </button>
      </SignupFormStyled>
      <p className="flex gap-2">
        Already have an account?
        <Link className="text-orange-200" href="/users/login">
          Login
        </Link>
      </p>
    </div>
  );
}
