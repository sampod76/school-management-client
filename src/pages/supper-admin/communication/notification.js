/* // ? create by --> sampod nath

 */
import {
  Checkbox,
  Divider,
  Form,
  Typography,
  Input,
  Row,
  Col,
  DatePicker,
} from "antd";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Import QuillEditor dynamically only on the client side
const DynamicQuillEditor = dynamic(
  () => import("../../../components/super-admin-dashboard/office-desk/text-editor"),
  {
    ssr: false,
  }
);

const plainOptions = [
  "শিক্ষার্থী",
  "অভিভাবক",
  "প্রশাসক",
  "শিক্ষক/শিক্ষিক",
  "হিসাবরক্ষক",
  "গ্রন্থাগারিক",
  "সুপার প্রশাসক",
];
const Notification = () => {
  const [checkedList, setCheckedList] = useState([]);

  const onFinish = (values) => {
    console.log("Form values:", values);
  };
  const onChange = (list) => {
    setCheckedList(list);
  };

  const [editorValue, setEditorValue] = useState("");

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };
  console.log(editorValue);
  return (
    <div className="p-3">
      <Typography.Title level={2}>নতুন বার্তা রচনা করুন</Typography.Title>
      <Divider></Divider>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={18}>
          <Form onFinish={onFinish}>
            <Typography.Text>
              শিরোনাম <span className="text-red-500">*</span>
            </Typography.Text>

            <Form.Item
              // label="শিক্ষার্থীর নাম (বাংলায়)"
              name="title"
              rules={[
                {
                  pattern: /^[\u0980-\u09FF\s]*$/,
                  message: "বাংলায় শুধুমাত্র অক্ষর ব্যবহার করুন",
                },
                { required: true, message: "এই ফিল্ডটি পূরণ করতেই হবে" },
              ]}
            >
              <Input placeholder="শিরোনাম (বাংলায়) লিখুন" />
            </Form.Item>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Typography.Text>
                  নোটিশ তারিখ<span className="text-red-500">*</span>
                </Typography.Text>
                <Form.Item
                  // label="জন্ম তারিখ"
                  name="notice_date"
                >
                  <DatePicker
                    placeholder="নোটিশ তারিখ নির্বাচন করুন"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Typography.Text>
                  প্রকাশ তারিখ<span className="text-red-500">*</span>
                </Typography.Text>
                <Form.Item
                  // label="জন্ম তারিখ"
                  name="publish_date"
                >
                  <DatePicker
                    placeholder="প্রকাশ তারিখ নির্বাচন করুন"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
            {/* <Form.Item
              style={{ width: "100%" }}
              // label=""
              name="student.opinion"
            >
              <label>শিক্ষার্থীর মতামত</label>
              <Input.TextArea rows={10} />
            </Form.Item> */}
          </Form>
          <DynamicQuillEditor
            value={editorValue}
            onChange={handleEditorChange}
          />
         
        </Col>
        <Col xs={24} md={6}>
          <Typography.Text>
            মেসেজ করুন <span className="text-red-500">*</span>
          </Typography.Text>
          <Checkbox.Group
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            style={{ display: "flex", flexDirection: "column" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Notification;
