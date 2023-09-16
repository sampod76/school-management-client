const { Column } = Table;
import { Space, Table } from "antd";
import { MdModeEdit } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
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
    title: "Phone ",
    dataIndex: "phone",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Source",
    dataIndex: "source",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Enquiry Date",
    dataIndex: "enquiry_date",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Last Follow Up Date",
    dataIndex: "last_follow_up_date",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Next Follow Up Date",
    dataIndex: "next_follow_up_date",
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
        <MdModeEdit data-te-toggle="tooltip" title="Columns" />
        <RxCross2 data-te-toggle="tooltip" title="Columns" />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John",
    phone: 7353645086,
    source: "Google Ads",
    enquiry_date: "08th March, 2018",
    last_follow_up_date: "09th March, 2018",
    next_follow_up_date: "11th March, 2018",
    status: "Active",
  },
  {
    key: "2",
    name: "John",
    phone: 7353645086,
    source: "Google Ads",
    enquiry_date: "08th March, 2018",
    last_follow_up_date: "09th March, 2018",
    next_follow_up_date: "11th March, 2018",
    status: "Active",
  },
  {
    key: "3",
    name: "John",
    phone: 7353645086,
    source: "Google Ads",
    enquiry_date: "08th March, 2018",
    last_follow_up_date: "09th March, 2018",
    next_follow_up_date: "11th March, 2018",
    status: "Passive",
  },
  {
    key: "4",
    name: "Jim",
    phone: 7353645086,
    source: "Google Ads",
    enquiry_date: "08th March, 2018",
    last_follow_up_date: "09th March, 2018",
    next_follow_up_date: "11th March, 2018",
    status: "Active",
  },
];

const AdmissionEnquiryTable = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="col-span-2 ms-0 md:ms-4">
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default AdmissionEnquiryTable;
