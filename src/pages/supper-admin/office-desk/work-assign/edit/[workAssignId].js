import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button, Select } from "antd";
import { useRouter } from "next/router";
import { Success_model, Error_model } from "@/utils/modalHook"; // Import your modal functions
import { AuthContext } from "@/components/Auth/AuthProvider";

const { Option } = Select;

const EditWorkAssign = () => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const id = router.query.workAssignId;

  const [form] = Form.useForm();

  const [status, setStatus] = useState("active");

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/work_schedule/${id}`)
        .then((response) => response.json())
        .then((data) => {
          form.setFieldsValue({
            work_name: data.data.work_name,
            work_details: data.data.work_details,
            work_for: data.data.work_for,
            assign_date: data.data.assign_date,
            complete_date: data.data.complete_date,
            status: data.data.status,
          });
          setStatus(data.data.status);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id, form]);

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/work_schedule/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        Success_model({ message: "Update successful" });
        console.log("Update successful");
      } else {
        Error_model({ message: "Update failed" });
        console.error("Update failed");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="mx-6 my-4">
      <h3 className="text-2xl font-bold mb-4">কাজ সম্পাদনা</h3>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ status }}
      >
        {/* Form fields */}
        <Form.Item
          label="কাজের নাম"
          name="work_name"
          rules={[{ required: true, message: "কাজের নাম দিতে হবে" }]}
        >
          <Input placeholder="কাজের নাম" />
        </Form.Item>

        <Form.Item
          label="কাজের বিস্তারিত"
          name="work_details"
          rules={[{ required: true, message: "কাজের বিস্তারিত দিতে হবে" }]}
        >
          <Input.TextArea rows={4} placeholder="কাজের বিস্তারিত" />
        </Form.Item>

        <Form.Item
          label="যার জন্য"
          name="work_for"
          rules={[{ required: true, message: "যার জন্য দিতে হবে" }]}
        >
          <Input placeholder="যার জন্য" />
        </Form.Item>

        <Form.Item
          label="এসাইন করার সময়"
          name="assign_date"
          rules={[{ required: true, message: "এসাইন করার সময় দিতে হবে" }]}
        >
          <Input type="date" placeholder="এসাইন করার সময়" />
        </Form.Item>

        <Form.Item
          label="জমা দেওয়ার সময়"
          name="complete_date"
          rules={[{ required: true, message: "জমা দেওয়ার সময় দিতে হবে" }]}
        >
          <Input type="date" placeholder="জমা দেওয়ার সময়" />
        </Form.Item>

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

        {/* Submit button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditWorkAssign;
