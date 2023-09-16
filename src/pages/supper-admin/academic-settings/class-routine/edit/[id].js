import { Button, Col, Form, Input, Row, Select, Space, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Card, DatePicker } from "antd";
import { AuthContext } from "@/components/Auth/AuthProvider";
import { useRouter } from "next/router";
import {
  useGetClassRoutineQuery,
  useGetSingleClassRoutineQuery,
  usePatchClassRoutineMutation,
} from "@/redux/features/classRoutine/classRoutineApi";
import { useGetTeachersQuery } from "@/redux/features/teacher/teacherApi";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { useGetClassesQuery } from "@/redux/features/class/classApi";
import { Success_model } from "@/utils/modalHook";

const EditClassRoutine = ({ initialValues }) => {
  const { Option } = Select;

  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const [form] = Form.useForm();

  const { id } = router.query;
  console.log(id);

  const {
    data: getAllClassRoutine,
    isLoading,
    isError,
    refetch,
  } = useGetClassRoutineQuery();
  const { data: classRoutine } = useGetSingleClassRoutineQuery(id, {
    skip: !id,
  });

  const { data: teachers } = useGetTeachersQuery();
  const { data: subjects } = useGetBooksQuery();
  const { data: classes } = useGetClassesQuery();

  // Set the form values when subject data is available
  useEffect(() => {
    if (classRoutine) {
      form.setFieldsValue({
        class: classRoutine?.data?.class?._id,
        section: classRoutine?.data?.section,
        startTime: classRoutine?.data?.startTime,
        endTime: classRoutine?.data?.endTime,
        subject: classRoutine?.data?.subject?._id,
        teacher: classRoutine?.data?.teacher?._id,
      });
    }
  }, [classRoutine, form]);

  //rtk query  for  update
  const [updateClassRoutine, { isSuccess }] = usePatchClassRoutineMutation();
  const handleUpdateClassRoutine = async (values) => {
    console.log(values);
    try {
      await updateClassRoutine({
        id,
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

  return (
    <div className="m-4">
      <div className="lg:w-[100%]  ">
        <Form
          layout="vertical"
          form={form}
          name="addExamForm"
          onFinish={handleUpdateClassRoutine}
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
      </div>
      <div className="lg:w-[100%] bg-white w-full">
        <div className="text-gray-500 w-full mt-2">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default EditClassRoutine;
