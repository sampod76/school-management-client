/* // ? create by --> Nizam
  ? 1.update-> sampod-> filter and table
  ? 2.update-> Bayajid -> search and filter design by
*/
import DetailsView from "@/components/student-information/student-list/DetailsView";
import ListView from "@/components/student-information/student-list/ListView";
import { Button, Col, Input, Row, Select, Tabs, Typography } from "antd";
import Link from "next/link";
import { useState } from "react";
const { Search } = Input;

const items = [
  {
    key: "1",
    label: (
      <span style={{ fontSize: "20px", marginLeft: "10px" }}>List View</span>
    ),
    children: <ListView />,
  },
  {
    key: "2",
    label: <span style={{ fontSize: "20px" }}>Details View</span>,
    children: <DetailsView />,
  },
];

const StudentList = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  let tableContent = [];
  const onChange = (key) => {
    console.log(key);
  };

  const onSearch = (value) => console.log(value);

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };

  const handleFilterReset = () => {};
  return (
    <div className="bg-[#e7edf5] min-h-screen">
      <h1 className="text-2xl p-4 font-bold">শিক্ষার্থী তালিকা</h1>
      <p className="ml-4 text-xl text-blue-400">
        হোম <span className="text-black">/ শিক্ষার্থী তালিকা</span>
      </p>

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

      <div className="p-3 border-2 rounded-md relative">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <div className="absolute top-5 right-2">
          <Button type="primary">
            <Link href={"/supper-admin/student-information/add-admission"}>
              +যোগ কর
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
