/* // ? create by --> sampod nath

 */
import { confirm_modal } from "@/utils/modalHook";
import { Col, Row, Select, Typography, Input, Table, Menu, Space, Dropdown, Button } from "antd";
import Link from "next/link";
const { Search } = Input;
import React from "react";
import { PiClipboardTextDuotone } from "react-icons/pi";
const data = [
  {
    gender: "Male",
    mobile_number: "12345678900",
    admission_date: "2020-08-13",
    guardians_name: "John Doe fathen0",
    students_name: "Jane Doe0",
    roll_number: 101,
    total_number: 1417,
    serial_number: "SR1230",
    key: 0,
  },
  {
    gender: "Male",
    mobile_number: "12345678901",
    admission_date: "2021-08-27",
    guardians_name: "John Doe fathen1",
    students_name: "Jane Doe1",
    roll_number: 102,
    total_number: 1666,
    serial_number: "SR1231",
    key: 1,
  },
  {
    gender: "Male",
    mobile_number: "12345678902",
    admission_date: "2022-08-2",
    guardians_name: "John Doe fathen2",
    students_name: "Jane Doe2",
    roll_number: 103,
    total_number: 1428,
    serial_number: "SR1232",
    key: 2,
  },
  {
    gender: "Male",
    mobile_number: "12345678903",
    admission_date: "2023-08-29",
    guardians_name: "John Doe fathen3",
    students_name: "Jane Doe3",
    roll_number: 104,
    total_number: 1471,
    serial_number: "SR1233",
    key: 3,
  },
  {
    gender: "Male",
    mobile_number: "12345678904",
    admission_date: "2024-08-10",
    guardians_name: "John Doe fathen4",
    students_name: "Jane Doe4",
    roll_number: 105,
    total_number: 1152,
    serial_number: "SR1234",
    key: 4,
  },
  {
    gender: "Male",
    mobile_number: "12345678905",
    admission_date: "2025-08-11",
    guardians_name: "John Doe fathen5",
    students_name: "Jane Doe5",
    roll_number: 106,
    total_number: 142,
    serial_number: "SR1235",
    key: 5,
  },
  {
    gender: "Male",
    mobile_number: "12345678906",
    admission_date: "2026-08-25",
    guardians_name: "John Doe fathen6",
    students_name: "Jane Doe6",
    roll_number: 107,
    total_number: 363,
    serial_number: "SR1236",
    key: 6,
  },
  {
    gender: "Male",
    mobile_number: "12345678907",
    admission_date: "2027-08-9",
    guardians_name: "John Doe fathen7",
    students_name: "Jane Doe7",
    roll_number: 108,
    total_number: 1849,
    serial_number: "SR1237",
    key: 7,
  },
  {
    gender: "Male",
    mobile_number: "12345678908",
    admission_date: "2028-08-16",
    guardians_name: "John Doe fathen8",
    students_name: "Jane Doe8",
    roll_number: 109,
    total_number: 1046,
    serial_number: "SR1238",
    key: 8,
  },
  {
    gender: "Male",
    mobile_number: "12345678909",
    admission_date: "2029-08-12",
    guardians_name: "John Doe fathen9",
    students_name: "Jane Doe9",
    roll_number: 110,
    total_number: 1475,
    serial_number: "SR1239",
    key: 9,
  },
  {
    gender: "Male",
    mobile_number: "123456789010",
    admission_date: "20210-08-22",
    guardians_name: "John Doe fathen10",
    students_name: "Jane Doe10",
    roll_number: 111,
    total_number: 535,
    serial_number: "SR12310",
    key: 10,
  },
  {
    gender: "Male",
    mobile_number: "123456789011",
    admission_date: "20211-08-4",
    guardians_name: "John Doe fathen11",
    students_name: "Jane Doe11",
    roll_number: 112,
    total_number: 1960,
    serial_number: "SR12311",
    key: 11,
  },
  {
    gender: "Male",
    mobile_number: "123456789012",
    admission_date: "20212-08-20",
    guardians_name: "John Doe fathen12",
    students_name: "Jane Doe12",
    roll_number: 113,
    total_number: 561,
    serial_number: "SR12312",
    key: 12,
  },
  {
    gender: "Male",
    mobile_number: "123456789013",
    admission_date: "20213-08-24",
    guardians_name: "John Doe fathen13",
    students_name: "Jane Doe13",
    roll_number: 114,
    total_number: 1283,
    serial_number: "SR12313",
    key: 13,
  },
  {
    gender: "Male",
    mobile_number: "123456789014",
    admission_date: "20214-08-26",
    guardians_name: "John Doe fathen14",
    students_name: "Jane Doe14",
    roll_number: 115,
    total_number: 1911,
    serial_number: "SR12314",
    key: 14,
  },
  {
    gender: "Male",
    mobile_number: "123456789015",
    admission_date: "20215-08-1",
    guardians_name: "John Doe fathen15",
    students_name: "Jane Doe15",
    roll_number: 116,
    total_number: 526,
    serial_number: "SR12315",
    key: 15,
  },
  {
    gender: "Male",
    mobile_number: "123456789016",
    admission_date: "20216-08-21",
    guardians_name: "John Doe fathen16",
    students_name: "Jane Doe16",
    roll_number: 117,
    total_number: 328,
    serial_number: "SR12316",
    key: 16,
  },
  {
    gender: "Male",
    mobile_number: "123456789017",
    admission_date: "20217-08-14",
    guardians_name: "John Doe fathen17",
    students_name: "Jane Doe17",
    roll_number: 118,
    total_number: 1937,
    serial_number: "SR12317",
    key: 17,
  },
  {
    gender: "Male",
    mobile_number: "123456789018",
    admission_date: "20218-08-4",
    guardians_name: "John Doe fathen18",
    students_name: "Jane Doe18",
    roll_number: 119,
    total_number: 997,
    serial_number: "SR12318",
    key: 18,
  },
  {
    gender: "Male",
    mobile_number: "123456789019",
    admission_date: "20219-08-15",
    guardians_name: "John Doe fathen19",
    students_name: "Jane Doe19",
    roll_number: 120,
    total_number: 529,
    serial_number: "SR12319",
    key: 19,
  },
  {
    gender: "Male",
    mobile_number: "123456789020",
    admission_date: "20220-08-7",
    guardians_name: "John Doe fathen20",
    students_name: "Jane Doe20",
    roll_number: 121,
    total_number: 1758,
    serial_number: "SR12320",
    key: 20,
  },
  {
    gender: "Male",
    mobile_number: "123456789021",
    admission_date: "20221-08-7",
    guardians_name: "John Doe fathen21",
    students_name: "Jane Doe21",
    roll_number: 122,
    total_number: 1574,
    serial_number: "SR12321",
    key: 21,
  },
  {
    gender: "Male",
    mobile_number: "123456789022",
    admission_date: "20222-08-28",
    guardians_name: "John Doe fathen22",
    students_name: "Jane Doe22",
    roll_number: 123,
    total_number: 951,
    serial_number: "SR12322",
    key: 22,
  },
  {
    gender: "Male",
    mobile_number: "123456789023",
    admission_date: "20223-08-10",
    guardians_name: "John Doe fathen23",
    students_name: "Jane Doe23",
    roll_number: 124,
    total_number: 754,
    serial_number: "SR12323",
    key: 23,
  },
  {
    gender: "Male",
    mobile_number: "123456789024",
    admission_date: "20224-08-17",
    guardians_name: "John Doe fathen24",
    students_name: "Jane Doe24",
    roll_number: 125,
    total_number: 1742,
    serial_number: "SR12324",
    key: 24,
  },
  {
    gender: "Male",
    mobile_number: "123456789025",
    admission_date: "20225-08-25",
    guardians_name: "John Doe fathen25",
    students_name: "Jane Doe25",
    roll_number: 126,
    total_number: 881,
    serial_number: "SR12325",
    key: 25,
  },
  {
    gender: "Male",
    mobile_number: "123456789026",
    admission_date: "20226-08-16",
    guardians_name: "John Doe fathen26",
    students_name: "Jane Doe26",
    roll_number: 127,
    total_number: 451,
    serial_number: "SR12326",
    key: 26,
  },
  {
    gender: "Male",
    mobile_number: "123456789027",
    admission_date: "20227-08-19",
    guardians_name: "John Doe fathen27",
    students_name: "Jane Doe27",
    roll_number: 128,
    total_number: 833,
    serial_number: "SR12327",
    key: 27,
  },
  {
    gender: "Male",
    mobile_number: "123456789028",
    admission_date: "20228-08-25",
    guardians_name: "John Doe fathen28",
    students_name: "Jane Doe28",
    roll_number: 129,
    total_number: 825,
    serial_number: "SR12328",
    key: 28,
  },
  {
    gender: "Male",
    mobile_number: "123456789029",
    admission_date: "20229-08-24",
    guardians_name: "John Doe fathen29",
    students_name: "Jane Doe29",
    roll_number: 130,
    total_number: 536,
    serial_number: "SR12329",
    key: 29,
  },
];

