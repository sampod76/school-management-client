import React, { useState } from "react";
import {
  Table,
  Button,
  Col,
  Row,
  Select,
  Typography,
  Input,
  Form,
  DatePicker,
} from "antd";
const { Search } = Input;

const TeacherAttendancePage = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};
  const onSearch = (value) => console.log(value);

  const data = [
    {
      id: 1,
      name: "জননি",
      subject: "গণিত",
      date: "01-08-2023",
      entryTime: "09:00 AM",
      exitTime: "03:00 PM",
      status: "উপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 2,
      name: "করিম",
      subject: "বাংলা",
      date: "01-08-2023",
      entryTime: "09:30 AM",
      exitTime: "02:30 PM",
      status: "অনুপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 3,
      name: "আরিফ",
      subject: "ইংরেজি",
      date: "01-08-2023",
      entryTime: "10:00 AM",
      exitTime: "04:00 PM",
      status: "বিলম্ব",
      mobile: "0123456789",
    },
    {
      id: 4,
      name: "রিয়াদ",
      subject: "গণিত",
      date: "02-08-2023",
      entryTime: "09:15 AM",
      exitTime: "03:15 PM",
      status: "উপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 5,
      name: "তানজিম",
      subject: "বিজ্ঞান",
      date: "02-08-2023",
      entryTime: "10:30 AM",
      exitTime: "03:30 PM",
      status: "উপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 6,
      name: "নাদিম",
      subject: "গণিত",
      date: "02-08-2023",
      entryTime: "09:00 AM",
      exitTime: "03:00 PM",
      status: "উপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 7,
      name: "মেহেদি",
      subject: "ইংরেজি",
      date: "03-08-2023",
      entryTime: "09:00 AM",
      exitTime: "03:00 PM",
      status: "উপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 8,
      name: "নদীম",
      subject: "গণিত",
      date: "03-08-2023",
      entryTime: "09:15 AM",
      exitTime: "03:15 PM",
      status: "অনুপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 9,
      name: "সামি",
      subject: "বাংলা",
      date: "03-08-2023",
      entryTime: "09:00 AM",
      exitTime: "03:00 PM",
      status: "উপস্থিত",
      mobile: "0123456789",
    },
    {
      id: 10,
      name: "ফাহিম",
      subject: "বিজ্ঞান",
      date: "03-08-2023",
      entryTime: "10:30 AM",
      exitTime: "03:30 PM",
      status: "বিলম্ব",
      mobile: "0123456789",
    },
  ];

  const statusColorMap = {
    উপস্থিত: "green",
    অনুপস্থিত: "red",
    বিলম্ব: "#cc7180",
    ছুটি: "blue",
  };

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
      title: "তারিখ",
      dataIndex: "date",
      key: "id",
    },
    {
      title: "প্রবেশ সময়",
      dataIndex: "entryTime",
      key: "id",
    },
    {
      title: "বের হওয়ার সময়",
      dataIndex: "exitTime",
      key: "id",
    },
    {
      title: "স্ট্যাটাস",
      dataIndex: "status",
      key: "id",
      render: (status) => (
        <span style={{ color: statusColorMap[status] }}>{status}</span>
      ),
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

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">শিক্ষক হাজিরা</h2>

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
              <Col xs={24} sm={12} lg={8}>
                <Form.Item
                  name="event_date"
                  rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentSection: value,
                    }))
                  }
                >
                  <DatePicker placeholder="তারিখ" style={{ width: "100%" }} />
                </Form.Item>
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
          pagination={{ pageSize: 8 }}
        />
      </div>
    </div>
  );
};

export default TeacherAttendancePage;
