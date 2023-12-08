import LoginForm from "@/Components/LoginForm/LoginForm";
import Head from "next/head";
import React from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { GET_MESSAGE } from "@/Config/querries";
import { ADD_MESSAGE } from "@/Config/mutations";
import { getAppName } from "@/lib/Constants";

export default function LoginPage() {
  const { data, loading, error } = useQuery(GET_MESSAGE);
  const [addMessage] = useMutation(ADD_MESSAGE);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h5>{error.message}</h5>;

  return (
    <>
      <Head>
        <title>{`${getAppName()} | Log In`}</title>
      </Head>
      <LoginForm />
      {/* <h4>{data.getMessage}</h4>
      <button
        onClick={async () => {
          const { data } = await addMessage({
            variables: { message: "Jigar" },
            refetchQueries: [{ query: GET_MESSAGE }],
          });
          console.log({ message: data.addMessage });
        }}
      >
        click
      </button> */}
    </>
  );
}
