import { Space, Table } from "antd";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const { Column } = Table;

const columns = [
  {
    title: "Title",
    dataIndex: "title",
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
    title: "Message ",
    dataIndex: "message",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },

  {
    title: "একশন",
    key: "action",
    style: { padding: "5px 5px" },
    render: () => (
      <Space size="small">
        <MdModeEdit data-te-toggle="tooltip" title="Columns" />
        <RxCross2 data-te-toggle="tooltip" title="Columns" />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    title: "New Academic Session(2023-24)",
    message:
      " Ads jhbc djhfkdklhv dvjh kldsjhn kjsgbv djkhfoihgvohgoh jbhgvorhgviob jbhgvohgv jegvhsngvfwe jegfvuiowbej jbgfevuwhbegv jhebgvuhbf kzudhfgoiwejhv dskugviohnve",
  },
  {
    key: "2",
    title: "Independence Day",
    message:
      " Ads jhbc djhfkdklhv dvjh kldsjhn kjsgbv djkhfoihgvohgoh jbhgvorhgviob jbhgvohgv jegvhsngvfwe jegfvuiowbej jbgfevuwhbegv jhebgvuhbfv",
  },
];

const AllEmailReportTable = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="col-span-2 ms-0 md:ms-4">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default AllEmailReportTable;
