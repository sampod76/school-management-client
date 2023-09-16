import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";

const data = [
  {
    key: 0,
    serial: 1,
    donor: "দাতা",
    topic: "বিষয়",
    amount: "এমাউন্ট",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 1,
    serial: 2,
    donor: "দাতা",
    topic: "বিষয়",
    amount: "এমাউন্ট",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 2,
    serial: 3,
    donor: "দাতা",
    topic: "বিষয়",
    amount: "এমাউন্ট",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 3,
    serial: 4,
    donor: "দাতা",
    topic: "বিষয়",
    amount: "এমাউন্ট",
    date: "তারিখ",
    status: "স্ট্যাটাস",
  },
  {
    key: 4,
    serial: 5,
    donor: "দাতা",
    topic: "বিষয়",
    amount: "এমাউন্ট",
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

const DonationTable = () => {
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
            title: "দাতা",
            dataIndex: "donor",
            key: "key",
            width: 150,
          },
          {
            title: "বিষয়",
            dataIndex: "topic",
            key: "key",
            width: 150,
          },
          {
            title: "এমাউন্ট",
            width: 100,
            dataIndex: "amount",
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
                        <Link href={`donation/view/1`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`donation/edit/1`}>Edit</Link>
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

export default DonationTable;
