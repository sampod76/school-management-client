import React, { useEffect, useContext } from "react";
// import { useParams, useHistory } from "react-router-dom"; // Assuming you're using React Router for navigation
import { Form, Input, Select, Button, message, Spin, Row, Col } from "antd";

import { useRouter } from "next/router";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { useGetClassesQuery } from "@/redux/features/class/classApi";
import { Success_model } from "@/utils/modalHook";
import { AuthContext } from "@/components/Auth/AuthProvider";
import {
  useGetAllExamQuery,
  useGetSingleExamQuery,
  useUpdateExamMutation,
} from "@/redux/features/exam/examApi";
import { useGetTeachersQuery } from "@/redux/features/teacher/teacherApi";

const { Option } = Select;
// Regular expression to match Bangla characters
const banglaPattern = /^[ঀ-৾\s]*$/;

const EditSubject = ({ initialValues }) => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const [form] = Form.useForm();

  const { examId } = router.query; // Assuming you have a route parameter for subjectId
  //   const history = useHistory();

  const {
    data: getAllExam,
    isLoading,
    isError,
    refetch,
  } = useGetAllExamQuery();
  const { data: book } = useGetSingleExamQuery(examId, {
    skip: !examId,
  });

  const { data: teachers } = useGetTeachersQuery();
  const { data: subjects } = useGetBooksQuery();
  const { data: classes } = useGetClassesQuery();

  //rtk query  for  update
  const [updateExam, { isSuccess }] = useUpdateExamMutation();

  // Set the form values when subject data is available
  useEffect(() => {
    if (book) {
      form.setFieldsValue({
        examName: book?.data?.examName,
        className: book?.data?.className?._id,
        date: book?.data?.date,
        time: book?.data?.time,
        subject: book?.data?.subject?._id,
        teacher: book?.data?.teacher?._id,
      });
    }
  }, [book, form]);

  // Function to handle form submission
  const onFinish = async (values) => {
    try {
      await updateExam({
        id: examId,
        data: { ...values },
      }).then((props) => {
        if (props.data?.success) {
          refetch();
          Success_model({ message: " আপডেট সম্পন্ন হয়েছে" });

          // reset form as empty after update is successful
          form.setFieldsValue(initialValues);
          history.back();
        }
      });
    } catch (error) {
      Error_model({ message: error?.message });
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  return (
    <div className="m-4">
      <h2>Edit Subject</h2>

      <div className="my-4">
        <Button
          onClick={() => history.back()}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<ArrowLeftOutlined />}
        >
          পূর্বের পেইজ
        </Button>
      </div>
      <Form
        layout="vertical"
        form={form}
        name="addExamForm"
        onFinish={onFinish}
        initialValues={
          {
            // Set initial form values here
          }
        }
      >
        <h2 className="text-xl font-semibold mt-4 mb-2">
          নতুন পরীক্ষা যোগ করুন
        </h2>
        <Row gutter={24}>
          <Col span={12}>
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
          <Col span={12}>
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
        </Row>
        <Row gutter={24}>
          <Col span={12}>
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
          <Col span={12}>
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
        </Row>
        <Row gutter={24}>
          <Col span={12}>
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
          <Col span={12}>
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
    </div>
  );
};

export default EditSubject;
