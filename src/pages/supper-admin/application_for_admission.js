/* // ? create by --> sampod nath

 */
import { Button, Dropdown, Space, Table, Typography } from "antd";
import React from "react";
const data = [
  {
    class: "six",
    mobile_number: "12345678900",
    application_time: "2020-08-13",
    date: "2020-08-13",
    students_name: "Jane Doe0",
    roll_number: 101,
    total_number: 1417,
    serial_number: "SR1230",
    key: 0,
  },
  {
    class: "six",
    mobile_number: "12345678901",
    application_time: "2021-08-27",
    date: "2021-08-27",
    guardians_name: "John Doe fathen1",
    students_name: "Jane Doe1",
    roll_number: 102,
    total_number: 1666,
    serial_number: "SR1231",
    key: 1,
  },
  {
    class: "six",
    mobile_number: "12345678902",
    application_time: "2022-08-2",
    date: "2022-08-2",
    guardians_name: "John Doe fathen2",
    students_name: "Jane Doe2",
    roll_number: 103,
    total_number: 1428,
    serial_number: "SR1232",
    key: 2,
  },
  {
    class: "six",
    mobile_number: "12345678903",
    application_time: "2023-08-29",
    date: "2023-08-29",
    guardians_name: "John Doe fathen3",
    students_name: "Jane Doe3",
    roll_number: 104,
    total_number: 1471,
    serial_number: "SR1233",
    key: 3,
  },
  {
    class: "six",
    mobile_number: "12345678904",
    application_time: "2024-08-10",
    date: "2024-08-10",
    guardians_name: "John Doe fathen4",
    students_name: "Jane Doe4",
    roll_number: 105,
    total_number: 1152,
    serial_number: "SR1234",
    key: 4,
  },
  {
    class: "six",
    mobile_number: "12345678905",
    application_time: "2025-08-11",
    date: "2025-08-11",
    guardians_name: "John Doe fathen5",
    students_name: "Jane Doe5",
    roll_number: 106,
    total_number: 142,
    serial_number: "SR1235",
    key: 5,
  },
  {
    class: "six",
    mobile_number: "12345678906",
    application_time: "2026-08-25",
    date: "2026-08-25",
    guardians_name: "John Doe fathen6",
    students_name: "Jane Doe6",
    roll_number: 107,
    total_number: 363,
    serial_number: "SR1236",
    key: 6,
  },
  {
    class: "six",
    mobile_number: "12345678907",
    application_time: "2027-08-9",
    date: "2027-08-9",
    guardians_name: "John Doe fathen7",
    students_name: "Jane Doe7",
    roll_number: 108,
    total_number: 1849,
    serial_number: "SR1237",
    key: 7,
  },
  {
    class: "six",
    mobile_number: "12345678908",
    application_time: "2028-08-16",
    date: "2028-08-16",
    guardians_name: "John Doe fathen8",
    students_name: "Jane Doe8",
    roll_number: 109,
    total_number: 1046,
    serial_number: "SR1238",
    key: 8,
  },
  {
    class: "six",
    mobile_number: "12345678909",
    application_time: "2029-08-12",
    date: "2029-08-12",
    guardians_name: "John Doe fathen9",
    students_name: "Jane Doe9",
    roll_number: 110,
    total_number: 1475,
    serial_number: "SR1239",
    key: 9,
  },
  {
    class: "six",
    mobile_number: "123456789010",
    application_time: "20210-08-22",
    date: "20210-08-22",
    guardians_name: "John Doe fathen10",
    students_name: "Jane Doe10",
    roll_number: 111,
    total_number: 535,
    serial_number: "SR12310",
    key: 10,
  },
];

const Application_for_admission = () => {
  const items = [
    {
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: "Delete",
    },
    {
      key: "3",
      label: "View",
    },
  ];
  return (
    <div>
      <Typography.Title
        level={3}
        style={{ textAlign: "center", marginTop: "5px" }}
      >
        ভর্তির আবেদন
      </Typography.Title>
      <Table
        dataSource={data}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: "ক্রমিক নং",
            // width: 100,
            dataIndex: "serial_number",
            key: "key",
           
    
          },

          {
            title: "শিক্ষাথীর নাম",
            dataIndex: "students_name",
            key: "key",
            // width: 150,
            
          },
          {
            title: "শ্রেণী",
            // width: 100,
            dataIndex: "class",
            key: "key",
            // fixed: "left",
          },
          {
            title: "আবেদনের সময়",
            dataIndex: "application_time",
            dataIndex: "date",
            key: "key",
            // width: 150,
          },

          {
            title: "তারিখ",
            dataIndex: "date",
            key: "key",
            // width: 150,
          },

          {
            title: "মোবাইল নম্বর",
            dataIndex: "mobile_number",
            key: "key",
            // width: 150,
          },

          {
            title: "একশন",
            key: "key",
            fixed: "right",
            width: 100,
            dataIndex: "operation",
            render: () => (
              <Space size="middle">
                <Dropdown
                  menu={{
                    items,
                  }}
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

export default Application_for_admission;
