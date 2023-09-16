import { Button, Checkbox, Col, Form, Radio, Row, Select, Space } from "antd";
import { Input } from "antd"; // Corrected import statement
import React, { useState } from "react";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

const options = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const onSearch = (value) => {
  console.log('search:', value);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const ResultPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    // Add your data submission logic here
  };

  const [value, setValue] = useState();
  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  };

  return (
    <div className="container mx-auto px-5 py-20 w-[80%]">
      <h1 className="text-2xl py-8">রেজাল্ট</h1>
      <Form
        form={form}
        name="addIncomeForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="শিক্ষার্থীর শ্রেনি"
              name="name"
              rules={[{ required: true, message: "শিক্ষার্থীর শ্রেনি" }]}
            >
            
              <Select
                showSearch
                placeholder="শিক্ষার্থীর শ্রেনি"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "One",
                  },
                  {
                    value: "2",
                    label: "Two",
                  },
                  {
                    value: "3",
                    label: "Three",
                  },
                  {
                    value: "4",
                    label: "Four",
                  },
                  {
                    value: "5",
                    label: "Five",
                  },
                  {
                    value: "6",
                    label: "Six",
                  },
                  {
                    value: "7",
                    label: "Seven",
                  },
                  {
                    value: "8",
                    label: "Eight",
                  },
                  {
                    value: "9",
                    label: "Nine",
                  },
                  {
                    value: "10",
                    label: "Ten",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="শিক্ষার্থীর শাখা"
              name="incomeMethod"
              rules={[{ required: true, message: "শিক্ষার্থীর শাখা" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="শিক্ষার্থীর রোল"
              name="incomeMethod"
              rules={[{ required: true, message: "শিক্ষার্থীর রোল" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="primary">রেজাল্ট দেখুন</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ResultPage;
