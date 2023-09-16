import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";

const data = [
  {
    key: 0,
    serial: 1,
    invoice_no: "ইনভয়েস নং",
    student_id: "শিক্ষার্থী আইডি",
    student_name: "শিক্ষার্থীর নাম",
    phone: "মোবাইল",
    fee_type: "ফি টাইপ",
    amount: "এমাউন্ট",
    status: "স্ট্যাটাস",
    date: "তারিখ",
  },
  {
    key: 1,
    serial: 2,
    invoice_no: "ইনভয়েস নং",
    student_id: "শিক্ষার্থী আইডি",
    student_name: "শিক্ষার্থীর নাম",
    phone: "মোবাইল",
    fee_type: "ফি টাইপ",
    amount: "এমাউন্ট",
    status: "স্ট্যাটাস",
    date: "তারিখ",
  },
  {
    key: 2,
    serial: 3,
    invoice_no: "ইনভয়েস নং",
    student_id: "শিক্ষার্থী আইডি",
    student_name: "শিক্ষার্থীর নাম",
    phone: "মোবাইল",
    fee_type: "ফি টাইপ",
    amount: "এমাউন্ট",
    status: "স্ট্যাটাস",
    date: "তারিখ",
  },
  {
    key: 3,
    serial: 4,
    invoice_no: "ইনভয়েস নং",
    student_id: "শিক্ষার্থী আইডি",
    student_name: "শিক্ষার্থীর নাম",
    phone: "মোবাইল",
    fee_type: "ফি টাইপ",
    amount: "এমাউন্ট",
    status: "স্ট্যাটাস",
    date: "তারিখ",
  },
  {
    key: 4,
    serial: 5,
    invoice_no: "ইনভয়েস নং",
    student_id: "শিক্ষার্থী আইডি",
    student_name: "শিক্ষার্থীর নাম",
    phone: "মোবাইল",
    fee_type: "ফি টাইপ",
    amount: "এমাউন্ট",
    status: "স্ট্যাটাস",
    date: "তারিখ",
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

const StudentFeesTable = () => {
  const handleDelete = () => {
   confirm_modal("You want to delete Category!") 
  };

  return (
    <div>
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
              title: "ইনভয়েস নং",
              dataIndex: "invoice_no",
              key: "key",
              width: 150,
            },
            {
              title: "শিক্ষার্থী আইডি",
              dataIndex: "student_id",
              key: "key",
              width: 150,
            },
            {
              title: "শিক্ষার্থীর নাম",
              width: 100,
              dataIndex: "student_name",
              key: "key",
              width: 150,
              ellipsis: true,
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
              title: "ফি টাইপ",
              width: 100,
              dataIndex: "fee_type",
              key: "key",
              width: 150,
              ellipsis: true,
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
              title: "স্ট্যাটাস",
              width: 100,
              dataIndex: "status",
              key: "key",
            },
            {
              title: "তারিখ",
              width: 100,
              dataIndex: "date",
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
                          <Link href={`student-fees/view/1`}>View</Link>
                        </Menu.Item>
                        <Menu.Item
                          key="edit"
                          onClick={() => {
                            // Handle edit logic here
                          }}
                        >
                          <Link href={`student-fees/edit/1`}>Edit</Link>
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
    </div>
  );
};

export default StudentFeesTable;
