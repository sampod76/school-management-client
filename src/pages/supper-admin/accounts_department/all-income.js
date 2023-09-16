// rtk done by bayajid
import {
  useDeleteIncomeMutation,
  useGetAllIncomeQuery,
} from "@/redux/features/income/incomeApi";
import { confirm_modal } from "@/utils/modalHook";
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Row,
  Select,
  Space,
  Spin,
  Table,
  Typography,
} from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const { Option } = Select;
const { Search } = Input;

const items = [
  {
    key: "1",
    label: "ভিউ",
  },
  {
    key: "2",
    label: "ডিলেট",
  },
];
const All_Income = () => {
  const { data, refetch } = useGetAllIncomeQuery();

  const [deleteIncome, { data: deletionData, isLoading, isSuccess }] =
    useDeleteIncomeMutation();

  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  // const [statusOptions] = useState(["Active", "Inactive"]);

  // delete mutation
  const handleDelete = (id) => {
    confirm_modal("আপনি আয় মুছে ফেলতে চান!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteIncome(id).then((props) => {
          if (props?.data?.success) {
            refetch();
            toast.success("আয় সফলভাবে মুছে ফেলা হয়েছে");
          }
        });
      }
    });
  };

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };
  const handleFilterReset = () => {};

  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: "ক্রমিক নং",
      key: "serialNumber",
      fixed: "left",
      width: 100,
      render: (text, record, index) => index + 1,
    },
    { title: "ইনভয়েস নাম্বার", dataIndex: "invoiceNumber", key: "type" },
    { title: "আয়ের উৎস", dataIndex: "incomeName", key: "code" },
    { title: "তারিখ", dataIndex: "date", key: "type" },
    { title: "পরিমাণ;", dataIndex: "amount", key: "type" },

    {
      title: "একশন",
      key: "key",
      fixed: "right",
      width: 100,
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key="view"
                  onClick={() => {
                    // Handle view logic here
                  }}
                >
                  <Link href={`all-income/view/${record._id}`}>View</Link>
                </Menu.Item>
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    // Handle edit logic here
                  }}
                >
                  <Link href={`all-income/edit/${record._id}`}>Edit</Link>
                </Menu.Item>

                <Menu.Item
                  key="delete"
                  onClick={() => {
                    handleDelete(record._id);
                  }}
                >
                  Delete
                </Menu.Item>
              </Menu>
            }
          >
            <a>একশন</a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spin></Spin>
      </div>
    );
  }
  // const handleAddSubject = () => {
  //   setSubjects([...subjects, newSubject]);
  //   setNewSubject({});
  // };
  return (
    <div className="bg-white rounded-lg shadow p-6 m-4">
      <h2 className="text-xl font-semibold mb-4">সকল আয়</h2>
   

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Select
                  placeholder="আয়ের উৎস"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="শিক্ষা ফি">শিক্ষা ফি</Select.Option>
                  <Select.Option value="যাতায়াত বা পরিবহন চার্জ">
                    যাতায়াত বা পরিবহন চার্জ
                  </Select.Option>
                  <Select.Option value="বই এবং পাঠমালা বিক্রয়">
                    বই এবং পাঠমালা বিক্রয়
                  </Select.Option>
                  <Select.Option value="প্রতিযোগিতা ও ইভেন্ট">
                    প্রতিযোগিতা ও ইভেন্ট
                  </Select.Option>
                  <Select.Option value="অতিরিক্ত কোচিং বা পরীক্ষার্থীদের উপর নির্ভরযোগ্যতা">
                    অতিরিক্ত কোচিং বা পরীক্ষার্থীদের উপর নির্ভরযোগ্যতা
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
      <Table
        scroll={{
          x: 1200,
        }}
        columns={columns}
        dataSource={data?.data}
        pagination={{ pageSize: 10 }}
      />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default All_Income;
