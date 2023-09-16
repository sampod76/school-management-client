import React from "react";
import { ImCopy } from "react-icons/im";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { Table, Space, Dropdown, Menu } from "antd";
import { confirm_modal } from "@/utils/modalHook";
import Link from "next/link";

const data = [
  {
    key: "0",
    category: "A",
    CategoryId: 1,
  },
  {
    key: "1",
    category: "a",
    CategoryId: 4,
  },
  {
    key: "2",
    category: "B",
    CategoryId: 2,
  },
  {
    key: "3",
    category: "C",
    CategoryId: 3,
  },
  {
    key: "4",
    category: "D",
    CategoryId: 4,
  },
  {
    key: "5",
    category: "পাইথন কোডিং",
    CategoryId: 4,
  },
  {
    key: "6",
    category: "স্ক্র্যাচ কোডিং",
    CategoryId: 4,
  },
];

const Section = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleDelete = () => {
   confirm_modal("You want to delete Category!") 
  };

  const columns = [
    {
      title: (
        <span
          style={{ marginRight: "45rem", fontWeight: "bold", fontSize: "15px" }}
        >
          শাখা
        </span>
      ),
  
      dataIndex: "category",
    },
  
    {
      title: (
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>ক্রিয়া</span>
      ),
      key: "key",
      fixed: "right",
    
      width: 100,
      render: (record) => (
        <Space  size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="view"
                  onClick={() => {
                    
                  }}
                >
             <Link href={`section/edit/1`}>Edit</Link>
                </Menu.Item>
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                   Delete
                </Menu.Item>
              </Menu>
            }
          >
            <a>একশন</a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-[35%] w-full py-3 mx-2">
          <form className="bg-white space-y-2">
            <p className="text-xl font-semibold p-4">শাখা যুক্ত করুন</p>
            <div className="text-gray-500  w-full">
              <hr />
            </div>

            <div className="space-y-2  px-4 pt-2">
              <p className="mb-10 text-lg">
                শাখা নাম <span className="text-red-600">*</span>
              </p>
            </div>
            <div className="text-gray-500 h-8  w-full">
              <hr />
            </div>

            <div className="text-gray-500  w-full">
              <hr />
            </div>

            <div className="flex justify-end items-center mr-4 pb-4">
              <button className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl">
                সংরক্ষণ করুন
              </button>
            </div>
          </form>
        </div>

        <div className="lg:w-[65%] w-full py-3 mx-2">
          <div className="bg-white ">
            <h1 className="text-xl font-semibold p-4">শাখা তালিকা</h1>
            <div className="text-gray-500  w-full mt-2">
              <hr />
            </div>

            <div className="flex lg:flex-row  flex-col-reverse   items-center justify-between px-4 py-4">
              <input
                className="border-b border-gray-200 focus:border-blue-400 outline-none  h-8 p-3"
                type="text"
                placeholder="অনুসন্ধান করুন..."
              />

              <div className="border-b border-gray-200 focus:border-blue-400 outline-none flex items-center text-xl gap-2 pb-2 lg:px-2">
                <ImCopy data-te-toggle="tooltip" title="অনুলিপি" />
                <AiOutlineFileExcel data-te-toggle="tooltip" title="এক্সেল" />
                <BsFiletypeCsv data-te-toggle="tooltip" title="সিএসভি" />
                <FaRegFilePdf data-te-toggle="Pdf" title="পিডিএফ" />
                <FiPrinter data-te-toggle="tooltip" title="প্রিন্টার" />
                <FiColumns data-te-toggle="tooltip" title="কলাম" />
              </div>
            </div>

            <div
              className="col-span-2 ms-0 md:ms-4"
              style={{ overflowY: "auto" }}
            >
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