const BestStudents = () => {
  const onSearch = (value) => console.log(value);

  const handleDelete = () => {
    confirm_modal("You want to delete Category!") 
   };

   const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };

  const handleFilterReset = () => {};

  return (
    <div className="mt-2">
      {" "}
      {/* <h1 className="text-2xl p-4 font-bold">নতুন শিক্ষার্থীর তালিকা </h1> */}
      <p className="ml-5 text-xl text-blue-400 my-3">
        হোম <span className="text-black">/সেরা শিক্ষার্থী</span>
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

      <Table
        dataSource={data}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: "এসআর নং",
            width: 100,
            dataIndex: "serial_number",
            key: "key",
            // fixed: "left",
            width: 150,
          },

          {
            title: "শিক্ষাথীর নাম",
            dataIndex: "students_name",
            key: "key",
            width: 150,
          },
          {
            title: "মোট নম্বর",
            width: 100,
            dataIndex: "total_number",
            key: "key",
            // fixed: "left",
          },
          {
            title: "রোল নম্বর",
            dataIndex: "roll_number",
            key: "key",
            width: 150,
          },

          {
            title: "অবিভাবকের নাম",
            dataIndex: "guardians_name",
            key: "key",
            width: 150,
          },

          {
            title: "মোবাইল নম্বর",
            dataIndex: "mobile_number",
            key: "key",
            width: 150,
          },
          {
            title: "লিঙ্গ",
            dataIndex: "gender",
            key: "key",
            width: 150,
          },

          {
            title: "একশন",
            key: "key",
            fixed: "right",
            width: 85,
            render: (record) => (
              <Space size="middle">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        key="view"
                        onClick={() => {
                          // Handle view logic here
                        }}
                      >
                        <Link href={`best-students/view/1`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`best-students/edit/1`}>Edit</Link>
                      </Menu.Item>

                      <Menu.Item
                        key="delete"
                        onClick={() => {
                          handleDelete();
                        }}
                      >
                        Delete
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <a>একশন</a>
                </Dropdown>
              </Space>
            ),
          },
        ]}
        d
      ></Table>
    </div>
  );
};

export default BestStudents;
