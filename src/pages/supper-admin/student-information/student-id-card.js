import React, { useState } from "react";
import { Button, Table, Input, Col, Row, Select, Typography } from "antd";
import { ImDownload2 } from "react-icons/im";
const { Search } = Input;

const StudentIDCardPage = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const googleDrivePdfLink =
    "https://drive.google.com/file/d/1XlLDwzG60lsb-mcvBOzl3TkCQtNkcEau/view?usp=drive_link";
  const data = [
    {
      id: 1,
      name: "আব্দুল্লাহ",
      studentId: "123456",
      className: "প্রথম শ্রেণি",
      year: "2023",
    },
    {
      id: 2,
      name: "ফাতিমা",
      studentId: "789012",
      className: "দ্বিতীয় শ্রেণি",
      year: "2023",
    },
    // Add more student data here
  ];

  const columns = [
    { title: "ক্রমিক নং", dataIndex: "id", key: "id", width: 100 },
    { title: "শিক্ষার্থী নাম", dataIndex: "name", key: "name" },
    { title: "আইডি", dataIndex: "studentId", key: "studentId" },
    { title: "শ্রেণী", dataIndex: "className", key: "className" },
    { title: "বছর", dataIndex: "year", key: "year" },
    {
      title: "ডাউনলোড",
      dataIndex: "download",
      key: "download",
      render: (text, record) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={googleDrivePdfLink}
          download
        >
          {/* <Button type="link" onClick={() => handleDownload(record.studentId)}>
          <ImDownload2></ImDownload2>
        </Button> */}
          <Button>
            <ImDownload2></ImDownload2>
          </Button>
        </a>
      ),
      width: 100,
    },
  ];

  const handleDownload = (studentId) => {
    // You can implement the download logic here
    // For example, generate a PDF and provide a download link
    console.log("Downloading ID card for student:", studentId);
  };

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};

  const onSearch = (value) => console.log(value);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">শিক্ষার্থী আইডি কার্ড</h1>

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

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default StudentIDCardPage;
