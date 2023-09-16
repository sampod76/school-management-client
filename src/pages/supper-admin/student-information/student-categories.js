import React from "react";
import { Table, Space, Button, Form, Input } from "antd";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    filters: [
      {
        text: "General",
        value: "General",
      },
      {
        text: "General",
        value: "General",
      },
      {
        text: "General",
        value: "General",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.category.startsWith(value),
    width: "30%",
  },
  {
    title: "Category ID",
    dataIndex: "CategoryId",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },

  {
    title: "একশন",
    key: "action",
    render: () => (
      <Space size="middle">
        <button>Edit </button>
        <button>Delete</button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    category: "General",
    CategoryId: 1,
  },
  {
    key: "2",
    category: "Physically Challenged",
    CategoryId: 2,
  },
  {
    key: "3",
    category: "Special",
    CategoryId: 3,
  },
  {
    key: "4",
    category: "OBC",
    CategoryId: 4,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const StudentCategory = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 mt-4">
    <div className="mx-4">
      <Form>
        <h1 className="mb-2">Category</h1>
        <Form.Item
          name="category"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item style={{ width: "100%" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    <div className=" col-span-2 ms-0 md:ms-4">
      <h1 className="mb-4">Category List</h1>
      <div className=" col-span-2 ms-0 md:ms-4 overflow-x-auto">
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  </div>
);
export default StudentCategory;
