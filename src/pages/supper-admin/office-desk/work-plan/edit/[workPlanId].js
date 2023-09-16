import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

import { useRouter } from "next/router";
import {
  useGetSingleWorkPlanQuery,
  useUpdateWorkPlanMutation,
} from "@/redux/features/workPlan/workPlan";
import { toast } from "react-toastify";

const { Option } = Select;

const EditWorkPlan = ({ initialValues, onSave }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { workPlanId } = router.query;
  // get query
  const {
    data: workPlanData,
    refetch,
    isLoading,
  } = useGetSingleWorkPlanQuery(workPlanId, {
    skip: !workPlanId,
  });

  //rtk query  for  update
  const [updateWorkPlan, { isSuccess }] = useUpdateWorkPlanMutation();

  useEffect(() => {
    if (workPlanData) {
      form.setFieldsValue({
        work_plan_name: workPlanData.data.work_plan_name,
        details: workPlanData.data.details,
        duration_date: workPlanData.data.duration_date,
        plan_date: workPlanData.data.plan_date,
        // status: workPlanData.data.status,
      });
    }
  }, [workPlanData, form]);

  const handleSubmit = (values) => {
    // update event and handle success and error

    try {
      updateWorkPlan({
        id: workPlanId,
        data: { ...values },
      }).then((props) => {
        if (props.data?.success) {
          refetch();
          toast.success("Work Plan updated successfully");

          // reset form as empty after update is successful
          form.setFieldsValue(initialValues);
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold m-4">কর্মপরিকল্পনা সম্পাদনা</h3>
      <div className="m-6">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          className=""
        >
          <Form.Item
            label="কর্ম-পরিকল্পনার নাম"
            name="work_plan_name"
            rules={[
              { required: true, message: "কর্ম-পরিকল্পনার নাম দিতে হবে" },
            ]}
          >
            <Input placeholder="কর্ম-পরিকল্পনার নাম" />
          </Form.Item>

          <Form.Item
            label="বিস্তারিত"
            name="details"
            rules={[{ required: true, message: "বিস্তারিত দিতে হবে" }]}
          >
            <Input.TextArea rows={4} placeholder="বিস্তারিত" />
          </Form.Item>

          <Form.Item
            label="পরিকল্পনার তারিখ"
            name="plan_date"
            rules={[{ required: true, message: "জমা দিতে হবে" }]}
          >
            <Input type="date" placeholder="জমা" />
          </Form.Item>
          <Form.Item
            label="পরিকল্পনার মেয়াদ"
            name="duration_date"
            rules={[{ required: true, message: "সময়কাল দিতে হবে" }]}
          >
            <Input type="date" placeholder="সময়কাল" />
          </Form.Item>

          {/* <Form.Item
            label="স্ট্যাটাস"
            name="status"
            rules={[{ required: true, message: "স্ট্যাটাস দিতে হবে" }]}
          >
            <Select placeholder="স্ট্যাটাস নির্বাচন করুন">
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className=" h-12 mt-2 mb-4"
            >
              সম্পাদনা সংরক্ষণ করুন
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditWorkPlan;
