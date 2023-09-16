import React from "react";
import { IoMdSearch } from "react-icons/io";
import { ImCopy } from "react-icons/im";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { Table, Space } from "antd";

const columns = [
  {
    title: "Class",
    dataIndex: "category",
    // filters: [
    //   {
    //     text: "General",
    //     value: "General",
    //   },
    //   {
    //     text: "General",
    //     value: "General",
    //   },
    //   {
    //     text: "General",
    //     value: "General",
    //   },
    // ],
    // filterMode: "tree",
    // filterSearch: true,
    // onFilter: (value, record) => record.category.startsWith(value),
    
  },
  {
    title: "Section",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Admission No",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Student Name",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Date of Birth",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Phone",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "একশন",
    key: "action",
    style: { padding: "5px 5px" },
    render: () => (
      <Space size="small">
        <button className="bg-gray-500 text-white font-bold px-2 py-1 rounded-md">Collect Fees</button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    category: "Class 1",
    CategoryId: 1,
  },
  {
    key: "2",
    category: "Class 2",
    CategoryId: 2,
  },
  {
    key: "3",
    category: "Class 3",
    CategoryId: 3,
  },
  {
    key: "4",
    category: "Class 4",
    CategoryId: 4,
  },
];

const CollectFees = () => {
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div className="bg-white m-2">
        <p className="text-xl font-semibold p-4">Select Criteria</p>
        <div className="text-gray-500  w-full">
          <hr />
        </div>

        <div className="lg:flex w-full justify-between items-center">
          <div className="lg:w-[50%] w-full">
            <div className="w-full lg:flex">
              <div className="space-y-2 p-4 lg:w-[50%] w-full">
                <p className="font-semibold text-lg">Class</p>

                <select
                  className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-8"
                  name=""
                  id=""
                >
                  <option value="">Select</option>
                </select>
              </div>
              <div className="space-y-2 p-4 lg:w-[50%] w-full">
                <p className="font-semibold text-lg">section</p>

                <select
                  className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-8"
                  name=""
                  id=""
                >
                  <option value="">Select</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end p-4">
              <button className="flex items-center gap-1 bg-gray-500 px-3 py-2 text-white font-semibold">
                <span className="font-bold text-xl">
                  <IoMdSearch />
                </span>{" "}
                Search
              </button>
            </div>
          </div>

          <div className="p-4 lg:w-[50%] w-full">
            <div className="space-y-2">
              <p className="font-semibold text-lg">Search By Keyword</p>
              <input
                className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-8 px-4"
                type="text"
                placeholder="Search by Student Name,Roll Number,Enroll Number, National Id, Local Id Etc"
              />
            </div>

            <div className="flex justify-end p-4">
              <button className="flex items-center gap-1 bg-gray-500 px-3 py-2 text-white font-semibold">
                <span className="font-bold text-xl">
                  <IoMdSearch />
                </span>{" "}
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="text-gray-500  w-full">
          <hr />
        </div>

        <div className="w-full">
          <div className="bg-white ">
            <p className="text-xl font-semibold p-4">Student List</p>
            <div className="text-gray-500  w-full">
              <hr />
            </div>

            <div className="flex lg:flex-row  flex-col gap-3 lg:gap-0   items-center justify-between px-4 py-4">
              {/* search input field  */}
              <input
                className="border-b border-gray-200 focus:border-blue-400 outline-none  h-8 p-3"
                type="text"
                placeholder="Search..."
              />

              {/* download data  */}
              <div className="border-b border-gray-200 focus:border-blue-400 outline-none flex items-center text-xl gap-2 pb-2 lg:px-2">
                <ImCopy data-te-toggle="tooltip" title="Copy" />
                <AiOutlineFileExcel data-te-toggle="tooltip" title="Excel" />
                <BsFiletypeCsv data-te-toggle="tooltip" title="CSV" />
                <FaRegFilePdf data-te-toggle="Pdf" title="Copy" />
                <FiPrinter data-te-toggle="tooltip" title="Printer" />
                <FiColumns data-te-toggle="tooltip" title="Columns" />
              </div>
            </div>

            {/* table  */}
            <div className=" col-span-2 ms-0 md:ms-4 overflow-x-auto">
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectFees;
