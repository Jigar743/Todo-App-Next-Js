import { getAppName } from "@/lib/Constants";
import Head from "next/head";
import React from "react";

export default function TodosPage() {
  return (
    <>
      <Head>
        <title>{`${getAppName()} | Todos`}</title>
      </Head>

      <div>
        <p>search and add todos</p>
        <p>Listing of all todos</p>
      </div>
    </>
  );
}
