import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";
 

const data = [
  {
    key: 0,
    notice: "দিনের ক্লাস",
    date: "2020-08-13",
    serial: 1,
  },
  {
    key: 1,
    notice: "দিনের ক্লাস",
    date: "2021-08-27",
    serial: 2,
  },
  {
    key: 2,
    notice: "দিনের ক্লাস",
    date: "2022-08-2",
    serial: 3,
  },
  {
    key: 3,
    notice: "দিনের ক্লাস",
    date: "2023-08-29",
    serial: 4,
  },
  {
    key: 4,
    notice: "দিনের ক্লাস",
    date: "2023-08-29",
    serial: 5,
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

const ManagingCommitteeTable = () => {
  const handleDelete = () => {
    confirm_modal("You want to delete Category!")
    // .then(async(willDelete) => {
    //   console.log(willDelete);
    // })
  };

  return (
    <>
      <Table
        dataSource={data}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 100,
        }}
        columns={[
          {
            title: "ক্রমিক নং",
            dataIndex: "serial",
            key: "key",
            width: 150,
          },
          {
            title: "নোটিশ",
            width: 100,
            dataIndex: "notice",
            key: "key",
            // fixed: "left",
            width: 150,
            ellipsis: true,
          },

          {
            title: "তারিখ",
            width: 100,
            dataIndex: "date",
            key: "key",
            // fixed: "left",
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
                        View
                      </Menu.Item> */}
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`notice/1`}>Edit</Link>
                      </Menu.Item>

                      <Menu.Item key="delete" onClick={handleDelete()}>
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

export default ManagingCommitteeTable;
