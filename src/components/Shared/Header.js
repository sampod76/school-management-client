import React from "react";
import styles from "@/styles/Header.module.css";
import { Breadcrumb } from "antd";

const customStyle = {
  color: "#fff",
};

const menuItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];

const Header = () => {
  return (
    <header className="h-80  py-4 hidden md:block">
      <div className={styles.firstDiv}>
        <div className="flex py-2 justify-around items-center ">
          <p className="text-white font-bold">
            "শিক্ষা নিয়ে গড়ব দেশ শেখ হাসিনার বাংলাদেশ"
          </p>
          <p className="text-white font-bold">
            Call Us At: 0241081531,01754412344
          </p>
          <p className="text-white font-bold">spsc2002@gmail.com</p>
          <div>
            <button className="w-60 p-2 font-bold mb-2   text-white bg-red-600">
              Apps Download
            </button>
          </div>
        </div>
      </div>

      <div className={styles.secondDiv}>
        <div className="flex py-8 mb-15 justify-center text-white">
          <div className="h-20 w-20 border ">
            <img
              src="https://i.pinimg.com/originals/f3/ee/ca/f3eecab89ed37a8afd2f4beb1b6779cb.png"
              alt=""
            />
          </div>

          <div className="text-center mx-2">
            <p className="text-5xl font-bold">South Point School and College</p>
            <p className="text-2xl">Baridhara Campus</p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <Breadcrumb
            style={customStyle}
            items={[
              {
                title: (
                  <a style={customStyle} href="">
                    Home
                  </a>
                ),
              },
              {
                title: (
                  <a style={customStyle} href="">
                    About us
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Academic
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Admission
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Result
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Facilities
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Branch
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Student Dashboard
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    সুবর্ণজয়ন্তী কর্ণার
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Teachers
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
              {
                title: (
                  <a style={customStyle} href="">
                    Gallery
                  </a>
                ),
                menu: {
                  items: menuItems,
                },
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
