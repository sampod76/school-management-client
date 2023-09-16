import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Pagination,
  Dropdown,
  Space,
  Menu,
  Input,
  Col,
  Row,
  Select,
  Typography,
} from "antd";
import { confirm_modal } from "@/utils/modalHook";

import Link from "next/link";
const { Search } = Input;
const StudentAttendance = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const handleDelete = () => {
    confirm_modal("You want to delete Category!");
  };

  const handleMoveToTrash = () => {
    confirm_modal("Move to Trash");
  };

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};
  const onSearch = (value) => console.log(value);

  const columns = [
    { title: "শিক্ষার্থী আইডি", dataIndex: "studentId", key: "studentId" },
    { title: "শিক্ষার্থী নাম", dataIndex: "studentName", key: "studentName" },
    { title: "শ্রেণী", dataIndex: "class", key: "class" },
    { title: "শাখা", dataIndex: "branch", key: "branch" },
    { title: "তারিখ", dataIndex: "date", key: "date" },
    { title: "প্রবেশ সময়", dataIndex: "entryTime", key: "entryTime" },
    { title: "বের হওয়ার সময়", dataIndex: "exitTime", key: "exitTime" },
    {
      title: "স্ট্যাটাস",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "উপস্থিত"
              ? "green"
              : status === "বিলম্ব"
              ? "orange"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "একশন",
      key: "key",
      fixed: "right",
      width: 100,
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="view"
                  onClick={() => {
                    handleMoveToTrash();
                  }}
                >
                  ট্র্যাশে সরান
                </Menu.Item>
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  ডাটা মুছুন
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

  const attendanceData = [
    {
      studentId: "101",
      studentName: "আমিনুল ইসলাম",
      class: "১০",
      branch: "বিজ্ঞান",
      date: "2023-08-15",
      entryTime: "09:00 AM",
      exitTime: "02:00 PM",
      status: "উপস্থিত",
    },
    {
      studentId: "102",
      studentName: "মেহেরেন আক্তার",
      class: "৯",
      branch: "বিজ্ঞান",
      date: "2023-08-15",
      entryTime: "09:30 AM",
      exitTime: "03:30 PM",
      status: "বিলম্ব",
    },
    {
      studentId: "103",
      studentName: "রহিম খান",
      class: "১১",
      branch: "কমার্স",
      date: "2023-08-15",
      entryTime: "10:00 AM",
      exitTime: "04:00 PM",
      status: "উপস্থিত",
    },
    {
      studentId: "104",
      studentName: "জাহিদ হোসেন",
      class: "১২",
      branch: "মানবিক",
      date: "2023-08-15",
      entryTime: "09:45 AM",
      exitTime: "02:45 PM",
      status: "উপস্থিত",
    },
    {
      studentId: "105",
      studentName: "ফারিদা খাতুন",
      class: "১০",
      branch: "বিজ্ঞান",
      date: "2023-08-16",
      entryTime: "08:30 AM",
      exitTime: "01:30 PM",
      status: "অনুউপস্থিত",
    },
    {
      studentId: "106",
      studentName: "সামির আহমেদ",
      class: "৯",
      branch: "বিজ্ঞান",
      date: "2023-08-16",
      entryTime: "10:15 AM",
      exitTime: "03:15 PM",
      status: "বিলম্ব",
    },
    {
      studentId: "107",
      studentName: "মেহনাজ তাসনীম",
      class: "১১",
      branch: "কমার্স",
      date: "2023-08-17",
      entryTime: "09:00 AM",
      exitTime: "02:00 PM",
      status: "উপস্থিত",
    },
    {
      studentId: "108",
      studentName: "কামরুজ্জামান শেখ",
      class: "১২",
      branch: "মানবিক",
      date: "2023-08-17",
      entryTime: "10:30 AM",
      exitTime: "03:30 PM",
      status: "উপস্থিত",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mb-4">শিক্ষার্থীদের হাজিরা</h2>
        <Button type="primary">
          <Link href={"/supper-admin/student-information/student-add-attendance"}>
            + নতুন হাজিরা
          </Link>
        </Button>
      </div>

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Select
                  placeholder="শ্রেনি নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="প্রথম">প্রথম শ্রেণী</Select.Option>
                  <Select.Option value="দ্বিতীয়">
                    দ্বিতীয় শ্রেণী
                  </Select.Option>
                  <Select.Option value="তৃতীয়">তৃতীয় শ্রেণী</Select.Option>
                  <Select.Option value="চতুর্থ">চতুর্থ শ্রেণী</Select.Option>
                  <Select.Option value="পঞ্চম">পঞ্চম শ্রেণী</Select.Option>
                  <Select.Option value="ষষ্ঠ">ষষ্ঠ শ্রেণী</Select.Option>
                  <Select.Option value="সপ্তম">সপ্তম শ্রেণী</Select.Option>
                  <Select.Option value="অষ্টম">অষ্টম শ্রেণী</Select.Option>
                  <Select.Option value="নবম">নবম শ্রেণী</Select.Option>
                  <Select.Option value="দশম">দশম শ্রেণী</Select.Option>
                </Select>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="শাখা নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentSection: value,
                    }))
                  }
                >
                  <Select.Option value="ক">ক শাখা</Select.Option>
                  <Select.Option value="খ">খ শাখা</Select.Option>
                  <Select.Option value="গ">গ শ্রেণী</Select.Option>
                </Select>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="বিভাগ নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentDepartment: value,
                    }))
                  }
                >
                  <Select.Option value="বিজ্ঞান">বিজ্ঞান</Select.Option>
                  <Select.Option value="বাণিজ্য">বাণিজ্য</Select.Option>
                  <Select.Option value="মানবিক">মানবিক</Select.Option>
                </Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Button type="primary" onClick={handleFilterClick}>
                ফিল্টার করুন
              </Button>
              <Button type="primary ml-2" onClick={handleFilterReset}>
                রিসেট করুন
              </Button>
            </Row>
          </div>

          <div className="lg:w-[40%] md:w-[30%] w-full mt-4 md:mt-0">
            <Row justify="end">
              <Col xs={24} md={22} lg={16}>
                <Search
                  placeholder="আইডি দিয়ে অনুসন্ধান"
                  onSearch={onSearch}
                  enterButton
                  style={{ minWidth: "100%", textAlign: "center", width: 200 }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <div style={{ overflowY: "auto" }}>
        <Table
          columns={columns}
          dataSource={attendanceData}
          pagination={false}
        />
      </div>
      <div className="mt-4 flex justify-center">
        <Pagination
          defaultPageSize={20} // Number of items per page
          showSizeChanger
          showQuickJumper
          total={attendanceData.length}
        />
      </div>
    </div>
  );
};

export default StudentAttendance;
