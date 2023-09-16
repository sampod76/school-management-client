import React, { useState } from "react";
import { Button, Table, Input, Col, Row, Select, Typography } from "antd";
const { Search } = Input;
// import DownloadPDFButton from "@/components/super-admin-dashboard/teacher-corner/teacherProfile/teacher-id-card/DownloadPDFButton";
import { ImDownload2 } from "react-icons/im";

const TeacherIDCardPage = () => {
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
      name: "মোহাম্মদ আমির",
      teacherId: "T123",
      subject: "গণিত",
      year: "2023",
    },
    {
      id: 2,
      name: "ফাতেমা জাহান",
      teacherId: "T456",
      subject: "বাংলা",
      year: "2023",
    },
    // Add more teacher data here
  ];

  const columns = [
    { title: "ক্রমিক নং", dataIndex: "id", key: "id", width: 100 },
    { title: "শিক্ষক নাম", dataIndex: "name", key: "name" },
    { title: "আইডি", dataIndex: "teacherId", key: "teacherId" },
    { title: "বিষয়", dataIndex: "subject", key: "subject" },
    { title: "বছর", dataIndex: "year", key: "year" },
    {
      title: "ডাউনলোড",
      dataIndex: "download",
      key: "download",
      render: (text, record) => (
        // <DownloadPDFButton teacherId={record.teacherId} data={data} />
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

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };

  const onSearch = (value) => console.log(value);

  const handleFilterReset = () => {};
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">শিক্ষক আইডি কার্ড</h1>

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={8}>
                <Select
                  placeholder="বিষয় নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="বাংলা">বাংলা</Select.Option>
                  <Select.Option value="ইংরেজি">ইংরেজি</Select.Option>
                  <Select.Option value="গণিত">গণিত</Select.Option>
                  <Select.Option value="বিজ্ঞান">বিজ্ঞান</Select.Option>
                  <Select.Option value="সামাজিক বিজ্ঞান">
                    সামাজিক বিজ্ঞান
                  </Select.Option>
                  <Select.Option value="বাংলাদেশ ও বিশ্বপরিচয়">
                    বাংলাদেশ ও বিশ্বপরিচয়
                  </Select.Option>
                  <Select.Option value="ইসলাম ও নৈতিক শিক্ষা">
                    ইসলাম ও নৈতিক শিক্ষা
                  </Select.Option>
                  <Select.Option value="হিন্দু ধর্ম ও নৈতিক শিক্ষা">
                    হিন্দু ধর্ম ও নৈতিক শিক্ষা
                  </Select.Option>
                  <Select.Option value="বৌদ্ধ ধর্ম ও নৈতিক শিক্ষা">
                    বৌদ্ধ ধর্ম ও নৈতিক শিক্ষা
                  </Select.Option>
                  <Select.Option value="খ্রিস্ট ধর্ম ও নৈতিক শিক্ষা">
                    খ্রিস্ট ধর্ম ও নৈতিক শিক্ষা
                  </Select.Option>
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
              <Col xs={24} md={24} lg={16}>
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

export default TeacherIDCardPage;
