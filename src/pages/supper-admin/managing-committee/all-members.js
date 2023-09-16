import AllMembersTable from "@/components/super-admin-dashboard/managing-committee/all-members/all-members-table";
import { Button, Col, Row, Select, Typography, Input, Form } from "antd";
import { useState } from "react";
const { Search } = Input;
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
import dayjs from 'dayjs';
const AllManagingMembers = () => {
  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};

  const onSearch = (value) => console.log(value);

  return (
    <>
      <h3 className="text-2xl font-bold m-4">ম্যানেজিং কমিটি'র সকল সদস্য</h3>

  

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Select
                  placeholder="পদবী নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="সভাপতি">সভাপতি</Select.Option>
                  <Select.Option value="উপসভাপতি">উপসভাপতি</Select.Option>
                  <Select.Option value="সাধারণ সম্পাদক">
                    সাধারণ সম্পাদক
                  </Select.Option>
                  <Select.Option value="সাধারণ সদস্য">
                    সাধারণ সদস্য
                  </Select.Option>
                  <Select.Option value="ট্রেজারার">ট্রেজারার</Select.Option>
                  <Select.Option value="সচিব">সচিব</Select.Option>
                  <Select.Option value="শিক্ষক প্রতিষ্ঠান প্রধান">
                    শিক্ষক প্রতিষ্ঠান প্রধান
                  </Select.Option>
                  <Select.Option value="অভিভাবক প্রতিষ্ঠান প্রধান">
                    অভিভাবক প্রতিষ্ঠান প্রধান
                  </Select.Option>
                  <Select.Option value="স্থানীয় সমাজের প্রতিষ্ঠান প্রধান">
                    স্থানীয় সমাজের প্রতিষ্ঠান প্রধান
                  </Select.Option>
                  <Select.Option value="অন্যান্য">অন্যান্য</Select.Option>
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
                  <RangePicker
                    placeholder="সময়কাল"
                    style={{ width: "100%" }}
                    defaultValue={[
                      dayjs("2015/01/01", dateFormat),
                      dayjs("2023/01/01", dateFormat),
                    ]}
                    format={dateFormat}
                  />
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
      <AllMembersTable />
    </>
  );
};

export default AllManagingMembers;
