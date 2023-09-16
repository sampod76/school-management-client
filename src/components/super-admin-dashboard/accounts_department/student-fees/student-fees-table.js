import { ENUM_STATUS } from "@/const/userConstant";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";

const data = [
  {
    key: 0,
    serial: 1,
    invoice_no: "I" + "-" + 210411,
    student_id: "S" + "-" + 210411,
    // student_id: "শিক্ষার্থী আইডি",
    student_name: "হাসান",
    phone: "015741100542",
    fee_type: "মাসিক বেতন",
    amount: "300",
    status: ENUM_STATUS.ACTIVE,
    date: englishDataToBangle(new Date(Date.now()).toLocaleDateString()),
  },
  {
    key: 1,
    serial: 2,
    invoice_no: "I" + "-" + 210411,
    student_id: "S" + "-" + 210411,
    // student_id: "শিক্ষার্থী আইডি",
    student_name: "কামাল ",
    phone: "015741100542",
    fee_type: "মাসিক বেতন",
    amount: "3600",
    status: ENUM_STATUS.ACTIVE,
    date: englishDataToBangle(new Date(Date.now()).toLocaleDateString()),
  },
  {
    key: 2,
    serial: 3,
    invoice_no: "I" + "-" + 210411,
    student_id: "S" + "-" + 210411,
    // student_id: "শিক্ষার্থী আইডি",
    student_name: "জামাল",
    phone: "015741100542",
    fee_type: "মাসিক বেতন",
    amount: "200",
    status: ENUM_STATUS.ACTIVE,
    date: englishDataToBangle(new Date(Date.now()).toLocaleDateString()),
  },
  {
    key: 3,
    serial: 4,
    invoice_no: "I" + "-" + 210411,
    student_id: "S" + "-" + 210411,
    // student_id: "শিক্ষার্থী আইডি",
    student_name: "করিম ",
    phone: "015741100542",
    fee_type: "মাসিক বেতন",
    amount: "300",
    status: ENUM_STATUS.ACTIVE,
    date: englishDataToBangle(new Date(Date.now()).toLocaleDateString()),
  },
  {
    key: 4,
    serial: 5,
    invoice_no: "I" + "-" + 210411,
    student_id: "S" + "-" + 210411,
    // student_id: "শিক্ষার্থী আইডি",
    student_name: "রহিম ",
    phone: "015741100542",
    fee_type: "মাসিক বেতন",
    amount: "500",
    status: ENUM_STATUS.ACTIVE,
    date: englishDataToBangle(new Date(Date.now()).toLocaleDateString()),
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
    confirm_modal("You want to delete Category!");
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
