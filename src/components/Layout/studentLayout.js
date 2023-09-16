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
import { studentItem,studentNavbarItem } from "@/components/dashboardItems";

import FooterBefore from "../Shared/FooterBefore";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

import { AuthContext } from "../Auth/AuthProvider";
import ImageTag from "../Tag/ImageTag";

function StudentLayout({ children }) {
  // const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);
  const { user, setUser, logOut, errorHook } = useContext(AuthContext);
  // console.log(user)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {};

  const allItems = studentItem.map((item,i) => (
    <li key={i}>
      {!item.children ? (
        <Link
          href={item.href}
          className={classNames(
            router.pathname == item.href
              ? "bg-indigo-500 text-white"
              : "hover:text-white hover:bg-indigo-500 drop-shadow-lg",
            "group flex gap-x-3 rounded-md p-2 text-md leading-6 font-semibold"
          )}
        >
          <item.icon
            className={classNames(
              router.pathname == item.href
                ? "text-white"
                : "text-gray-500 group-hover:text-white",
              "h-6 w-6 shrink-0"
            )}
            aria-hidden="true"
          />

          {item.name}
        </Link>
      ) : (
        <Disclosure as="div">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={
                  "hover:text-white hover:bg-indigo-500 drop-shadow-lg group flex items-center justify-between w-full text-left rounded-md p-2 gap-x-3 leading-6 font-semibold text-gray-600"
                }
              >
                <div className="flex justify-start gap-3">
                  <item.icon
                    className={
                      "text-gray-500 group-hover:text-white h-6 w-6 shrink-0"
                    }
                    aria-hidden="true"
                  />
                  <span className="">{item.name}</span>
                </div>
                <ChevronRightIcon
                  className={classNames(
                    open ? "rotate-90 text-gray-400" : "text-gray-400",
                    "h-5 w-5 shrink-0 text-sm"
                  )}
                  aria-hidden="true"
                />
              </Disclosure.Button>
              <Disclosure.Panel as="ul" className="pr-2 pl-8 mt-0.5">
                {item.children.map((subItem,i) => (
                  <li key={i}>
                    <Link
                      href={subItem.href}
                      className={classNames(
                        router.pathname == subItem.href
                          ? "bg-indigo-500 text-white"
                          : "hover:text-white hover:bg-indigo-500 ",
                        "flex items-center w-full text-left rounded-md mt-0.5 px-2 py-1.5  text-md font-semibold text-gray-700 group"
                      )}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </li>
  ));
  if (!user?._id) {
    return children;
  }
  return (
    <section className="max-w-[2500px] mx-auto">
      <div className="bg-gray-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* static sidebar  for phone device */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto scrollbar-none bg-gray-50 px-6 pt-2 pb-4">
                    <div className="flex h-16 mt-4 shrink-0 items-center">
                      <Image
                        // className="h-8 w-auto"
                        height={100}
                        width={150}
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {allItems}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col shadow-lg">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-gray-50 px-6 py-4">
            <div className="flex h-16 shrink-0 items-center mt-4">
              <Image
                // className="h-8 w-auto"
                height={100}
                width={150}
                src={logo}
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {allItems}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* below code for the search bar */}
        <div className="lg:pl-72">
          <div className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-gray-50 px-4 shadow-sm">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>



            {/* navbar item or header item start*/}
            <div className="flex justify-between flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <nav
                className="hidden lg:flex lg:space-x-4 lg:py-2"
                aria-label="Global"
              >
                {studentNavbarItem.map((item,i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-gray-900"
                        : "text-gray-900 hover:text-gray-900",
                      "inline-flex items-center py-2 px-3 font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <Menu as="div" className="relative">
                  {!user?._id ? (
                    <Link href={`/authentication/login`}>
                      <button className="text-md text-green-500 hover:text-white border border-green-400 hover:border-white hover:bg-green-400 px-2 py-[2px] rounded-md duration-75">
                        login
                      </button>
                    </Link>
                  ) : (
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>

                      <ImageTag
                        data={{
                          class:
                            "h-11 w-11 rounded-full bg-gray-50 border border-blue-300",
                          // src: user?.profileImage?.filename,
                          url: "https://img.freepik.com/free-photo/female-football-player-kicking-ball_23-2148850746.jpg?w=1380&t=st=1690886959~exp=1690887559~hmac=1b6c0a21a3b65117c736a706af54b982dfcd9bb3455814291789a1e2a9c413fc",
                          alt: "proe",
                        }}
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-4 text-sm font-semibold capitalize leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          {user.name}
                        </span>
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Menu.Button>
                  )}

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        <Link
                          href={`/authentication/view-profile/${user._id}?role=${user?.role}`}
                        >
                          <button
                            className={`w-full px-3 py-1 text-md leading-6 text-gray-700 hover:bg-gray-200 font-medium`}
                          >
                            Profile
                          </button>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          onClick={handleLogout}
                          className={`w-full px-3 py-1 text-md leading-6 text-gray-700 hover:bg-gray-200 font-medium`}
                        >
                          Sign out
                        </button>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            {/* navbar item or header item end */}
          </div>

          {/* main section children start*/}
          <main className="bg-gray-100">
            <section className="min-h-screen">{children}</section>

            {/* <Header></Header> */}
            <Footer></Footer>
            {/* <FooterBefore></FooterBefore> */}
          </main>
          {/* main section children end*/}
        </div>
      </div>
    </section>
  );
}
export default StudentLayout;
