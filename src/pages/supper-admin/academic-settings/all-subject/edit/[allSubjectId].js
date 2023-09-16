import React, { useState, useEffect, useContext } from "react";
// import { useParams, useHistory } from "react-router-dom"; // Assuming you're using React Router for navigation
import { Form, Input, Select, Button, message, Spin, Row, Col } from "antd";

import { useRouter } from "next/router";
import {
  UploadOutlined,
  InboxOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import {
  useGetSingleBookQuery,
  usePatchBookMutation,
} from "@/redux/features/book/bookApi";
import { toast } from "react-toastify";
import { useGetClassesQuery } from "@/redux/features/class/classApi";
import { Success_model } from "@/utils/modalHook";
import { AuthContext } from "@/components/Auth/AuthProvider";

const { Option } = Select;
// Regular expression to match Bangla characters
const banglaPattern = /^[ঀ-৾\s]*$/;

const EditSubject = ({ initialValues }) => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const [form] = Form.useForm();

  const { allSubjectId } = router.query; // Assuming you have a route parameter for subjectId
  //   const history = useHistory();

  const {
    data: subject,
    refetch,
    isLoading,
  } = useGetSingleBookQuery(allSubjectId, {
    skip: !allSubjectId,
  });

  const { data: getClasses } = useGetClassesQuery();

  //rtk query  for  update
  const [patchBook, { isSuccess }] = usePatchBookMutation();

  // Set the form values when subject data is available
  useEffect(() => {
    if (subject) {
      form.setFieldsValue({
        bookName: subject?.data?.bookName,
        bookCode: subject?.data?.bookCode,
        class: subject?.data?.class,
        status: subject?.data?.status,
      });
    }
  }, [subject, form]);

  // Function to handle form submission
  const onFinish = async (values) => {
    try {
      await patchBook({
        id: allSubjectId,
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
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Form.Item name="bookName" label="নাম">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Form.Item
              name="bookCode"
              label="কোড"
              rules={[
                {
                  pattern: banglaPattern,
                  message: "Please enter only Bangla characters",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6}>
            <Form.Item name="class" label="ক্লাস">
              <Select placeholder="ক্লাস">
                {getClasses?.data?.map((option) => (
                  <Option key={option._id} value={option._id}>
                    {option.className}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={6}>
            <Form.Item name="status" label="অবস্থা">
              <Select>
                <Select.Option value="active">Active</Select.Option>
                <Select.Option value="inactive">Inactive</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Subject
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditSubject;
