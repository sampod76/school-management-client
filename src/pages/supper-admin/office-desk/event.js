/* // ? create by --> sampod nath

 */

import {
  useAddEventMutation,
  useDeleteEventMutation,
  useGetAllEventQuery,
} from "@/redux/features/event/eventApi";
import { useAddIncomeMutation } from "@/redux/features/income/incomeApi";
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
import { parseISO } from "date-fns";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { BiSave } from "react-icons/bi";
import { toast } from "react-toastify";

const Event = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [form] = Form.useForm();

  // get query
  const { data: eventData, refetch } = useGetAllEventQuery();
  console.log(eventData, "hi");

  // mutation query
  const [addEvent, { isLoading, data }] = useAddEventMutation();

  // add new event
  const onFinish = (values) => {
    addEvent(values).then((props) => {
      if (props.data?.success) {
        toast.success("Event added successfully");
        form.resetFields();
        refetch();
      }
    });
  };

  // delete mutations
  const [deleteEvent, { isError }] = useDeleteEventMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete Event!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteEvent(id).then((props) => {
          console.log(props);
          if (props.data?.success) {
            refetch();
            toast.success("Event deleted successfully");
          }
        });
      }
    });
  };
  // Sort the eventData by createdAt in ascending order and take the first five items
  const sortedEvents = eventData?.data
    ? eventData.data
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <div className="p-4">
      <Typography.Title level={3}>ইভেন্ট </Typography.Title>

      <Form
        form={form}
        name="addIncomeForm"
        onFinish={onFinish}
        layout="vertical"
        className="p-4"
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর নাম"
              name="event_name"
              rules={[{ required: true, message: "ইভেন্ট এর নাম লিখুন" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর 	তারিখ"
              name="event_date"
              rules={[{ required: true, message: "তারিখ অবশ্যই দিতে হবে" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Form.Item
              label="ইভেন্ট এর স্টাটাস"
              name="status"
              rules={[{ required: true, message: "স্টাটাস অবশ্যই দিতে হবে" }]}
            >
              <Select placeholder="স্টাটাস">
                <Select.Option value="active">Active </Select.Option>
                <Select.Option value="inactive"> Inactive</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="w-full" label="বর্ণনা" name="event_details">
          <textarea
            placeholder="ইভেন্ট এর ডিটেইলস"
            name="event_details"
            className="w-full h-20 border border-slate-300 rounded-xl p-2"
          ></textarea>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Spin />
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "150px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "1rem",
              }}
            >
              <BiSave></BiSave>ইভেন্ট যোগ করুন
            </Button>
          )}
        </Form.Item>
      </Form>

      <div className="flex justify-center items-center ">
        <div className="rounded-lg border-2 w-fit p-2">
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            // highlightDates={highlightedDates}
            placeholderText="This highlights a week ago and a week from today"
          />
        </div>
      </div>
      <Table
        dataSource={sortedEvents}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: "ক্রমিক নং",
            dataIndex: "date",
            key: "key",
            width: 40,
            render: (text, record, rowIndex) => rowIndex + 1,
          },
          {
            title: "ইভেন্ট এর নাম",

            dataIndex: "event_name",
            key: "key",
            //এটা হলে সে ওই জিনিসটাকে সব সময় ফিক্স রাখবে বাকিগুলো স্কুল করবে
            // fixed: "left",
            width: 150,
            //ডাটা যদি অনেক বড় হয়ে যায় তাহলে সেখানে ... দেখাবে
            ellipsis: true,
          },
          {
            title: "তারিখ",
            dataIndex: "event_date",
            key: "key",
            width: 150,
            render: (text, record) => moment(text).format("YYYY-MM-DD"),
          },

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
                        <Link href={`event/view/${record._id}`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`event/edit/${record._id}`}>Edit</Link>
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
        ]}
        d
      ></Table>
    </div>
  );
};

export default Event;
