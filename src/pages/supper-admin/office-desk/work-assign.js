import React, { useContext, useState } from "react";
import { Form, Input, Button, Row, Col, DatePicker, Spin } from "antd";
import WorkAssignTable from "@/components/super-admin-dashboard/office-desk/work-assign/work-assign-table";
import { useAssignWorkMutation } from "@/redux/features/work-assign/workAssignAPI";
import { toast } from "react-toastify";
import { AuthContext } from "@/components/Auth/AuthProvider";

const WorkAssign = () => {
  const { Error_model } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [formVisible, setFormVisible] = useState(false);


  // get query

  const [assignWork, { data, isLoading, error }] = useAssignWorkMutation();
  const handleSubmit = async () => {
    try {
      const formData = await form.validateFields();
      console.log(formData, "ত");

      assignWork({ ...formData, status:"active" }).then((res) => {
        if (res.data?.success) {
          toast.success("Work added successfully");
          form.resetFields();
        } else {
          Error_model({ message: res?.error?.data?.message });
        }
        console.log(res);
      });
      // Your code to perform submission logic or API call
    } catch (error) {
      console.error("Error:", error);
      Error_model({ message: error?.message, error });
    }
  };
  const handleAddButtonClick = () => {
    setFormVisible(!formVisible);
  };

  if (error) {
    console.log(error);
    Error_model({ message: error?.message, error });
  }

  return (
    <div>
      <h3 className="text-2xl font-bold m-4">নতুন কাজ</h3>

      <div className="m-6">
        <div className=" flex items-center justify-end mb-4">
          <Button type="primary" onClick={handleAddButtonClick}>
            {formVisible ? "Cancel" : "কাজ যোগ করুন"} {/* Toggle button text */}
          </Button>
        </div>

        {formVisible && (
          <div>
            <Form
              form={form}
              layout="vertical"
              style={{
                padding: "0.75rem",
                borderRadius: "0.5rem",
                borderWidth: "2px",
                marginLeft: "0.79rem",
                marginRight: "0.79rem",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item
                    label="কাজের নাম"
                    name="work_name"
                    rules={[{ required: true, message: "কাজের নাম দিতে হবে" }]}
                  >
                    <Input placeholder="কাজের নাম" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item
                    label="যার জন্য"
                    name="work_for"
                    rules={[{ required: true, message: "যার জন্য দিতে হবে" }]}
                  >
                    <Input placeholder="যার জন্য" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item
                    label="এসাইন করার সময়"
                    name="assign_date"
                    rules={[
                      { required: true, message: "এসাইন করার সময় দিতে হবে" },
                    ]}
                  >
                    <Input type="date" placeholder="এসাইন করার সময়" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item
                    label="জমা দেওয়ার সময়"
                    name="complete_date"
                    rules={[
                      { required: true, message: "জমা দেওয়ার সময় দিতে হবে" },
                    ]}
                  >
                    <Input type="date" placeholder="জমা দেওয়ার সময়" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="কাজের বিস্তারিত"
                name="work_details"
                rules={[
                  { required: true, message: "কাজের বিস্তারিত দিতে হবে" },
                ]}
              >
                <Input.TextArea rows={4} placeholder="কাজের বিস্তারিত" />
              </Form.Item>

              <Form.Item>
                {isLoading ? (
                  <Spin />
                ) : (
                  <Button
                    loading={submitting}
                    onClick={handleSubmit}
                    type="primary"
                    className="w-32 h-12 mt-10"
                  >
                    সাবমিট
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        )}
      </div>

      {/* Table start  */}
      <WorkAssignTable />
    </div>
  );
};

export default WorkAssign;
