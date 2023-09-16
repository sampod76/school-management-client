import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Row,
  Col,
  Checkbox,
  Cascader,
} from "antd";
import WorkPlanTable from "@/components/super-admin-dashboard/office-desk/work-plan/work-plan-table";
import { useWorkPlanMutation } from "@/redux/features/workPlan/workPlan";
import { toast } from "react-toastify";
import { useAddMeetingMutation } from "@/redux/features/meeting/meetingApi";
import MeetingTable from "@/components/super-admin-dashboard/office-desk/organization-meeting/organization-meeting-table";

const { Option } = Select;
const WorkPlan = () => {
  const [form] = Form.useForm();
  const [formVisible, setFormVisible] = useState(false); // State to manage form visibility

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

  // const [workPlan, { isLoading, data }] = useWorkPlanMutation();
  const [AddMeeting, { data, isLoading }] = useAddMeetingMutation();

  const handleSubmit = (values) => {
    console.log(values, "hhh");
    AddMeeting(values).then((props) => {
      if (props.data?.success) {
        toast.success("মিটিং সফলভাবে যোগ করা হয়েছে।");
        form.resetFields();
      }
    });
  };
  const handleAddButtonClick = () => {
    setFormVisible(!formVisible);
  };

  const handleCascaderChange = (value) => {
    // setMeetingData({ ...meetingData, participant: value });

    console.log(value, "try");
  };

  return (
    <div className="m-6">
      <h3 className="text-2xl font-bold m-4">প্রতিষ্ঠানের মিটিং</h3>
      <div>
        <div className=" flex items-center justify-end mb-4">
          <Button type="primary" onClick={handleAddButtonClick}>
            {formVisible ? "গোপন" : "মিটিং যোগ করুন"} {/* Toggle button text */}
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
              <Col xs={24} sm={12} md={8} lg={6}>
                <Form.Item
                  label="মিটিং এর বিষয়"
                  name="meeting_subject"
                  rules={[
                    {
                      required: true,
                      message: "অনুগ্রহ করে মিটিং এর বিষয় লিখুন",
                    },
                  ]}
                >
                  <Input placeholder="মিটিং এর বিষয়" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6}>
                <Form.Item
                  label="মিটিং এর তারিখ"
                  name="meeting_date"
                  rules={[
                    {
                      required: true,
                      message: "অনুগ্রহ করে মিটিং এর তারিখ লিখুন",
                      type: "date",
                    },
                  ]}
                >
                  <DatePicker
                    format="YYYY-MM-DD"
                    placeholder="মিটিং এর তারিখ নির্বাচন করুন"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8} lg={6}>
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
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
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
              </Col>
            </Row>

            <Form.Item
              label="বিস্তারিত"
              name="details"
              rules={[
                { required: true, message: "অনুগ্রহ করে বিস্তারিত লিখুন" },
              ]}
            >
              <Input.TextArea rows={4} placeholder="বিস্তারিত" />
            </Form.Item>

            <Form.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "300px",
                }}
              >
                সাবমিট
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>

      <MeetingTable />
    </div>
  );
};

export default WorkPlan;

//====================old version=================//
// import React, { useState } from "react";
// import { Input, DatePicker, Checkbox, Button, Cascader } from "antd";
// import OrganizationMeetingTable from "@/components/super-admin-dashboard/office-desk/organization-meeting/organization-meeting-table";
// import { useAddMeetingMutation } from "@/redux/features/meeting/meetingApi";
// import { toast } from "react-toastify";

// const teacherNames = ["আব্দুল্লাহ", "ফাতেমা", "আমিনুল", "রুকাইয়া", "তাহের"];

// const committeeMember = [
//   "সভাপতি",
//   "উপ-সভাপতি",
//   "সাধারণ সদস্য",
//   "কোষাধ্যক্ষ",
//   "সাধারণ সম্পাদক",
// ];

