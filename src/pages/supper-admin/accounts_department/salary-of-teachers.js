import { Success_model, confirm_modal } from "@/utils/modalHook";
import {
  Button,
  Col,
  Dropdown,
  Menu,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Input,
} from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
const { Search } = Input;

const Salary_Of_Teachers = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const [teacherData, setTeacherData] = useState([]);
  console.log(teacherData, "ahmad");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher_salary`
        );
        const data = await response.json();
        const dataWithSerialNumbers = data?.data.map((item, index) => ({
          ...item,
          serial_no: (index + 1).toString(),
          key: index.toString(), // Adding a unique key for each row
        }));
        setTeacherData(dataWithSerialNumbers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (record) => {
    console.log(record);
    try {
      // Display a confirmation modal before proceeding with the deletion
      const confirmed = await Success_model({
        title: "Delete Teacher Salary",
        content: `Are you sure you want to delete the record for ${record.teacher_name}?`,
      });

      if (confirmed) {
        // Perform the actual deletion
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/teacher_salary/${record._id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          // Remove the deleted record from the data
          setTeacherData((prevData) =>
            prevData.filter((item) => item.key !== record.key)
          );
        } else {
          console.error("Delete request failed");
        }
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};
  const onSearch = (value) => console.log(value);

  return (
    <div className="p-4">
      <Typography.Title level={2}>শিক্ষকের বেতন</Typography.Title>

     

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Select
                  placeholder="শিক্ষকের পদবী নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="শিক্ষক">শিক্ষক</Select.Option>
                  <Select.Option value="সহশিক্ষক">সহশিক্ষক</Select.Option>
                  <Select.Option value="উপপ্রধান শিক্ষক">
                    উপপ্রধান শিক্ষক
                  </Select.Option>
                  <Select.Option value="প্রধান শিক্ষক">
                    প্রধান শিক্ষক
                  </Select.Option>
                  <Select.Option value="অন্যান্য">অন্যান্য</Select.Option>
                </Select>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="বেতন স্কেল নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentSection: value,
                    }))
                  }
                >
                  <Select.Option value="১৫,০০০ - ২০,০০০">
                    ১৫,০০০ - ২০,০০০
                  </Select.Option>
                  <Select.Option value="২০,০০০ - ২৫,০০০">
                    ২০,০০০ - ২৫,০০০
                  </Select.Option>
                  <Select.Option value="২৫,০০০ - ৩০,০০০">
                    ২৫,০০০ - ৩০,০০০
                  </Select.Option>
                  <Select.Option value="৩০,০০০ - ৩৫,০০০">
                    ৩০,০০০ - ৩৫,০০০
                  </Select.Option>
                  <Select.Option value="৩৫,০০০ - ৪০,০০০">
                    ৩৫,০০০ - ৪০,০০০
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
      <section>
        <Table
          dataSource={teacherData}
          style={{ margin: "0.3rem 1rem" }}
          scroll={{
            x: 1200,
          }}
          columns={[
            {
              title: "ক্রমিক নং",
              width: 100,
              dataIndex: "serial_no",
              key: "serial_no",
              // fixed: "left",
              width: 100,
            },
            {
              title: "শিক্ষকের নাম",
              dataIndex: "teacher_name",
              key: "teacher_name",
              ellipsis: true,
              width: 150,
            },
            {
              title: "শিক্ষকের পদবী",
              width: 100,
              dataIndex: "teacher_designation",
              key: "teacher_designation",
              // fixed: "left",
            },

            {
              title: "শিক্ষকের বেতন স্কেল",
              dataIndex: "teacher_salary_scale",
              key: "teacher_salary_scale",
              width: 150,
            },
            {
              title: "বেতন",
              dataIndex: "salary",
              key: "salary",
              width: 150,
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
                        <Menu.Item key="action">
                          <Link href={`salary-of-teachers/view/${record._id}`}>
                            View
                          </Link>
                        </Menu.Item>
                        <Menu.Item key="edit">
                          <Link href={`salary-of-teachers/edit/${record._id}`}>
                            Edit
                          </Link>
                        </Menu.Item>

                        <Menu.Item
                          key="delete"
                          onClick={() => {
                            handleDelete(record);
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
      </section>
    </div>
  );
};

export default Salary_Of_Teachers;
