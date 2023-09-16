import React, { useState } from "react";
import {
  Button,
  Tabs,
  Form,
  Input,
  Checkbox,
  Space,
  Dropdown,
  Menu,
  Row,
  Col,
  Select,
} from "antd";

import ClosedAssignment from "@/components/super-admin-dashboard/academic-setting/online-assignment/ClosedAssignment";
import UpcomingAssignment from "@/components/super-admin-dashboard/academic-setting/online-assignment/UpcomingAssignment";
import {
  useGetOnlineAssignmentsQuery,
  usePostOnlineAssignmentsMutation,
} from "@/redux/features/onlineAssignments/onlineAssignmentsApi";
import { toast } from "react-toastify";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
const { Option } = Select;

const OnlineAssignment = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const status = "active";

  //Submit the data
  const [assignment, { data, error }] = usePostOnlineAssignmentsMutation();

  //Get All The Data
  const {
    data: onlineAssignments,
    isLoading,
    isError,
    refetch,
  } = useGetOnlineAssignmentsQuery();
  //Get All Book Data
  const { data: AllSubjects } = useGetBooksQuery();

  const handleAddButtonClick = () => {
    setFormVisible(!formVisible);
  };
  const handleSubmit = async () => {
    try {
      const formData = await form.validateFields();

      assignment({ ...formData, status }).then((props) => {
        if (props.data?.success) {
          toast.success("Online Assignment added successfully");
          form.resetFields();
          refetch();
        }
      });
      // Your code to perform submission logic or API call
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const items = [
    {
      key: "1",
      label: (
        <span style={{ fontSize: "20px", marginLeft: "10px" }}>
          Upcoming Assignment
        </span>
      ),
      children: (
        <UpcomingAssignment
          data={onlineAssignments?.data}
          refetch={refetch}
        ></UpcomingAssignment>
      ),
    },

    {
      key: "2",
      label: <span style={{ fontSize: "20px" }}>Closed Assignment</span>,
      children: (
        <ClosedAssignment
          data={onlineAssignments?.data}
          refetch={refetch}
        ></ClosedAssignment>
      ),
    },
  ];
  const onChange = (key) => {};
  return (
    <div className="mx-4">
      <div className="flex items-center justify-end my-6 me-4">
        <Button type="primary" onClick={handleAddButtonClick}>
          {formVisible ? "hidden" : "এসাইনমেন্ট যোগ করুন"}{" "}
          {/* Toggle button text */}
        </Button>
      </div>
      {formVisible && (
        <Form layout="vertical" form={form}>
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
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      )}

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default OnlineAssignment;
