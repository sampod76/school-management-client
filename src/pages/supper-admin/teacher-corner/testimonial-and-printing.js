import React, { useState } from "react";
import { Button, Col, Form, Input, Modal, Row, Table } from "antd";

import { ImCopy } from "react-icons/im";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FiColumns, FiPrinter } from "react-icons/fi";
import { GrDownload } from "react-icons/gr";
import NoticePDF from "@/components/GeneratePDf/NoticePDF";
const { Search } = Input;

const data = [
  {
    key: "1",
    name: "মোঃ আমিনুল",
    designation: "প্রধান শিক্ষক",
    organization: "স্কুল নেম",
    date: "01/08/2023",
  },
  {
    key: "2",
    name: "ফাহিম আহমেদ",
    designation: "শিক্ষক",
    organization: "উচ্চ বিদ্যালয় নেম",
    date: "05/10/2023",
  },
  {
    key: "3",
    name: "সামির খান",
    designation: "ম্যানেজার",
    organization: "কোম্পানি নেম",
    date: "20/06/2023",
  },
  {
    key: "4",
    name: "রিয়ানা চৌধুরী",
    designation: "সহকারী শিক্ষক",
    organization: "মাধ্যমিক স্কুল নেম",
    date: "10/03/2023",
  },
  {
    key: "5",
    name: "সাবিনা আহমেদ",
    designation: "ডিজাইনার",
    organization: "প্রিন্টিং কোম্পানি নেম",
    date: "15/09/2023",
  },
  {
    key: "6",
    name: "তাহমিনা বেগম",
    designation: "লেকচারার",
    organization: "কলেজ নেম",
    date: "12/04/2023",
  },
  {
    key: "7",
    name: "জোহরা খানম",
    designation: "ব্যাংক অফিসার",
    organization: "ব্যাংক নেম",
    date: "07/11/2023",
  },
  {
    key: "8",
    name: "রহিত আলম",
    designation: "এন্ডিনিয়ার",
    organization: "বৃদ্ধি প্রযুক্তি নেম",
    date: "25/02/2023",
  },
  {
    key: "9",
    name: "নয়িম হাসান",
    designation: "গ্রাফিক্স ডিজাইনার",
    organization: "অ্যাডভার্টাইজিং ফার্ম নেম",
    date: "18/07/2023",
  },
  {
    key: "10",
    name: "সাবরিনা তাহমিদ",
    designation: "উপাচার্য",
    organization: "মেডিকেল কলেজ নেম",
    date: "03/12/2023",
  },
];

const TestimonialsAndPrinting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log("Form values:", values);
      form.resetFields();
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Search values:", values);
  };


    const handleDownloadClick = () => {
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = '../../../assets/pdf/protroin.pdf'; // Replace with your PDF file path
      link.download = 'your_pdf_file_name.pdf'; // Replace with desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const handlePrintPdf = (data) => {};

  const columns = [
    {
      title: "ক্রমিক নং",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "শিক্ষক নাম",
      dataIndex: "designation",
      sorter: (a, b) => a.designation.localeCompare(b.designation),
    },
    {
      title: "আইডি",
      dataIndex: "organization",
      sorter: (a, b) => a.organization.localeCompare(b.organization),
    },
    {
      title: "শ্রেণী",
      dataIndex: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "বছর",
      dataIndex: "date",
      sorter: (a, b) => a.date.localeCompare(b.date),
    },
    {
      title: "ডাউনলোড",
      dataIndex: "date",
      render: (_, record) => (
        <Button
          className="flex items-center justify-center"
          // onClick={() => handlePrintPdf(record)}
          onClick={handleDownloadClick}
        >
   

          <span className="mr-1">
            <GrDownload />
          </span>
          <span>ডাউনলোড</span>
     
        </Button>
      ),
    },
  ];

  const onSearch = (value) => console.log(value);

  return (
    <div className="m-3">
      <Modal
        width={600}
        title="নতুন প্রশংসাপত্র যোগ করুন"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="নাম"
            rules={[{ required: true, message: "নাম প্রদান করুন" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="designation"
            label="পদবি"
            rules={[{ required: true, message: "পদবি প্রদান করুন" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="organization"
            label="প্রতিষ্ঠান"
            rules={[{ required: true, message: "প্রতিষ্ঠান প্রদান করুন" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="তারিখ"
            rules={[{ required: true, message: "তারিখ প্রদান করুন" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <div className="flex mx-2 my-2 justify-between">
        <div>
          <h2 className="text-2xl">শিক্ষক প্রশংসাপত্র ও মুদ্রণ</h2>
        </div>
        <div
          onClick={showModal}
          className="flex items-center p-6 cursor-pointer justify-between"
        >
          <div className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl1 bg-gray-600 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path d="M12 6v12m6-6H6" />
            </svg>
            <span className="text-lg text-white">নতুন প্রশংসাপত্র</span>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between  py-4">
        {/* search input field */}

        <Row justify="end">
          <Col xs={24} md={24} lg={24}>
            <Search
              placeholder="আইডি দিয়ে অনুসন্ধান"
              onSearch={onSearch}
              enterButton
              style={{ minWidth: "100%", textAlign: "center", width: 200 }}
            />
          </Col>
        </Row>

        {/* download data */}
        <div className="border-b border-gray-200 focus:border-blue-400 outline-none flex items-center text-xl gap-2 pb-2 lg:px-2">
          <ImCopy data-te-toggle="tooltip" title="কপি" />
          <AiOutlineFileExcel data-te-toggle="tooltip" title="এক্সেল" />
          <BsFiletypeCsv data-te-toggle="tooltip" title="সিএসভি" />
          <FiPrinter data-te-toggle="tooltip" title="প্রিন্ট" />
          <FiColumns data-te-toggle="tooltip" title="কলাম" />
        </div>
      </div>
      <div style={{ overflowY: "auto" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default TestimonialsAndPrinting
