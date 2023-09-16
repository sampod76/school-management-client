const { Column } = Table;
import { Space, Table } from "antd";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const columns = [
  {
    title: "Staff",
    dataIndex: "staff",
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
    title: "Leave Type ",
    dataIndex: "leave_type",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Leave Date ",
    dataIndex: "leave_date",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Days",
    dataIndex: "days",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Apply Date",
    dataIndex: "apply_date",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "একশন",
    key: "action",
    style: { padding: "5px 5px" },
    render: () => (
      <Space size="small">
        <RxHamburgerMenu data-te-toggle="tooltip" title="Columns" />
        <RxCross2 data-te-toggle="tooltip" title="Columns" />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    staff: "John",
    leave_type: "Casual Leave",
    leave_date: "08th March, 2018",
    days: 3,
    apply_date: "09th March, 2018",
    status: "Active",
  },
  {
    key: "2",
    staff: "John",
    leave_type: "Medical Leave",
    leave_date: "08th March, 2018",
    days: 4,
    apply_date: "09th March, 2018",
    status: "Active",
  },
  {
    key: "3",
    staff: "Jim",
    leave_type: "Casual Leave",
    leave_date: "08th March, 2018",
    days: 3,
    apply_date: "09th March, 2018",
    status: "Passive",
  },
];

const AddLeaveRequestTable = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="col-span-2 ms-0 md:ms-4">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default AddLeaveRequestTable;
