import LoadingCmp from "@/Client/Components/LoadingScreen/LoadingCmp";
import UsersList from "@/Client/Components/UsersList/UsersList";
import { GET_ALL_USERS } from "@/Client/Queries/User.query";
import { getAppName } from "@/Utils/Constants";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";

export default function AllUsersPage() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (loading) return <LoadingCmp />;

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>{`${getAppName()} | All Users`}</title>
      </Head>
      <>
        <UsersList Users={data.users} />
      </>
    </>
  );
}
