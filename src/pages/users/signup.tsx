import SignupForm from "@/Client/Components/SignupForm/SignupForm";
import { getAppName } from "@/lib/Constants";
import Head from "next/head";
import React from "react";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>{`${getAppName()} | Sign Up`}</title>
      </Head>
      <SignupForm />
    </>
  );
}
