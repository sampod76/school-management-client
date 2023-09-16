import {
  Button,
  Form,
  Input,
  Select,
  Upload,
  Tabs,
  Checkbox,
  Row,
  Col,
  Cascader,
  Space,
  DatePicker,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import React from "react";
const { Option } = Select;
const { Search } = Input;

const studentGroup = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const onChange = (key) => {
  console.log(key);
};

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values) => {
  console.log(values);
};
const AddNoticeBoard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
    <div className="col-span-2 mx-4">
      <div className="mx-4">
        <Form onFinish={onFinish}>
          <div>
            <h1>Title </h1>
            <Form.Item
              style={{ width: "100%" }}
              name="title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <h1>Notice Date </h1>
            <Form.Item
              style={{ width: "100%" }}
              name="noticeDate"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker onChange={onChange} />
            </Form.Item>
          </div>
          <div>
            <h1>Publish On </h1>
            <Form.Item
              style={{ width: "100%" }}
              name="publishOn"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker onChange={onChange} />
            </Form.Item>
          </div>

          <div>
            <h1>Attach Document</h1>
            <Form.Item>
              <Form.Item
                name="document"
                style={{ width: "100%" }}
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </div>
          <div>
            <h1>Message</h1>
            <Form.Item
              style={{ width: "100%" }}
              // label=""
              name="message"
            >
              <Input.TextArea rows={10} />
            </Form.Item>
          </div>
          <Form.Item style={{ width: "100%" }}>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    <div className="  ms-0 md:ms-4">
      <div>
        <h1>Message To</h1>

        <Checkbox.Group
          style={
            ({
              width: "100%",
            },
            {
              marginTop: "30px",
            })
          }
        >
          <Row>
            <Col span={24}>
              <Checkbox value="Students">Students</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Guardians">Guardians</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Admin">Admin</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Teacher">Teacher</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value="Accountant">Accountant</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  </div>
);
export default AddNoticeBoard;
