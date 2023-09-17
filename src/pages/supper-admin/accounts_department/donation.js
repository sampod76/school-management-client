import DonationTable from "@/components/super-admin-dashboard/accounts_department/donation/donation-table";
import StudentFeesTable from "@/components/super-admin-dashboard/accounts_department/student-fees/student-fees-table";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Radio,
  Row,
  Select,
  Space,
  Input,
  Typography,
} from "antd";
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

const Donation = () => {
  const [formVisible, setFormVisible] = useState(false);
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

  const onSearch = (value) => console.log(value);
  const handleFilterReset = () => {};

  const handleAddButtonClick = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="m-3 bg-white p-3">
      <h3 className="text-2xl font-bold m-4">ডোনেশন</h3>

      <div className="flex items-center justify-end mb-4">
        <Button type="primary" onClick={handleAddButtonClick}>
          {formVisible ? "গোপন" : "ডোনেশন যোগ করুন"}
        </Button>
      </div>
      {formVisible && (
        <div className="my-8 px-4">
          <Form
            form={form}
            name="addIncomeForm"
            onFinish={onFinish}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col xs={24} sm={12} lg={8}>
                <Form.Item
                  label="দাতার নাম;"
                  name="name"
                  rules={[{ required: true, message: "দাতার নাম;" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Form.Item
                  label="দাতার পিতা"
                  name="incomeMethod"
                  rules={[{ required: true, message: "দাতার পিতা" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Form.Item
                  label="দাতার ঠিকানা"
                  name="incomeMethod"
                  rules={[{ required: true, message: "দাতার ঠিকানা" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col xs={24} sm={12} lg={8}>
                <Form.Item
                  label="প্রকল্প"
                  name="name"
                  rules={[{ required: true, message: "প্রকল্প" }]}
                >
                  <Input />
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
      )}

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Select
                  placeholder="বিষয় নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="শিক্ষা উন্নতির জন্য দান">
                    শিক্ষা উন্নতির জন্য দান
                  </Select.Option>
                  <Select.Option value="শিক্ষার্থীদের সামগ্রী প্রদানে সাহায্য">
                    শিক্ষার্থীদের সামগ্রী প্রদানে সাহায্য
                  </Select.Option>
                  <Select.Option value="পরিবেশ সুন্দর করার জন্য দান">
                    পরিবেশ সুন্দর করার জন্য দান
                  </Select.Option>
                  <Select.Option value="কার্যক্রম ও উৎসবে অর্থ অবদান">
                    কার্যক্রম ও উৎসবে অর্থ অবদান
                  </Select.Option>
                  <Select.Option value="তথ্য প্রযুক্তি উন্নতির জন্য দান">
                    তথ্য প্রযুক্তি উন্নতির জন্য দান
                  </Select.Option>
                </Select>
              </Col>
              <Col xs={24} md={8}>
                <Select
                  placeholder="	স্ট্যাটাস নির্বাচন করুন"
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

      <DonationTable />
    </div>
  );
};

export default Donation;
