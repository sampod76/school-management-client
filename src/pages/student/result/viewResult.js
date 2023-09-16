import { Button, Form, Input, Select } from "antd";
import React from "react";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const viewResult = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = React.useRef(null);

  const onFinish = (values) => {
    // console.log(values);
  };
  const onReset = () => {
    formRef.current?.resetFields();
  };
  //   const onFill = () => {
  //     formRef.current?.setFieldsValue({
  //       note: "Hello world!",
  //       gender: "male",
  //     });
  //   };

  return (
    <div className="mt-12">
      <Form
        {...layout}
        ref={formRef}
        name="control-ref"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        {/* Field - 01 - Examination Field */}
        <Form.Item
          name="examination"
          label="Examination"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a option" allowClear>
            <Option value="hsc">HSC</Option>
            <Option value="hsc">HSC</Option>
            <Option value="hsc">HSC</Option>
            <Option value="hsc">HSC</Option>
            <Option value="hsc">HSC</Option>
          </Select>
        </Form.Item>

        {/* Field - 02 - Year Field */}
        <Form.Item
          name="year"
          label="Year"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a option" allowClear>
            <Option value="year">2023</Option>
            <Option value="year">2023</Option>
            <Option value="year">2023</Option>
            <Option value="year">2023</Option>
            <Option value="year">2023</Option>
          </Select>
        </Form.Item>

        {/* Field - 03 - Board Field */}
        <Form.Item
          name="board"
          label="Board"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a option" allowClear>
            <Option value="board">Dhaka</Option>
            <Option value="board">Dhaka</Option>
            <Option value="board">Dhaka</Option>
            <Option value="board">Dhaka</Option>
            <Option value="board">Dhaka</Option>
          </Select>
        </Form.Item>

        {/* Field - 04 - Roll Field */}
        <Form.Item
          name="roll"
          label="Roll"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Field - 05 - Registration Number Field */}
        <Form.Item
          name="registration"
          label="Reg: No"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Field - 06 - Captcha Field */}
        <Form.Item
          name="captcha"
          label="6 + 5"
          //   This field will be dynamic
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Extra Field if need in future*/}
        {/* <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item> */}

        {/* Buttons  */}
        <div className="ms-96">
          <Form.Item {...tailLayout}>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default viewResult;
