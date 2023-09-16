import React from "react";
import { Table, Space, Button, Form, Input, Select, Upload } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { ImCopy } from "react-icons/im";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiColumns, FiPrinter } from "react-icons/fi";

const { Option } = Select;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Income Head",
    dataIndex: "incomeHead",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },

  {
    title: "একশন",
    key: "action",
    render: () => (
      <Space size="middle">
        <div className="border-b border-gray-200 focus:border-blue-400 outline-none flex items-center text-xl gap-2 pb-2 lg:px-2">
          <MdModeEdit data-te-toggle="tooltip" title="Columns" />
          <RxCross2 data-te-toggle="tooltip" title="Columns" />
        </div>
      </Space>
    ),
  },
];
const data = [
  {
    // key: "1",
    name: "Staff Office",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Stationery Purchase",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Staff Training",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Donation",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Stock Flower",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Telephone Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
  {
    // key: "1",
    name: "Online Classes",
    description:
      "	These donations are usually gifts that individualsioto educate a student.",
    incomeHead: "Electricity Bill",
    invoiceNumber: "7744474",
    date: "03/05/2022",
    amount: "1000",
  },
].map((data,i)=>({...data,key:i}))
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log(values);
};

const AddExpense = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 md:w-[100%] w-full mt-4">
    <div className="lg:w-[100%] w-full py-3 mx-2">
      <form className="bg-white space-y-2">
        <p className="text-xl font-semibold p-4">Add Expense</p>
        <div className="text-gray-500  w-full">
          <hr />
        </div>

        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">
            Expense Head <span className="text-red-600">*</span>{" "}
          </p>
          <Form.Item
            name="expenseHead"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="expenseHead" allowClear>
              <Option value="one">Electricity Bill</Option>
              <Option value="two">Telephone Bill </Option>
              <Option value="three">Miscellaneous </Option>
              <Option value="four"> Stationery Purchase</Option>
              <Option value="five">Electricity Bill</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">
            Name <span className="text-red-600">*</span>
          </p>
          <input
            className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-10"
            type="text"
          />
        </div>

        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">Invoice Number</p>
          <input
            className="border  border-gray-200  focus:border-blue-400 outline-none w-full h-10"
            type="number"
          />
        </div>

        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">
            Date <span className="text-red-600">*</span>
          </p>
          <input
            className="border  border-gray-200  focus:border-blue-400 outline-none w-full h-10 px-2"
            type="date"
          />
        </div>

        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">
            Amount($) <span className="text-red-600">*</span>
          </p>
          <input
            className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-10"
            type="text"
          />
        </div>
        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">Attach Document</p>
          <input
            className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-10"
            type="file"
          />
        </div>

        <div className="space-y-2 px-4 pt-2">
          <p className="font-semibold text-lg">Description</p>
          <textarea
            className="border  border-gray-200  focus:border-blue-400 outline-none w-full h-20 resize-none"
            type="number"
          />
        </div>

        <div className="text-gray-500 py-2 ">
          <hr />
        </div>
        <div className="flex justify-end items-center mr-4 pb-4">
          <button className="px-4 text-xl py-2 text-white rounded bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </div>

    <div className="mt-3 col-span-2 ms-0 md:ms-4 bg-white">
      <p className="text-xl font-semibold p-4">Add Expense</p>
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

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  </div>
);
export default AddExpense;
