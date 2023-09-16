import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";

const data = [
  {
    key: 0,
    serial: 1,
    applicant: "আবেদনকারী",
    title: "শিরোনাম",
    topic: "বিষয়",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 1,
    serial: 2,
    applicant: "আবেদনকারী",
    title: "শিরোনাম",
    topic: "বিষয়",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 2,
    serial: 3,
    applicant: "আবেদনকারী",
    title: "শিরোনাম",
    topic: "বিষয়",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 3,
    serial: 4,
    applicant: "আবেদনকারী",
    title: "শিরোনাম",
    topic: "বিষয়",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 4,
    serial: 5,
    applicant: "আবেদনকারী",
    title: "শিরোনাম",
    topic: "বিষয়",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
];

const items = [
  {
    key: "1",
    label: "Edit",
  },
  {
    key: "2",
    label: "Delete",
  },
  {
    key: "3",
    label: "View",
  },
];

const OnlineApplicationTable = () => {
  const handleDelete = () => {
   confirm_modal("You want to delete Category!") 
  };

  return (
    <>
      <Table
        dataSource={data}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1000,
        }}
        columns={[
          {
            title: "ক্রমিক নং",
            dataIndex: "serial",
            key: "key",
            width: 150,
          },
          {
            title: "আবেদনকারী",
            dataIndex: "applicant",
            key: "key",
            width: 150,
          },
          {
            title: "শিরোনাম",
            dataIndex: "title",
            key: "key",
            width: 150,
          },
          {
            title: "বিষয়",
            width: 100,
            dataIndex: "topic",
            key: "key",
            width: 150,
            ellipsis: true,
          },
          {
            title: "তারিখ",
            width: 100,
            dataIndex: "date",
            key: "key",
          },
          {
            title: "স্ট্যাটাস",
            width: 100,
            dataIndex: "status",
            key: "key",
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
                        <Link href={`online-application/view/1`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`online-application/edit/1`}>Edit</Link>
                      </Menu.Item>

                      <Menu.Item
                        key="delete"
                        onClick={() => {
                          handleDelete();
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
    </>
  );
};

export default OnlineApplicationTable;
