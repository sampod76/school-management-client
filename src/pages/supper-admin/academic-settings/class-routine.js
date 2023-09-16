import React, { useState } from "react";
import {
  Space,
  Form,
  Select,
  Menu,
  Dropdown,
  Col,
  Row,
  Button,
  Typography,
  Input,
  Divider,
  Spin,
} from "antd";
import { Table } from "antd";
import Link from "next/link";
import { confirm_modal } from "@/utils/modalHook";
import { SearchOutlined } from "@ant-design/icons";
import {
  useDeleteClassRoutineMutation,
  useGetClassRoutineQuery,
  usePostClassRoutineMutation,
} from "@/redux/features/classRoutine/classRoutineApi";
import { useGetTeachersQuery } from "@/redux/features/teacher/teacherApi";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { useGetClassesQuery } from "@/redux/features/class/classApi";

import { toast } from "react-toastify";
import englishTimeToBangla from "@/utils/englishTimeToBangla";

const ClassTimeTable = () => {
  // Regular expression to match Bangla characters
  const banglaPattern = /^[ঀ-৾\s]*$/;
  const { Option } = Select;
  const [form] = Form.useForm();
  const [filteredData, setFilteredData] = useState(null);

  const {
    data: getAllClassRoutine,
    isLoading,
    isError,
    refetch,
  } = useGetClassRoutineQuery();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { data: teachers } = useGetTeachersQuery();
  const { data: subjects } = useGetBooksQuery();
  const { data: classes } = useGetClassesQuery();

  // delete mutations
  const [deleteClassRoutine] = useDeleteClassRoutineMutation();
  const handleDelete = (id) => {
    // Implement delete logic here
    confirm_modal(" delete Class Routine !").then(async (willDelete) => {
      if (willDelete.value) {
        deleteClassRoutine(id).then((props) => {
          if (props?.data?.success) {
            refetch();
            toast.success("Class Routine deleted successfully");
          }
        });
      }
    });
  };

  const [addClassRoutine] = usePostClassRoutineMutation();
  const handleAddClassRoutine = () => {
    form
      .validateFields()
      .then((values) => {
        addClassRoutine(values).then((props) => {
          if (props.data?.success) {
            toast.success("Class Routine  added successfully");
            refetch();
            form.resetFields();
          }
        });

        setIsFormVisible(false);
      })
      .catch((error) => {
        console.error("Validation error:", error);
      });
  };

  const columns = [
    {
      title: (
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>ক্লাস</span>
      ),
      width: 100,
      dataIndex: "class",
      filters: classes?.data.map((singleClass) => ({
        text: singleClass.className,
        value: singleClass.className,
      })),
      onFilter: (value, record) => record.class.className === value,
      render: (classData) => {
        return classData && classData?.className ? classData?.className : "N/A";
      },
    },
    {
      title: <span style={{ fontWeight: "bold", fontSize: "15px" }}>শাখা</span>,
      dataIndex: "section",
      width: 100,
    },
    {
      title: (
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>বিষয়</span>
      ),
      dataIndex: "subject",
      width: 200,
      render: (subjectData) => {
        return subjectData && subjectData?.bookName
          ? subjectData?.bookName
          : "N/A";
      },
    },

    {
      title: (
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>শুরুর সময়</span>
      ),
      dataIndex: "startTime",
      width: 100,
      render: (record) => <span>{englishTimeToBangla(record)}</span>,
    },
    {
      title: (
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>শেষ সময়</span>
      ),
      dataIndex: "endTime",
      width: 100,
      render: (record) => <span>{englishTimeToBangla(record)}</span>,
    },
    {
      title: (
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>শিক্ষক</span>
      ),
      dataIndex: "teacher",
      width: 200,
      render: (teacherData) => {
        return teacherData && teacherData?.teacher_info?.name_bangla
          ? teacherData?.teacher_info?.name_bangla
          : "N/A";
      },
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
                <Menu.Item key="view" onClick={() => {}}>
                  <Link href={`class-routine/edit/${record._id}`}>Edit</Link>
                </Menu.Item>
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    handleDelete(record._id);
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
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">ক্লাস রুটিন</h2>

      <div className="flex item-end justify-end mb-4">
        <Button
          onClick={() => setIsFormVisible(!isFormVisible)}
          type="primary"
          style={{ margin: 10, height: "40px" }}
          // className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded"
          // // className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl"
        >
          {isFormVisible ? "-" : "+"}
          <span className="text-lg">
            {isFormVisible ? "ফর্ম বন্ধ করুন" : "নতুন ক্লাস রুটিন যোগ করুন"}
          </span>
        </Button>
      </div>

      {isFormVisible && (
        <Form
          layout="vertical"
          form={form}
          name="addExamForm"
          onFinish={handleAddClassRoutine}
        >
          <h2 className="text-xl font-semibold mt-4 mb-2">
            নতুন ক্লাস রুটিন যোগ করুন
          </h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="শাখা"
                name="section"
                rules={[
                  {
                    required: true,
                    message: "শাখা নির্বাচন করুন",
                  },
                ]}
              >
                <Select placeholder="শাখা নির্বাচন করুন">
                  <Option value="A">শাখা A</Option>
                  <Option value="B">শাখা B</Option>
                  {/* Add other section options */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="class"
                label="ক্লাসের নাম"
                rules={[
                  {
                    required: true,
                    message: "ক্লাসের নাম আবশ্যক",
                  },
                ]}
              >
                <Select
                  placeholder="ক্লাস নির্বাচন করুন"
                  showSearch // Enable searching
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {classes?.data?.map((singleClass) => (
                    <Option key={singleClass._id} value={singleClass._id}>
                      {singleClass?.className}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="শুরুর সময়"
                name="startTime"
                rules={[
                  {
                    required: true,
                    message: "শুরুর সময় নির্বাচন করুন",
                  },
                ]}
              >
                <Input type="time" placeholder="শুরুর সময় নির্বাচন করুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                label="শেষ সময়"
                name="endTime"
                rules={[
                  {
                    required: true,
                    message: "শেষ সময় নির্বাচন করুন",
                  },
                ]}
              >
                <Input type="time" placeholder="শেষ সময় নির্বাচন করুন" />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="subject"
                label="বিষয়"
                rules={[
                  {
                    required: true,
                    message: "বিষয় আবশ্যক",
                  },
                ]}
              >
                <Select
                  placeholder="বিষয় নির্বাচন করুন"
                  showSearch // Enable searching
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {subjects?.data?.map((subject) => (
                    <Option key={subject._id} value={subject._id}>
                      {subject?.bookName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="teacher"
                label="শিক্ষক"
                rules={[
                  {
                    required: true,
                    message: "শিক্ষক আবশ্যক",
                  },
                ]}
              >
                <Select
                  placeholder="শিক্ষক নির্বাচন করুন"
                  showSearch // Enable searching
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {teachers?.data?.map((teacher) => (
                    <Option key={teacher._id} value={teacher._id}>
                      {teacher.teacher_info.name_bangla}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded"
            >
              সাবমিট
            </Button>
          </Form.Item>
        </Form>
      )}

      <Divider />
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin />
        </div>
      ) : (
        <Table
          scroll={{
            x: 1000,
          }}
          dataSource={getAllClassRoutine?.data}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      )}

      {/* ... Existing code ... */}
    </div>
  );
};

export default ClassTimeTable;
