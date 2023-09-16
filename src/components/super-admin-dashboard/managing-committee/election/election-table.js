import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";

const data = [
  {
    key: 0,
    serial: 1,
    date: "তারিখ",
    name_of_meeting: "সভার নাম",
    place: "স্থান",
  },
  {
    key: 1,
    serial: 2,
    date: "তারিখ",
    name_of_meeting: "সভার নাম",
    place: "স্থান",
  },
  {
    key: 2,
    serial: 3,
    date: "তারিখ",
    name_of_meeting: "সভার নাম",
    place: "স্থান",
  },
  {
    key: 3,
    serial: 4,
    date: "তারিখ",
    name_of_meeting: "সভার নাম",
    place: "স্থান",
  },
  {
    key: 4,
    serial: 5,
    date: "তারিখ",
    name_of_meeting: "সভার নাম",
    place: "স্থান",
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

const ElectionTable = () => {

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
            title: "তারিখ",
            dataIndex: "date",
            key: "key",
            width: 150,
          },
          {
            title: "সভার নাম",
            dataIndex: "name_of_meeting",
            key: "key",
            width: 150,
          },
          {
            title: "স্থান",
            width: 100,
            dataIndex: "place",
            key: "key",
            width: 150,
            ellipsis: true,
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
                        <Link href={`elections/view/1`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`elections/edit/1`}>Edit</Link>
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

export default ElectionTable;
