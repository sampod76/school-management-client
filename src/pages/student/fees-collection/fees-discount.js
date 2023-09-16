import React from "react";
import { ImCopy } from "react-icons/im";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { BsCloudUploadFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Table, Space, Radio } from "antd";

const columns = [
  {
    title: "Name",
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
    // width: "30%",
  },
  {
    title: "Discount Code",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Percentage(%)",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Amount($)",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },

  {
    title: "একশন",
    key: "action",
    style: { padding: "5px 5px" },
    render: () => (
      <Space size="small">
        <RxHamburgerMenu data-te-toggle="tooltip" title="Columns" />
        <MdModeEdit data-te-toggle="tooltip" title="Columns" />
        <RxCross2 data-te-toggle="tooltip" title="Columns" />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    category: "General",
    CategoryId: 1,
  },
  {
    key: "2",
    category: "Physically Challenged",
    CategoryId: 2,
  },
  {
    key: "3",
    category: "Special",
    CategoryId: 3,
  },
  {
    key: "4",
    category: "OBC",
    CategoryId: 4,
  },
];

const FeesDiscount = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-[35%] w-full py-3 mx-2">
          <form className="bg-white space-y-2">
            <p className="text-xl font-semibold p-4">Add Fees Discount</p>
            <div className="text-gray-500  w-full">
              <hr />
            </div>
            <div className="space-y-2 p-4">
              <p className="font-semibold text-lg">Name</p>
              <input
                className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-8"
                type="text"
              />
            </div>
            <div className="space-y-2 px-4">
              <p className="font-semibold text-lg">Discount Code</p>
              <input
                className="border  border-gray-200  focus:border-blue-400 outline-none w-full h-8"
                type="number"
              />
            </div>

            <div className="space-y-2 px-4 ">
              <p className="font-semibold text-lg">Discount Type</p>
              <from className="flex items-center">
                 {" "}
                <div className="w-[50%]">
                <input
                  type="radio"
                  id="Fix_Amount"
                  name="fav_language"
                  value="Fix Amount"
                />
                  <label for="Percentage">Fix Amount</label>
                </div>
                
               <div className="w-[50%]"> 
                <input
                  type="radio"
                  id="Percentage"
                  name="fav_language"
                  value="Percentage"
                />
                  <label for="Percentage">Percentage</label>
                </div>
                 {" "}
              </from>
            </div>

            <div className="space-y-2 px-4">
              <p className="font-semibold text-lg">Description</p>
              <input
                className="border  border-gray-200  focus:border-blue-400 outline-none w-full h-20"
                type="text"
              />
            </div>
            <div className="text-gray-500 py-2 ">
              <hr />
            </div>
            <div className="flex justify-end items-center mr-4 pb-4">
              <button className="px-4 text-xl py-1 text-white rounded-md bg-gray-500">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* existing postal dispatch  */}
        <div className="lg:w-[65%] w-full py-3 mx-2">
          <div className="bg-white ">
            <h1 className="text-xl font-semibold p-4">Postal Dispatch List</h1>
            <div className="text-gray-500  w-full mt-2">
              <hr />
            </div>

            <div className="flex lg:flex-row  flex-col-reverse   items-center justify-between px-4 py-4">
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

export default FeesDiscount;
