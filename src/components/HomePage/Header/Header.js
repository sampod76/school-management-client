import { AuthContext } from "@/components/Auth/AuthProvider";
import { Button } from "antd";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoVimeo,
  BiLogoYoutube,
} from "react-icons/bi";
import { SlSocialVkontakte } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user, setUser, logOut, errorHook } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 1, name: "হোম", link: "/" },
    { id: 2, name: "আমাদের সম্পর্কে", link: "/root/about-us" },
    { id: 3, name: "প্রসাশন", link: "/root/administration" },
    { id: 4, name: "শিক্ষার্থীদের তথ্য", link: "/contact" },
    { id: 4, name: "রুটিন", link: "/contact" },
    { id: 4, name: "নোটিশ", link: "/contact" },
    { id: 4, name: "ভর্তি ফরম", link: "/contact" },
    { id: 4, name: "রেজাল্ট", link: "/contact" },
    { id: 4, name: "মিডিয়া", link: "/contact" },
    { id: 4, name: "অন্যান্য তথ্য", link: "/contact" },
    { id: 4, name: "যোগাযোগ", link: "/contact" },
    { id: 5, name: "লগ ইন", link: "/login" },
  ];

  return (
    <nav className=" bg-white sticky top-0 z-10 mt-2  pt-2">
      <div className="bg-[#FFFFFF]">  
        <div>
          {" "}
          <div className="bg-[#EFEFEF] hidden md:block py-1 ">
            <div>
              <div className="flex items-center justify-evenly w-full h-16 bg-[#004EA2] text-white ">
                <ul className="flex items-center justify-center lg:gap-8 md:gap-2 lg:text-xl md:text-sm">
                  <Link href="/home">
                    <li>হোম</li>
                  </Link>

                  <Link href="/root/administration">
                    <li>প্রসাশন</li>
                  </Link>
                  <Link href="/root/student-information">
                    <li>শিক্ষার্থীদের তথ্য</li>
                  </Link>
                  <Link href="/root/routine">
                    <li>রুটিন</li>
                  </Link>
                  <Link href="/root/notice">
                    <li>নোটিশ</li>
                  </Link>
                </ul>
                <Image
                  className="md:w-[50px] lg:w-[100px] md:h-[50px] lg:h-[100px] bg-white p-1 rounded-full"
                  src="https://i.ibb.co/KmC2mxT/65bde6cd-d34d-443a-be7f-c287915e9dbe-1-removebg-preview.png"
                  width={100}
                  height={100}
                  alt="Logo"
                ></Image>
                <ul className="flex items-center justify-center lg:gap-8 md:gap-2 lg:text-xl md:text-sm">
                  <Link href="/root/home-add-admission">
                    <li>ভর্তি ফরম</li>
                  </Link>
                  <Link href="/root/result">
                    <li>রেজাল্ট</li>
                  </Link>

                  <Link href="/root/media">
                    <li>মিডিয়া</li>
                  </Link>
                
                  <Link href="/root/communication">
                    <li>যোগাযোগ</li>
                  </Link>

                  <Link href="/login">
                    {" "}
                    <li>লগ ইন</li>
                  </Link>
                </ul>
              </div>

              <div className="flex items-center lg:justify-evenly md:justify-between w-full h-10  text-black ">
                <ul className="flex items-center justify-center lg:gap-8 md:gap-2 text-xl">
                  <li>সুবর্ণজয়ন্তী কর্ণার</li>
                  <li>বঙ্গবন্ধু কর্ণার</li>
                </ul>

                <ul className="flex items-center lg:justify-evenly md:justify-between lg:gap-8 md:gap-2 text-xl">
                  <li>ফটো গ্যালারি</li>
                  <li>ফটো গ্যালারি</li>
                  {/* <li>
                    {" "}
                    <Button
                      onClick={() => {
                        localStorage.setItem(
                          "role",
                          JSON.stringify("supper-admin")
                        );
                        setUser((c) => ({ ...c, role: "supper-admin" }));
                        router.push("/supper-admin/dashboard");
                      }}
                    >
                      Switch to admin
                    </Button>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* nav */}
          <nav className=" text-white md:bg-[#1A6FA8] relative md:hidden">
            {!isMobileMenuOpen && (
              <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between bg-[#F2F2F2]">
                <div className="flex justify-between items-center w-full">
                  <Image
                    className=""
                    src="https:i.ibb.co/CtzpZrC/1625544079-gshs.png"
                    width={50}
                    height={50}
                    alt="Logo"
                  ></Image>
                  <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>

                <div className="hidden  items-center ">
                  <div className="ml-8 space-x-6 text-xl">
                    {navItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.link}
                        className="hover:border-b-4 border-red-500 py-2"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {isMobileMenuOpen && (
              <div className="bg-gray-800">
                <div className="md:hidden py-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-red-500 h-10 w-full flex items-center justify-center"
                >
                  <RxCross1 className="text-white  text-3xl font-bold " />
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
