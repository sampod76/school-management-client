import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Fragment, useContext, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { studentItem, studentNavbarItem } from "@/components/dashboardItems";
import Header from "@/components/HomePage/Header/Header";
import FooterBefore from "../Shared/FooterBefore";
import Footer from "../Shared/Footer";
import { usePathname } from 'next/navigation'
import { AuthContext } from "../Auth/AuthProvider";
import ImageTag from "../Tag/ImageTag";

function RootLayout({ children }) {
  // const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
  const { user, setUser, logOut, errorHook } = useContext(AuthContext);
  // console.log(user)

  const pathname = usePathname()

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {};

  if (!user?._id) {
    return children;
  }
  return (
    <section className="max-w-[2500px] mx-auto">
      <div className="bg-gray-100">
        {/* <div className="flex justify-center items-center gap-5 text-3xl bg-slate-300 shadow-2xl ">
          <>
            <Link className="text-white" href="/">
              <button>Home</button>
            </Link>
          </>
          <>
            <Link className="text-white" href= "/root/dashboard">
              <button>Blogs</button>
            </Link>
          </>
          <>
            <Link className="text-white" href="/student/dashboard">
              <button>student</button>
            </Link>
          </>
          <>
            <Link className="text-white" href="/supper-admin/dashboard">
              <button>supper-admin</button>
            </Link>
          </>
        </div> */}
        {/* main section children start*/}
        <main className="bg-gray-100">
          {/* {pathname !=='/login' && <Header />} */}
           <Header />
          <section className="min-h-screen">{children}</section>
          {/* <Footer></Footer> */}
          <Footer></Footer>
          {/* <FooterBefore></FooterBefore> */}
        </main>
        {/* main section children end*/}
      </div>
    </section>
  );
}
export default RootLayout;
