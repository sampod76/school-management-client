import StudentFeesTable from "@/components/super-admin-dashboard/accounts_department/student-fees/student-fees-table";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Radio,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import { Input } from "antd";
import { useState } from "react";
const { Search } = Input;

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

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Student_Fees = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    // Add your data submission logic here
  };

  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const [value, setValue] = useState();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};

  const onSearch = (value) => console.log(value);

  return (
    <div className="m-3 bg-white p-3">
      <h3 className="text-2xl font-bold m-4">শিক্ষার্থী ফি</h3>

      <div className="my-8 px-4">
        <Form
          form={form}
          name="addIncomeForm"
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="শিক্ষার্থীর নাম"
                name="name"
                rules={[{ required: true, message: "শিক্ষার্থীর নাম" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="শিক্ষার্থীর আইডি;  "
                name="incomeMethod"
                rules={[{ required: true, message: "শিক্ষার্থীর আইডি" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                label="ফি টাইপ;  "
                name="incomeMethod"
                rules={[{ required: true, message: "ফি টাইপ" }]}
              >
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  onChange={onChange}
                >
                  <Row gutter={16}>
                    <Col span={8}>
                      <Checkbox value="A">A</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B">B</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C">C</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D">D</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="E">E</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="E">F</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                label="মাস"
                name="name"
                rules={[{ required: true, message: "মাস" }]}
              >
                <Space
                  style={{
                    width: "100%",
                  }}
                  direction="vertical"
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please select"
                    defaultValue={["January", "February"]}
                    onChange={handleChange}
                    options={options.map((month) => ({
                      value: month,
                      label: month,
                    }))}
                  />
                </Space>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Form.Item
                label="এমাউন্ট"
                name="name"
                rules={[{ required: true, message: "এমাউন্ট" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="পেমেন্ট গেটওয়ে" name="name">
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1} setValue={1}>
                      {" "}
                      অনলাইন পেমেন্ট
                    </Radio>
                    <Radio value={2} setValue={2}>
                      {" "}
                      অফলাইন পেমেন্ট
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            {value === 1 ? (
              <Col>
                <Button type="primary">Pay with Online</Button>
              </Col>
            ) : (
              ""
            )}
          </Row>
          <Row>
            {value === 2 ? (
              <Col lg={8}>
                <Form.Item
                  label="ইনভয়েস আইডি"
                  name="name"
                  rules={[{ required: true, message: "ইনভয়েস আইডি" }]}
                >
                  <Input />
                </Form.Item>
                <Button type="primary">Submit</Button>
              </Col>
            ) : (
              ""
            )}
          </Row>
        </Form>
      </div>

    

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Select
                  placeholder="ফি টাইপ নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="প্রথম শ্রেণী">
                    প্রথম শ্রেণী
                  </Select.Option>
                  <Select.Option value="ভর্তি ফি">ভর্তি ফি</Select.Option>
                  <Select.Option value="পরীক্ষা ফি">পরীক্ষা ফি</Select.Option>
                  <Select.Option value="পরিবহন ফি">পরিবহন ফি</Select.Option>
                  <Select.Option value="কার্যক্রম বা অতিরিক্ত কার্যক্রম ফি">
                    কার্যক্রম বা অতিরিক্ত কার্যক্রম ফি
                  </Select.Option>
                </Select>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="স্ট্যাটাস"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentSection: value,
                    }))
                  }
                >
                  <Select.Option value="পরিশোধিত">পরিশোধিত</Select.Option>
                  <Select.Option value="অপরিশোধিত">অপরিশোধিত</Select.Option>
                  <Select.Option value="সময়ে পরিশোধিত">
                    সময়ে পরিশোধিত
                  </Select.Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Form.Item
                  name="event_date"
                  rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentSection: value,
                    }))
                  }
                >
                  <DatePicker placeholder="তারিখ" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row className="mt-3">
              <Button type="primary" onClick={handleFilterClick}>
                ফিল্টার করুন
              </Button>
              <Button type="primary ml-2" onClick={handleFilterReset}>
                রিসেট করুন
              </Button>
            </Row>
          </div>

          <div className="lg:w-[40%] md:w-[30%] w-full mt-4 md:mt-0">
            <Row justify="end">
              <Col xs={24} md={22} lg={16}>
                <Search
                  placeholder="আইডি দিয়ে অনুসন্ধান"
                  onSearch={onSearch}
                  enterButton
                  style={{ minWidth: "100%", textAlign: "center", width: 200 }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <StudentFeesTable />
    </div>
  );
};

export default Student_Fees;
