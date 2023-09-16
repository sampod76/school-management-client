import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";

const data = [
  {
    key: 0,
    serial: 1,
    name: "নাম",
    title: "পদবী",
    phone: "মোবাইল",
    timing: "সময়কাল",
    student: "শিক্ষার্থী",
  },
  {
    key: 1,
    serial: 2,
    name: "নাম",
    title: "পদবী",
    phone: "মোবাইল",
    timing: "সময়কাল",
    student: "শিক্ষার্থী",
  },
  {
    key: 2,
    serial: 3,
    name: "নাম",
    title: "পদবী",
    phone: "মোবাইল",
    timing: "সময়কাল",
    student: "শিক্ষার্থী",
  },
  {
    key: 3,
    serial: 4,
    name: "নাম",
    title: "পদবী",
    phone: "মোবাইল",
    timing: "সময়কাল",
    student: "শিক্ষার্থী",
  },
  {
    key: 4,
    serial: 5,
    name: "নাম",
    title: "পদবী",
    phone: "মোবাইল",
    timing: "সময়কাল",
    student: "শিক্ষার্থী",
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

const PreviousCommitteeTable = () => {
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
            title: "নাম",
            dataIndex: "name",
            key: "key",
            width: 150,
          },
          {
            title: "পদবী",
            dataIndex: "title",
            key: "key",
            width: 150,
          },
          {
            title: "মোবাইল",
            width: 100,
            dataIndex: "phone",
            key: "key",
            width: 150,
            ellipsis: true,
          },
          {
            title: "সময়কাল",
            width: 100,
            dataIndex: "timing",
            key: "key",
          },
          {
            title: "শিক্ষার্থী",
            width: 100,
            dataIndex: "student",
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
                        <Link href={`previous-committee/view/1`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`previous-committee/edit/1`}>Edit</Link>
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
      ></Table>
    </>
  );
};

export default PreviousCommitteeTable;
