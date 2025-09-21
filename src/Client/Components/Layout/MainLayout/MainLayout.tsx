import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CustomHead from "../../CusomHead/CustomHead";
type MainLayoutPropsType = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutPropsType) {
  return (
    <>
      <CustomHead />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 w-full px-4 md:px-8 py-6 bg-gray-50 overflow-auto">
          {children}
        </main>

        {/* <footer className="mt-auto bg-gray-800 text-white py-4 px-8">
          <Footer />
        </footer> */}
      </div>
    </>
  );
}