// const options = [
//   {
//     label: "শিক্ষক বৃন্দ",
//     value: "শিক্ষক বৃন্দ",
//     children: teacherNames.map((name) => ({
//       label: name,
//       value: name,
//     })),
//   },
//   {
//     label: "কমিটির সদস্যবৃন্দ",
//     value: "কমিটির সদস্যবৃন্দ",
//     children: committeeMember.map((name) => ({
//       label: name,
//       value: name,
//     })),
//   },
// ];

// const OrganizationMeeting = () => {
//   const [meetingData, setMeetingData] = useState({
//     name: "",
//     date: null,
//     subject: "",
//     participant: {
//       "শিক্ষক বৃন্দ": [],
//       "কমিটির সদস্যবৃন্দ": [],
//     },
//   });
//   const [AddMeeting, { data, isLoading, error }] = useAddMeetingMutation();

//   const handleSubmit = () => {
//     const arr = [];

//     Object.values(meetingData.participant).forEach((data) => {
//       if (Array.isArray(data) && data.length > 1) {
//         const val = data[1];
//         arr.push(val);
//       } else {
//         console.error("Invalid data structure:", data);
//       }
//     });

//     meetingData.participant = arr;

// AddMeeting(meetingData).then((props) => {
//   if (props?.data?.success) {
//     toast.success("মিটিং সফলভাবে যোগ করা হয়েছে।");

//     setMeetingData({
//       name: "",
//       date: null,
//       subject: "",
//       participant: {
//         "শিক্ষক বৃন্দ": [],
//         "কমিটির সদস্যবৃন্দ": [],
//       },
//     });
//   }
// });
//   };

// const handleCascaderChange = (value) => {
//   setMeetingData({ ...meetingData, participant: value });

//   console.log(value, "try");
// };

//   return (
//     <div className="m-4">
//       <h3 className="text-3xl m-4">প্রতিষ্ঠানের মিটিং</h3>
//       <div className="lg:flex mb-12">
//         <div className="space-y-2 px-4 pt-2 w-full">
//           <p className="font-semibold text-lg">
//             প্রতিষ্ঠানের মিটিং <span className="text-red-600">*</span>
//           </p>

//           <Input
//             placeholder="প্রতিষ্ঠানের মিটিং"
//             value={meetingData.name}
//             onChange={(e) =>
//               setMeetingData({ ...meetingData, name: e.target.value })
//             }
//           />
//         </div>

//         <div className="space-y-2 px-4 pt-2 w-full">
//           <p className="font-semibold text-lg">
//             মিটিং এর তারিখ <span className="text-red-600">*</span>
//           </p>
//           <DatePicker
//             format="YYYY-MM-DD"
//             placeholder="মিটিং এর তারিখ"
//             style={{ width: "100%" }}
//             value={meetingData.date}
//             onChange={(date) => setMeetingData({ ...meetingData, date })}
//           />
//         </div>

//         <div className="space-y-2 px-4 pt-2 w-full">
//           <p className="font-semibold text-lg">
//             মিটিং এর বিষয় <span className="text-red-600">*</span>
//           </p>

//           <Input
//             placeholder="মিটিং এর বিষয়"
//             value={meetingData.subject}
//             onChange={(e) =>
//               setMeetingData({ ...meetingData, subject: e.target.value })
//             }
//           />
//         </div>

//         <div className="space-y-2 px-4 pt-2 w-full">
//           <p className="font-semibold text-lg">
//             অংশগ্রহণকারী সদস্যবৃন্দ <span className="text-red-600">*</span>
//           </p>
//           <Cascader
//             style={{
//               width: "100%",
//             }}
//             options={options}
//             onChange={handleCascaderChange}
//             multiple
//             maxTagCount="responsive"
//             placeholder="অংশগ্রহণকারী সদস্যবৃন্দ"
//             allowClear
//           />
//         </div>
//       </div>
//       <div className="text-right mb-8 mr-4">
//         <Button type="primary" onClick={handleSubmit}>
//           যোগ করুন
//         </Button>
//       </div>
//       <OrganizationMeetingTable />
//     </div>
//   );
// };

// export default OrganizationMeeting;
