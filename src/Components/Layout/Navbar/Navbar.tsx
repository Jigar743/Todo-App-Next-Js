import { getAppName } from "@/lib/Constants";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type NavbarPropsType = {};

function Navbar({ children }: PropsWithChildren<NavbarPropsType>) {
  const router = useRouter();

  return (
    <>
      <div>
        <h1 className="cursor-pointer tracking-widest text-3xl italic font-bold text-orange-200">
          {getAppName()}
        </h1>
      </div>
      <div>
        <ul className="flex gap-6 cursor-pointer text-lg items-center">
          <li onClick={() => router.push("/todos")} className="hover:underline">
            Todos
          </li>
          <li>
            <button
              onClick={() => router.push("/users/login")}
              className="bg-orange-200 px-6 py-2 rounded-lg text-black"
            >
              Log In / Sign Up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
