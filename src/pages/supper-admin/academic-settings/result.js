import React, { useState } from "react";
import { Table, Input, Button, Space, Row, Col, Select, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

const data = [
  {
    key: "1",
    studentName: "মাহির",
    className: "শ্রেণি ১",
    subject: "বাংলা",
    marks: 95,
    grade: "A+",
  },
  {
    key: "2",
    studentName: "কামরুজ্জামান",
    className: "শ্রেণি ২",
    subject: "গণিত",
    marks: 88,
    grade: "A",
  },
  {
    key: "3",
    studentName: "আমিনুল",
    className: "শ্রেণি ১",
    subject: "বিজ্ঞান",
    marks: 92,
    grade: "A",
  },
  {
    key: "4",
    studentName: "মেহেদি",
    className: "শ্রেণি ২",
    subject: "ইংরেজি",
    marks: 85,
    grade: "A-",
  },
  {
    key: "5",
    studentName: "তাহমিনুর",
    className: "শ্রেণি ৩",
    subject: "গণিত",
    marks: 78,
    grade: "B+",
  },
  {
    key: "6",
    studentName: "রাহীদ",
    className: "শ্রেণি ৩",
    subject: "বাংলা",
    marks: 88,
    grade: "A",
  },
  {
    key: "7",
    studentName: "নাজিম",
    className: "শ্রেণি ৪",
    subject: "ইংরেজি",
    marks: 75,
    grade: "B",
  },
  {
    key: "8",
    studentName: "আব্দুল্লাহ",
    className: "শ্রেণি ৪",
    subject: "গণিত",
    marks: 90,
    grade: "A",
  },
  {
    key: "9",
    studentName: "সাকিব",
    className: "শ্রেণি ৫",
    subject: "বাংলা",
    marks: 82,
    grade: "B+",
  },
  {
    key: "10",
    studentName: "ফারুক",
    className: "শ্রেণি ৫",
    subject: "বিজ্ঞান",
    marks: 70,
    grade: "B",
  },
];

const ResultPage = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (selectedKeys, dataIndex) => {
    const filteredResults = data.filter((record) =>
      record[dataIndex].toLowerCase().includes(selectedKeys[0].toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredData(data);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`ছাত্র/ছাত্রীর নাম খুঁজুন`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            খুঁজুন
          </Button>
          <Button
            onClick={() => handleReset()}
            size="small"
            style={{ width: 90 }}
          >
            রিসেট
          </Button>
        </Space>
      </div>
    ),
  });

  const columns = [
    {
      title: "ছাত্র/ছাত্রীর নাম",
      dataIndex: "studentName",
      key: "studentName",
      ...getColumnSearchProps("studentName"),
    },
    {
      title: "ক্লাসের নাম",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "বিষয়",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "মার্কস",
      dataIndex: "marks",
      key: "marks",
    },
    {
      title: "গ্রেড",
      dataIndex: "grade",
      key: "grade",
    },
  ];

  const onSearch = (value) => console.log(value);
  const handleFilterReset = () => {
    
  };
  const handleFilterClick = () => {
    
  };

  return (
    <div className="m-3">
      <h1 className="text-xl font-semibold ">ফলাফল </h1>
      <div className="flex justify-end items-center mr-4 pb-4">
       
    
        <button className="flex justify-between items-center bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
          <span> Add</span>
        </button>
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
          dataSource={data}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default ResultPage;
