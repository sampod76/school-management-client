import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Row,
  Col,
  Select,
  Form,
  Space,
  Spin,
  Divider,
  Menu,
  Dropdown,
} from "antd";

import { useGetTeachersQuery } from "@/redux/features/teacher/teacherApi";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import {
  useAddExamMutation,
  useDeleteExamMutation,
  useGetAllExamQuery,
} from "@/redux/features/exam/examApi";
import Link from "next/link";
import { toast } from "react-toastify";
import { useGetClassesQuery } from "@/redux/features/class/classApi";
import { confirm_modal } from "@/utils/modalHook";
import englishTimeToBangla from "@/utils/englishTimeToBangla";
import englishDataToBangle from "@/utils/englishDataToBangle";

const { Search } = Input;
const { Option } = Select;

const ExamPage = () => {
  // Regular expression to match Bangla characters
  const banglaPattern = /^[ঀ-৾\s]*$/;
  const {
    data: getAllExam,
    isLoading,
    isError,
    refetch,
  } = useGetAllExamQuery();

  const { data: teachers } = useGetTeachersQuery();
  const { data: subjects } = useGetBooksQuery();
  const { data: classes } = useGetClassesQuery();

  const [form] = Form.useForm();
  const [isFormVisible, setIsFormVisible] = useState(false);

  // delete mutations
  const [deleteExam] = useDeleteExamMutation();
  const handleDelete = (id) => {
    // Implement delete logic here
    confirm_modal(" delete Book !").then(async (willDelete) => {
      if (willDelete.value) {
        deleteExam(id).then((props) => {
          if (props?.data?.success) {
            refetch();
            toast.success("Exam deleted successfully");
          }
        });
      }
    });
  };
  const [addExam] = useAddExamMutation();
  const handleAddExam = () => {
    form
      .validateFields()
      .then((values) => {
        addExam(values).then((props) => {
          if (props.data?.success) {
            toast.success("Exam  added successfully");
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
      title: "পরীক্ষার নাম",
      dataIndex: "examName",
      render: (text) => <span style={{ fontWeight: "bold" }}>{text}</span>,
    },
    {
      title: "ক্লাসের নাম",
      dataIndex: "className",
      render: (classData) => {
        return classData && classData?.className ? classData?.className : "N/A";
      },
    },
    {
      title: "তারিখ",
      dataIndex: "date",
      render: (record) => <span>{englishDataToBangle(record)}</span>,
    },
    {
      title: "সময়",
      dataIndex: "time",
      render: (record) => <span>{englishTimeToBangla(record)}</span>,
    },
    {
      title: "বিষয়",
      dataIndex: "subject",
      render: (subjectData) => {
        return subjectData && subjectData?.bookName
          ? subjectData?.bookName
          : "N/A";
      },
    },
    {
      title: "শিক্ষক",
      dataIndex: "teacher",
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
                {/* <Menu.Item
                  key="view"
                  onClick={() => {
                    // Handle view logic here
                  }}
                >
                  <Link href={"#"}>View</Link>
                </Menu.Item> */}
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    // Handle edit logic here
                  }}
                >
                  <Link href={`exam/edit/${record._id}`}>Edit</Link>
                </Menu.Item>

                <Menu.Item
                  key="delete"
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
      <h2 className="text-xl font-semibold mb-4">পরীক্ষা</h2>

      <div className="flex item-end justify-end mb-4">
        <Button
          type="primary"
          style={{ margin: 10, height: "40px" }}
          onClick={() => setIsFormVisible(!isFormVisible)}
          // className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl"
        >
          {isFormVisible ? "-" : "+"}
          <span className="text-lg">
            {isFormVisible ? "ফর্ম বন্ধ করুন" : "নতুন পরীক্ষা যোগ করুন"}
          </span>
        </Button>
      </div>

      {isFormVisible && (
        <Form
          layout="vertical"
          form={form}
          name="addExamForm"
          onFinish={handleAddExam}
        >
          <h2 className="text-xl font-semibold mt-4 mb-2">
            নতুন পরীক্ষা যোগ করুন
          </h2>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="examName"
                label="পরীক্ষার নাম"
                rules={[
                  {
                    required: true,
                    message: "পরীক্ষার নাম আবশ্যক",
                  },
                  {
                    pattern: banglaPattern,
                    message: "Please enter only Bangla characters",
                  },
                ]}
              >
                <Input placeholder="পরীক্ষার নাম" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="className"
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
                name="date"
                label="তারিখ"
                rules={[
                  {
                    required: true,
                    message: "তারিখ আবশ্যক",
                  },
                ]}
              >
                <Input type="date" placeholder="তারিখ নির্বাচন করুন" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Form.Item
                name="time"
                label="সময়"
                rules={[
                  {
                    required: true,
                    message: "সময় আবশ্যক",
                  },
                ]}
              >
                <Input type="time" placeholder="সময়" />
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
          dataSource={getAllExam?.data}
          columns={columns}
          pagination={{ pageSize: 10 }}
        />
      )}
    </div>
  );
};

export default ExamPage;
