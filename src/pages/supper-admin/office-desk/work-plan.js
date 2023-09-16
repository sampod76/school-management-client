import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import WorkPlanTable from "@/components/super-admin-dashboard/office-desk/work-plan/work-plan-table";
import { useWorkPlanMutation } from "@/redux/features/workPlan/workPlan";
import { toast } from "react-toastify";

const { Option } = Select;
const WorkPlan = () => {
  const [form] = Form.useForm();
  const [formVisible, setFormVisible] = useState(false); // State to manage form visibility

  const [workPlan, { isLoading, data }] = useWorkPlanMutation();

  const handleSubmit = (values) => {
    workPlan(values).then((props) => {
      if (props.data?.success) {
        toast.success("Work Plan added successfully");
        form.resetFields();
      }
    });
    // Add your logic to submit the form data here
  };
  const handleAddButtonClick = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="m-6">
      <h3 className="text-2xl font-bold m-4">নতুন কর্মপরিকল্পনা</h3>
      <div>
        <div className=" flex items-center justify-end mb-4">
          <Button type="primary" onClick={handleAddButtonClick}>
            {formVisible ? "hidden" : "কর্ম-পরিকল্পনার যোগ করুন"}{" "}
            {/* Toggle button text */}
          </Button>
        </div>

        {formVisible && (
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              borderWidth: "2px",
              marginLeft: "0.79rem",
              marginRight: "0.79rem",
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Form.Item
                  label="কর্ম-পরিকল্পনার নাম"
                  name="work_plan_name"
                  rules={[
                    { required: true, message: "কর্ম-পরিকল্পনার নাম দিতে হবে" },
                  ]}
                >
                  <Input placeholder="কর্ম-পরিকল্পনার নাম" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={8}>
                <Form.Item
                  label="পরিকল্পনার তারিখ"
                  name="plan_date"
                  rules={[
                    { required: true, message: "জমা দিতে হবে", type: "date" },
                  ]}
                >
                  <Input type="date" placeholder="পরিকল্পনার তারিখ" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Form.Item
                  label="পরিকল্পনার মেয়াদ"
                  name="duration_date"
                  rules={[{ required: true, message: "সময়কাল দিতে হবে" }]}
                >
                  <Input type="date" placeholder="পরিকল্পনার মেয়াদ" />
                </Form.Item>
              </Col>
              {/* <Col xs={24} sm={12} md={8} lg={6}>
                <Form.Item
                  label="স্ট্যাটাস"
                  name="status"
                  rules={[{ required: true, message: "স্ট্যাটাস দিতে হবে" }]}
                >
                  <Select placeholder="স্ট্যাটাস নির্বাচন করুন">
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>
              </Col> */}
            </Row>

            <Form.Item
              label="বিস্তারিত"
              name="details"
              rules={[{ required: true, message: "বিস্তারিত দিতে হবে" }]}
            >
              <Input.TextArea rows={4} placeholder="বিস্তারিত" />
            </Form.Item>

            <Form.Item
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "150px",
                }}
              >
                সাবমিট
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>

      <WorkPlanTable />
    </div>
  );
};

export default WorkPlan;
