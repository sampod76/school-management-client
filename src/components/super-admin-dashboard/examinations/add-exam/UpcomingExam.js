import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
  TimePicker,
} from "antd";
import { useState } from "react";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv, BsPlusSquareFill } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiColumns, FiPrinter } from "react-icons/fi";
import { ImCopy } from "react-icons/im";

const { Option } = Select;
const { Column } = Table;

const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
    sorter: (a, b) => a.subject - b.subject,
  },
  {
    title: "Date From",
    dataIndex: "dateFrom",
    sorter: (a, b) => a.dateFrom - b.dateFrom,
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    sorter: (a, b) => a.startTime - b.startTime,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    sorter: (a, b) => a.duration - b.duration,
  },
  {
    title: "Room No",
    dataIndex: "roomNo",
    sorter: (a, b) => a.roomNo - b.roomNo,
  },
  {
    title: "Mark Min",
    dataIndex: "markMin",
    sorter: (a, b) => a.markMin - b.markMin,
  },
  {
    title: "Mark Max",
    dataIndex: "markMax",
    sorter: (a, b) => a.markMax - b.markMax,
  },
];

const data = [];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const onFinish = (values) => {
  console.log(values, "test");
};

const UpcomingAssignment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        width={1000}
        title="Add Exam"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen">
            hello
          </div>
        </Form>
      </Modal>

      <div className="flex mx-2 my-2 justify-between ">
        <div>
          <h2 className="text-2xl"> Add Exam</h2>
        </div>
        <div
          onClick={showModal}
          className="flex items-center p-6 cursor-pointer justify-between"
        >
          <div className="border rounded p-1 bg-gray-600 flex justify-center items-center">
            {" "}
            {/* <BsPlusSquareFill className=" text-xl text-gray-600 bg-white"></BsPlusSquareFill> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <span className="text-lg text-white">Add Exam</span>
          </div>
        </div>
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
          <span>100</span>
          <span className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <ImCopy data-te-toggle="tooltip" title="Copy" />
          <AiOutlineFileExcel data-te-toggle="tooltip" title="Excel" />
          <BsFiletypeCsv data-te-toggle="tooltip" title="CSV" />
          <FaRegFilePdf data-te-toggle="Pdf" title="Copy" />
          <FiPrinter data-te-toggle="tooltip" title="Printer" />
        </div>
      </div>

      {/* Start Table */}
      <div>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>

      <div className="flex justify-center items-center text-xl text-green-800 font-bold">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <p> Add new record or search with different criteria.</p>
      </div>
    </div>
  );
};

export default UpcomingAssignment;
