import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  useGetSingleMeetingQuery,
  useUpdateMeetingMutation,
} from "@/redux/features/meeting/meetingApi";

const { Option } = Select;

const EditOrganizationMeeting = ({ initialValues, onSave }) => {
  const participants = [
    "শিক্ষার্থী",
    "শিক্ষক",
    "অভিভাবক",
    "কোষাধ্যক্ষ",
    "ম্যানেজিং কমিটি",
  ];

  const options = participants.map((name) => ({
    label: name,
    value: name,
  }));
  const [form] = Form.useForm();
  const router = useRouter();
  const { meetingId } = router.query;
  const { data: meetingData, refetch } = useGetSingleMeetingQuery(meetingId, {
    skip: !meetingId,
  });

  //rtk query  for  update
  const [UpdateMeeting, { isSuccess }] = useUpdateMeetingMutation();

  useEffect(() => {
    if (meetingData) {
      form.setFieldsValue({
        meeting_subject: meetingData.data.meeting_subject,
        meeting_date: meetingData.data.meeting_date,
        meeting_place: meetingData.data.meeting_place,
        participants: meetingData.data.participants,
        details: meetingData.data.details,
      });
    }
  }, [meetingData, form]);

  const handleSubmit = (values) => {
    console.log(values, "kkkkkkkkkkk");

    try {
      UpdateMeeting({
        id: meetingId,
        data: { ...values },
      }).then((props) => {
        if (props.data?.success) {
          refetch();
          toast.success("মিটিং আপডেট সফলভাবে সম্পন্ন হয়েছে");

          form.setFieldsValue(initialValues);
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("একটি অপ্রত্যাশিত সমস্যা ঘটেছে");
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold m-4">প্রতিষ্ঠানের মিটিং</h3>
      <div className="m-6">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          className=""
        >
          <Form.Item
            label="মিটিং এর বিষয়"
            name="meeting_subject"
            rules={[
              { required: true, message: "অনুগ্রহ করে মিটিং এর বিষয় লিখুন" },
            ]}
          >
            <Input placeholder="মিটিং এর বিষয়" />
          </Form.Item>

          <Form.Item
            label="মিটিং এর তারিখ"
            name="meeting_date"
            rules={[
              { required: true, message: "অনুগ্রহ করে মিটিং এর তারিখ লিখুন" },
            ]}
          >
            <Input type="date" placeholder="জমা" />
          </Form.Item>
          <Form.Item
            label="মিটিং এর স্থান"
            name="meeting_place"
            rules={[
              {
                required: true,
                message: "অনুগ্রহ করে মিটিং এর স্থান লিখুন",
              },
            ]}
          >
            <Input placeholder="মিটিং এর স্থান" />
          </Form.Item>

          <Form.Item
            label="অংশগ্রহণকারী"
            name="participants"
            rules={[
              {
                required: true,
                message: "অনুগ্রহ করে অংশগ্রহণকারী নির্বাচন করুন",
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="অংশগ্রহণকারী সদস্যবৃন্দ"
              allowClear
            >
              {options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="বিস্তারিত"
            name="details"
            rules={[{ required: true, message: "অনুগ্রহ করে বিস্তারিত লিখুন" }]}
          >
            <Input.TextArea rows={4} placeholder="বিস্তারিত" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className=" h-12 mt-2 mb-4"
            >
              মিটিং পরিবর্তন করুন
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditOrganizationMeeting;
