import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Tabs,
  Form,
  Input,
  Checkbox,
  Space,
  Row,
  Col,
  Select,
} from "antd";
import {
  UploadOutlined,
  InboxOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import {
  useGetOnlineAssignmentsQuery,
  useGetSingleOnlineAssignmentsQuery,
  useUpdateOnlineAssignmentMutation,
} from "@/redux/features/onlineAssignments/onlineAssignmentsApi";
import { useRouter } from "next/router";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { AuthContext } from "@/components/Auth/AuthProvider";
import DeshbordLoading from "@/components/loader/deshbordLoading";

import { Success_model } from "@/utils/modalHook";
const { Option } = Select;

const EditOnlineAssignment = () => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const id = router.query.onlineAssignmentId;

  const [submitting, setSubmitting] = useState(false);

  //Get All The Data
  const {
    data: AllAssignments,

    isError,
    refetch,
  } = useGetOnlineAssignmentsQuery();

  //Get All Book Data
  const { data: AllSubjects } = useGetBooksQuery();

  const { data: onlineAssignment, isLoading } =
    useGetSingleOnlineAssignmentsQuery(id, {
      skip: !id,
    });

  const [updateOnlineAssignment, { error, loading }] =
    useUpdateOnlineAssignmentMutation();

  const onFinish = async (values) => {
    // update event and handle success and error

    try {
      await updateOnlineAssignment({
        id,
        data: { ...values },
      }).then((props) => {
        if (props.data?.success) {
          Success_model({ message: " আপডেট সম্পন্ন হয়েছে" });
          refetch();
          history.back();
        }
      });
    } catch (error) {
      Error_model({ message: error?.message });
    }
  };
  if (isLoading) {
    return <DeshbordLoading />;
  }
  if (error) {
    Error_model({ message: error?.message, error: error });
  }

  return (
    <div className="mx-4">
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
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          subject: onlineAssignment?.data?.subject || "", // Replace with the appropriate field from your API response
          dateFrom: onlineAssignment?.data?.dateFrom || "",
          startTime: onlineAssignment?.data?.startTime || "",
          duration: onlineAssignment?.data?.duration || "",
          roomNo: onlineAssignment?.data?.roomNo || "",
          markMin: onlineAssignment?.data?.markMin || "",
          markMax: onlineAssignment?.data?.markMax || "",
          exam: onlineAssignment?.data?.exam || "",
          quiz: onlineAssignment?.data?.quiz || "",
          question: onlineAssignment?.data?.question || "",
          attempts: onlineAssignment?.data?.attempts || "",
          examFrom: onlineAssignment?.data?.examFrom || "",
          examTo: onlineAssignment?.data?.examTo || "",
          examPublished: onlineAssignment?.data?.examPublished || false,
          resultPublished: onlineAssignment?.data?.resultPublished || false,
          description: onlineAssignment?.data?.description || "",
        }}
      >
        <Row gutter={[16, 16]}>
          {/* First Set of Columns */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="বিষয়"
              name="subject"
              rules={[
                {
                  required: true,
                  message: "বিষয় প্রদান করুন",
                },
              ]}
            >
              <Select>
                {AllSubjects?.data?.map((subject) => (
                  <Option key={subject._id} value={subject._id}>
                    {subject.bookName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="তারিখ থেকে"
              name="dateFrom"
              rules={[
                {
                  required: true,
                  message: "তারিখ প্রদান করুন",
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="সময় শুরু"
              name="startTime"
              rules={[
                {
                  required: true,
                  message: "সময় প্রদান করুন",
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="সময়কাল"
              name="duration"
              rules={[
                {
                  required: true,
                  message: "সময়কাল প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="রুম নম্বর"
              name="roomNo"
              rules={[
                {
                  required: true,
                  message: "রুম নম্বর প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="মার্ক সর্বনিম্ন"
              name="markMin"
              rules={[
                {
                  required: true,
                  message: "মার্ক সর্বনিম্ন প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="মার্ক সর্বোচ্চ"
              name="markMax"
              rules={[
                {
                  required: true,
                  message: "মার্ক সর্বোচ্চ প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          {/* Second Set of Columns */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="পরীক্ষা"
              name="exam"
              rules={[
                {
                  required: true,
                  message: "পরীক্ষা প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="কুইজ"
              name="quiz"
              rules={[
                {
                  required: true,
                  message: "কুইজ প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="প্রশ্ন"
              name="question"
              rules={[
                {
                  required: true,
                  message: "প্রশ্ন প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="চেষ্টা"
              name="attempts"
              rules={[
                {
                  required: true,
                  message: "চেষ্টা প্রদান করুন",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="পরীক্ষা শুরু"
              name="examFrom"
              rules={[
                {
                  required: true,
                  message: "পরীক্ষা শুরু প্রদান করুন",
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="পরীক্ষা শেষ"
              name="examTo"
              rules={[
                {
                  required: true,
                  message: "পরীক্ষা শেষ প্রদান করুন",
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="পরীক্ষা প্রকাশিত"
              name="examPublished"
              valuePropName="checked"
            >
              <Checkbox>পরীক্ষা প্রকাশিত</Checkbox>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6}>
            <Form.Item
              label="নতুন ফলাফল"
              name="resultPublished"
              valuePropName="checked"
            >
              <Checkbox>নতুন ফলাফল</Checkbox>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="বর্ণনা" name="description">
          <Input.TextArea />
        </Form.Item>

        {/* Action Buttons */}
        <Form.Item>
          <Space size="middle">
            <Button
              loading={submitting}
              // onClick={handleSubmit}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditOnlineAssignment;
