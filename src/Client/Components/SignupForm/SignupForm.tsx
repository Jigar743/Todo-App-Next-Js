import React from "react";
import { SignupFormStyled } from "./SignupForm.styled";
import Link from "next/link";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/Client/Mutation/User.mutation";

type initialValueType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const [createUser] = useMutation(REGISTER_USER);

  const { handleSubmit, values, errors, handleChange, resetForm } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: formSubmit,
  });

  function formSubmit(values: initialValueType) {
    console.log({ values });
    createUser({
      variables: {
        input: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.confirmPassword,
        },
      },
      onCompleted(data, clientOptions) {
        console.log({ data });
        resetForm();
      },
    });
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="font-extrabold text-3xl text-center">Sign Up</h1>
      <SignupFormStyled onSubmit={handleSubmit}>
        <div className="flex gap-4 justify-between">
          <div className="sm:w-full md:w-[50%]">
            <label htmlFor="first_name">First name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              placeholder="Enter first name"
              type="text"
              value={values.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="sm:w-full md:w-[50%]">
            <label htmlFor="last_name">Last name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              placeholder="Enter last name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
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
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="passw">Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="passw"
            placeholder="Enter password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="c_password">Confirm password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="c_password"
            placeholder="Enter confirm password"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
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
