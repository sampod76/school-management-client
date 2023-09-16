import React, { useState } from "react";
import { Checkbox, Form, Modal, Space, Table } from "antd";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BsFiletypeCsv, BsPlusSquareFill } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import { AiOutlineFileExcel } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa";
import { FiColumns, FiPrinter } from "react-icons/fi";
const columns = [
  {
    title: "Exam",
    dataIndex: "exam",
    sorter: (a, b) => a.exam - b.exam,
  },
  {
    title: "Quiz",
    dataIndex: "quiz",
    sorter: (a, b) => a.quiz - b.quiz,
  },
  {
    title: "Question",
    dataIndex: "question",
    sorter: (a, b) => a.question - b.question,
  },
  {
    title: "Attempts",
    dataIndex: "attempts",
    sorter: (a, b) => a.attempts - b.attempts,
  },
  {
    title: "Exam From",
    dataIndex: "examFrom",
    sorter: (a, b) => a.examFrom - b.examFrom,
  },
  {
    title: "Exam To",
    dataIndex: "examTo",
    sorter: (a, b) => a.examTo - b.examTo,
  },
  {
    title: "Duration",
    dataIndex: "duration",
    sorter: (a, b) => a.duration - b.duration,
  },
  {
    title: "Exam Published",
    dataIndex: "examPublished",
    sorter: (a, b) => a.examPublished - b.examPublished,
  },
  {
    title: "Result Published",
    dataIndex: "resultPublished",
    sorter: (a, b) => a.resultPublished - b.resultPublished,
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: (a, b) => a.description - b.description,
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
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    exam: `Edward King ${i}`,
    quiz: `${i}`,
    question: `(Descriptive: ${i}). `,
    attempts: `10`,
    examFrom: `	07/01/2023 12:30 pm`,
    examTo: `07/08/2023 04:30 pm`,
    duration: `02:00:00`,
    examPublished: <Checkbox value="A"></Checkbox>,
    resultPublished: <Checkbox value="A"></Checkbox>,
    description: `1.The examination will comprise of Objective type Multiple Choice Questions (MCQs) .

    2.The Subjects or topics covered in the exam will be as per the Syllabus.
    
    3.Every student will take the examination on a Laptop/Desktop/Smart Phone.`,
  });
}
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const onFinish = (values) => {
  console.log(values);
};

const ClosedExam = () => {
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
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
        </Form>
      </Modal>

      <div className="flex mx-2 my-2 justify-between ">
        <div>
          <h2 className="text-2xl"> Add Exam </h2>
        </div>
        <div
          onClick={showModal}
          className="flex items-center p-6 cursor-pointer justify-between"
        >
          {/* <BsPlusSquareFill className="me-2"></BsPlusSquareFill>Add Exam */}
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
          <ImCopy data-te-toggle="tooltip" title="Copy" />
          <AiOutlineFileExcel data-te-toggle="tooltip" title="Excel" />
          <BsFiletypeCsv data-te-toggle="tooltip" title="CSV" />
          <FaRegFilePdf data-te-toggle="Pdf" title="Copy" />
          <FiPrinter data-te-toggle="tooltip" title="Printer" />
          <FiColumns data-te-toggle="tooltip" title="Columns" />
        </div>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default ClosedExam;
