import { Space, Table } from "antd";
import { AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFilePdf } from "react-icons/fa";
import { FiColumns, FiPrinter } from "react-icons/fi";
import { ImCopy } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const columns = [
  {
    title: "Disable Reason",
    dataIndex: "category",
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
    title: "Disable From ",
    dataIndex: "fromDate",
    sorter: (a, b) => a.CategoryId - b.CategoryId,
  },
  {
    title: "Disable To ",
    dataIndex: "toDate",
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
    category: "Fees Not Paid",
    fromDate: "6th May,2023",
    toDate: "9th May,2023",
  },
  {
    key: "2",
    category: "Regular Absent",
    fromDate: "6th May,2023",
    toDate: "9th May,2023",
  },
];

const DisableStudent = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-[35%] w-full py-3 mx-2">
          <form className="bg-white space-y-2">
            <p className="text-xl font-semibold p-4">Add Disable Reason</p>
            <div className="text-gray-500  w-full">
              <hr />
            </div>

            <div className="space-y-2 px-4 pt-2">
              <p className="font-semibold text-lg">
                Disable Reason <span className="text-red-600">*</span>
              </p>
              <input
                className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-10"
                type="text"
              />
            </div>

            <div className="text-gray-600 py-2 ">
              <hr />
            </div>

            <div className="flex justify-end items-center mr-4 pb-4">
              <button className="px-4 text-lg hover:bg-black py-1 text-white rounded bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </div>

        {/* existing postal dispatch  */}
        <div className="lg:w-[65%] w-full py-3 mx-2">
          <div className="bg-white ">
            <h1 className="text-xl font-semibold p-4">Disable Reason List</h1>
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
      </div>
    </>
  );
};

export default DisableStudent;
