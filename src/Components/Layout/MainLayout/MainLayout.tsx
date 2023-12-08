import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getAppName } from "@/lib/Constants";
type MainLayoutPropsType = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutPropsType) {
  return (
    <>
      <Head>
        <title>{`${getAppName()}`}</title>
      </Head>
      <div className="flex flex-col gap-2 h-[100vh]">
        <header className="flex justify-between h-[10%] bg-slate-700 items-center px-8 text-white">
          <Navbar />
        </header>
        <main className="h-auto">{children}</main>
        <footer className="mt-auto h-[10%]">
          <Footer />
        </footer>
      </div>
    </>
  );
}
