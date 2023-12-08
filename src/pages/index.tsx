import { RootState } from "@/Store/store";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setIsAuthenticated } from "@/Store/AuthSlice";

export default function HomePage() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authReducer.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsAuthenticated(true));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div>
      {isAuthenticated ? <button>logout</button> : <button>login</button>}
    </div>
  );
}
