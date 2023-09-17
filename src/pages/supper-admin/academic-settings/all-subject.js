import React, { useState } from "react";
import {
  Table,
  Input,
  Select,
  Button,
  Row,
  Col,
  Divider,
  Space,
  Dropdown,
  Menu,
  Form,
  DatePicker,
  Spin,
} from "antd";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
  usePostBookMutation,
} from "@/redux/features/book/bookApi";
import { confirm_modal } from "@/utils/modalHook";
import { toast } from "react-toastify";
import Link from "next/link";
import { useGetClassesQuery } from "@/redux/features/class/classApi";

const { Option } = Select;
// Regular expression to match Bangla characters
const banglaPattern = /^[ঀ-৾\s]*$/;

const AllSubject = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [form] = Form.useForm();
  const { data: AllSubjects, isLoading, isError, refetch } = useGetBooksQuery();

  const { data: getClasses } = useGetClassesQuery();

  // delete mutations
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id) => {
    confirm_modal(" delete Book !").then(async (willDelete) => {
      if (willDelete.value) {
        deleteBook(id).then((props) => {
          if (props?.data?.success) {
            refetch();
            toast.success("Book deleted successfully");
          }
        });
      }
    });
  };

  const columns = [
    { title: "নাম", dataIndex: "bookName", key: "_id" },
    { title: "কোড", dataIndex: "bookCode", key: "_id" },
    {
      title: "ক্লাস",
      dataIndex: "class",
      render: (classData) =>
        classData && classData.className ? classData.className : "N/A",
    },
    {
      title: "অবস্থা",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span style={{ color: status === "active" ? "green" : "red" }}>
          {status}
        </span>
      ),
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
                {/* <Menu.Item
                  key="view"
                  onClick={() => {
                    // Handle view logic here
                  }}
                >
                  <Link href={"#"}>View</Link>
                </Menu.Item> */}
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    // Handle edit logic here
                  }}
                >
                  <Link href={`all-subject/edit/${record._id}`}>Edit</Link>
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
  const [postBook] = usePostBookMutation();
  const onFinish = (values) => {
    // Handle form submission here, values will contain the form input values
    postBook(values).then((props) => {
      if (props.data?.success) {
        toast.success("Work Plan added successfully");
        form.resetFields();
      }
    });
  };

  const handleAddButtonClick = () => {
    setFormVisible(!formVisible);
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">সকল বিষয়</h2>
      <div className="m-6">
        <div>
          <div className="flex items-center justify-end mb-4">
            <Button type="primary" onClick={handleAddButtonClick}>
              {formVisible ? "গোপন" : "বিষয় যোগ করুন"}
            </Button>
          </div>

          {formVisible && (
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <h3 className="text-2xl font-bold mb-4">নতুন বিষয় যোগ করুন</h3>
              <Row gutter={[16, 16]} className="mb-4">
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item name="bookName" label="নাম">
                    <Input placeholder="নাম" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item
                    name="bookCode"
                    label="কোড"
                    rules={[
                      {
                        pattern: banglaPattern,
                        message: "Please enter only Bangla characters",
                      },
                    ]}
                  >
                    <Input placeholder="কোড" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item name="class" label="ক্লাস">
                    <Select placeholder="ক্লাস">
                      {getClasses?.data?.map((option) => (
                        <Option key={option._id} value={option._id}>
                          {option.className}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item name="status" label="অবস্থা">
                    <Select placeholder="অবস্থা">
                      <Option value="active">Active</Option>
                      <Option value="inactive">Inactive</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          )}
        </div>
      </div>

      <Divider />
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin />
        </div>
      ) : (
        <Table
          scroll={{
            x: 1000,
          }}
          columns={columns}
          dataSource={AllSubjects?.data}
          pagination={{ pageSize: 15 }}
        />
      )}
    </div>
  );
};

export default AllSubject;
