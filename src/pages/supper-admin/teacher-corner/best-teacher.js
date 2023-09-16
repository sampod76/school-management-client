import React, { useState } from "react";
import { Table, Button, Input, Col, Row, Select, Typography } from "antd";
const { Search } = Input;

const TopTeachersPage = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const data = [
    {
      id: 1,
      name: "জননি",
      subject: "গণিত",
      achievements: "বেশি প্রশংসা",
      months: "6",
      totalClasses: "30",
      mobile: "0123456789",
    },
    {
      id: 2,
      name: "রিয়াদ",
      subject: "বাংলা",
      achievements: "উত্কৃষ্ট শিক্ষক",
      months: "10",
      totalClasses: "40",
      mobile: "9876543210",
    },
    {
      id: 3,
      name: "সাব্বির",
      subject: "ইংরেজি",
      achievements: "শ্রেষ্ঠ শিক্ষক",
      months: "8",
      totalClasses: "25",
      mobile: "1234567890",
    },
    {
      id: 4,
      name: "নওমান",
      subject: "গণিত",
      achievements: "বেশি উপস্থিতি",
      months: "12",
      totalClasses: "60",
      mobile: "5678901234",
    },
    {
      id: 5,
      name: "ফাহিম",
      subject: "বাংলা",
      achievements: "প্রতিষ্ঠিত শিক্ষক",
      months: "9",
      totalClasses: "45",
      mobile: "3456789012",
    },
    {
      id: 6,
      name: "শাহেদ",
      subject: "গণিত",
      achievements: "উন্নত শিক্ষক",
      months: "7",
      totalClasses: "28",
      mobile: "6789012345",
    },
    {
      id: 7,
      name: "তামিম",
      subject: "ইংরেজি",
      achievements: "প্রশিক্ষণার্থী শিক্ষক",
      months: "5",
      totalClasses: "20",
      mobile: "4567890123",
    },
    {
      id: 8,
      name: "আমিনুল",
      subject: "গণিত",
      achievements: "উপস্থিতি অত্যধিক",
      months: "11",
      totalClasses: "55",
      mobile: "2345678901",
    },
    {
      id: 9,
      name: "মোশাররফ",
      subject: "বাংলা",
      achievements: "উন্নত শিক্ষক",
      months: "7",
      totalClasses: "30",
      mobile: "7890123456",
    },
    {
      id: 10,
      name: "নীল",
      subject: "ইংরেজি",
      achievements: "প্রশিক্ষণার্থী শিক্ষক",
      months: "6",
      totalClasses: "24",
      mobile: "5678901234",
    },
  ];

  const columns = [
    {
      title: "ক্রমিক নং",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "নাম",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "বিষয়",
      dataIndex: "subject",
      key: "id",
    },
    {
      title: "অর্জন",
      dataIndex: "achievements",
      key: "id",
    },
    {
      title: "মাস",
      dataIndex: "months",
      key: "id",
    },
    {
      title: "মোট ক্লাস",
      dataIndex: "totalClasses",
      key: "id",
    },
    {
      title: "মোবাইল",
      dataIndex: "mobile",
      key: "id",
    },
    // {
    //   title: "একশন",
    //   dataIndex: "id",
    //    key: "id",
    //   render: (id) => <Button type="link">দেখুন</Button>,
    // },
  ];

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };

  // reset function for filter
  const handleFilterReset = () => {};
  const onSearch = (value) => console.log(value);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">সেরা শিক্ষক</h2>

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
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
      <div style={{ overflowY: "auto" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 8 }}
        />
      </div>
    </div>
  );
};

export default TopTeachersPage;
