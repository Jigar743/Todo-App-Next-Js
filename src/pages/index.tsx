import { RootState } from "@/Client/Store";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setIsAuthenticated } from "@/Client/Store/AuthSlice";
import Head from "next/head";
import { getAppName } from "@/Utils/Constants";

export default function HomePage() {
  const { isAuthenticated, currentUser, token } = useSelector(
    (state: RootState) => state.authReducer
  );

  const { todos } = useSelector((state: RootState) => state.todoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsAuthenticated(true));
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{`${getAppName()} | Home`}</title>
      </Head>
      <div>
        {isAuthenticated ? <button>logout</button> : <button>login</button>}
      </div>
    </>
  );
}
