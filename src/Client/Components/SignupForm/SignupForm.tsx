import React from "react";
import { SignupFormStyled, SignupContainer, SignupButton, LoginLink } from "./SignupForm.styled";
import Link from "next/link";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/Client/Mutation/User.mutation";

type InitialValueType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const [createUser] = useMutation(REGISTER_USER);

  const { handleSubmit, values, handleChange, resetForm } = useFormik<InitialValueType>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      createUser({
        variables: {
          input: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.confirmPassword,
          },
        },
        onCompleted: (data) => {
          console.log({ data });
          resetForm();
        },
      });
    },
  });

  return (
    <SignupContainer>
      <h1 className="text-center font-extrabold text-3xl mb-4">Sign Up</h1>

      <SignupFormStyled onSubmit={handleSubmit}>
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-1 flex flex-col">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              name="firstName"
              placeholder="Enter first name"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              name="lastName"
              placeholder="Enter last name"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Enter email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Enter password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <SignupButton type="submit">Sign Up</SignupButton>
      </SignupFormStyled>

      <p className="mt-2 text-sm">
        Already have an account? <LoginLink href="/users/login">Login</LoginLink>
      </p>
    </SignupContainer>
  );
}
