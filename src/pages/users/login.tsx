import LoginForm from "@/Client/Components/LoginForm/LoginForm";
import Head from "next/head";
import React from "react";
import { getAppName } from "@/Utils/Constants";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>{`${getAppName()} | Log In`}</title>
      </Head>
      <LoginForm />
    </>
  );
}
