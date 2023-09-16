import { Space, Table } from "antd";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiColumns, FiPrinter } from "react-icons/fi";
import { ImCopy } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

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
    title: "Leave Type",
    dataIndex: "leave_type",
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
    name: "John",
    leave_type: "Medical Leave  ",
  },
  {
    key: "2",
    name: "Jim",
    leave_type: "Casual Leave ",
  },
];

const LeaveTypeTable = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="lg:w-[65%] w-full py-3 mx-2">
      <div className="bg-white ">
        <h1 className="text-xl font-semibold p-4">Leave Type List</h1>
        <div className="text-gray-500  w-full mt-2">
          <hr />
        </div>

        <div className="flex lg:flex-row  flex-col-reverse   items-center justify-between px-4 py-4">
          {/* search input field  */}
          <input
            className="border-b border-gray-200 focus:border-blue-400 outline-none  h-8 p-3"
            type="text"
            placeholder="Search..."
          />

          {/* download data  */}
          <div className="border-b border-gray-200 focus:border-blue-400 outline-none flex items-center text-xl gap-2 pb-2 lg:px-2">
            <ImCopy data-te-toggle="tooltip" title="Copy" />
            <AiOutlineFileExcel data-te-toggle="tooltip" title="Excel" />
            <BsFiletypeCsv data-te-toggle="tooltip" title="CSV" />
            <FaRegFilePdf data-te-toggle="Pdf" title="Copy" />
            <FiPrinter data-te-toggle="tooltip" title="Printer" />
            <FiColumns data-te-toggle="tooltip" title="Columns" />
          </div>
        </div>

        {/* table  */}
        <div className="col-span-2 ms-0 md:ms-4">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default LeaveTypeTable;
