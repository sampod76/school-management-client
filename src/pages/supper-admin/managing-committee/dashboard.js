import ManagingCommitteeTable from "@/components/managing-comittee/managing-comittee-notice-table";
import contentData from "@/components/super-admin-dashboard/Dashboard/contentData";
import EventTable from "@/components/super-admin-dashboard/Dashboard/event-table";
import NoticeTable from "@/components/super-admin-dashboard/Dashboard/notice-table";
import { Card, DatePicker, Select, Space } from "antd";

import Link from "next/link";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const { RangePicker } = DatePicker;

// const chartData = [100, 450, 200, 750, 300, 350, 200, 100, 500, 150, 500, 650];
// const doughnutChart = {
//   labels: ["Category A", "Category B", "Category C", "Category D"],
//   values: [25, 30, 20, 15],
//   colors: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF66"],
// };
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const ManagingDashboard = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };


  const contentData = [
    {
      title: "উপস্থিত শিক্ষার্থী",
      number: "২৩০",
      text: "সকল উপস্থিত শিক্ষার্থী",
    },
    {
      title: "অনুপস্থিত শিক্ষার্থী",
      number: "২৩",
      text: " সকল অনুপস্থিত শিক্ষার্থী",
    },
  
    {
      title: "উপস্থিত শিক্ষক",
      number: "৩০",
      text: "সকল উপস্থিত শিক্ষক",
    },
    {
      title: "অনুপস্থিত শিক্ষক",
      number: "২৩",
      text: " সকল অনুপস্থিত শিক্ষক",
    },
  
    {
      title: "অনলাইন এসাইনমেন্ট",
      number: "৪৭",
      text: "সকল এসাইনমেন্ট দেখুন",
    },
    {
      title: "অনলাইন আবেদন",
      number: "২৩",
      text: "সকল আবেদনপত্র দেখুন",
    },
    {
      title: "আজকের আয়",
      number: "৩২,৪০৪.০০",
      text: "আজকের সকল আয়",
    },
    {
      title: "আজকের ব্যয়",
      number: "১২,৭৩৪.০০",
      text: "আজকের সকল ব্যয়",
    }
  ];
  
 
  
  return (
    <div className=" bg-slate-200 p-2">
      <div className=" grid grid-cols-1 md:grid-cols-3 pt-4 mb-4 justify-between px-2">
        <div className=" col-span-2 ms-2 text-lg font-bold space-y-2">
        <p className=" text-gray-500">
            শুভ সকাল, <br />
            আজ রবিবার, ২৭শে আগস্ট, ২০২৩ ইং
          </p>
          <h1 className=" text-2xl pt-4 text-center lg:text-start">
          ম্যানেজিং কমিটি'র ড্যাশবোর্ড 
          </h1>
        </div>

        <div className="my-4 text-center lg:text-end">
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          {/* <div className="flex ms-2 items-center bg-teal-100 text-teal-400 px-4 py-1 rounded">
            <BsPlusSquareFill className="me-2 "></BsPlusSquareFill>Add Product
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ms-2">
        {contentData.map((data, index) => (
          <div
            key={index}
            className={`bg-white rounded p-4 me-2 ${
              index % 8 === 4 ? "mb-8" : ""
            } ${index % 8 === 5 ? "mb-8" : ""} ${
              index % 8 === 6 ? "mb-8" : ""
            } ${index % 8 === 7 ? "mb-8" : ""}`}
          >
            <div className="flex  text-sm justify-start">
              <p className="text-xl">{data.title}</p>
            </div>
            <div className="pt-4 font-semibold text-2xl"> {data.number}</div>
            <div className="flex items-center  text-sm justify-between pt-4">
              <Link
                href={
                  data.textLink
                    ? data.textLink
                    : "/supper-admin/teacher-corner/teacher-absent"
                }
              >
                <span> {data.text}</span>
              </Link>
              <div className=" text-teal-600 bg-teal-100 p-3">
                <MdOutlineAccountBalanceWallet></MdOutlineAccountBalanceWallet>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 ms-2 my-4">
        <div>
          <Card
            title="নোটিশ"
            extra={
              <span className=" p-3">
                <Link href="/supper-admin/communicate/add-notice">
                  <span className="font-bold">নতুন নোটিশ </span>
                </Link>
              </span>
            }
            style={{
              width: "100%",
            }}
          >
            <ManagingCommitteeTable></ManagingCommitteeTable>
            <Link href="/supper-admin/communicate/all-notice">
              <p className="text-center  font-bold">সকল নোটিশ</p>
            </Link>
          </Card>
        </div>

        <div>
          <Card
            title="আসন্ন ইভেন্টস"
            extra={
              <span className=" p-3">
                <span className="font-bold">Sort By : </span>
                <Select
                  className=" border-none"
                  labelInValue
                  defaultValue={{
                    value: "lucy",
                    label: "Lucy (101)",
                  }}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack (100)",
                    },
                    {
                      value: "lucy",
                      label: "Lucy (101)",
                    },
                  ]}
                />
              </span>
            }
            style={{
              width: "100%",
            }}
          >
            <EventTable />
            <Link href="/supper-admin/communicate/all-notice">
              <p className="text-center  font-bold">সকল ইভেন্টস</p>
            </Link>
          </Card>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 ms-2 py-4">
        <div className="bg-white ">
          <DoughnutChart data={doughnutChart} />
        </div>
        <div className="mx-2 col-span-2">
          <div>
            <Card
              title="আসন্ন ইভেন্টস"
              extra={
                <div className="flex ms-2 items-center bg-teal-100 text-teal-400 px-4 py-1 rounded">
                  <HiOutlineDocumentReport className="me-2"></HiOutlineDocumentReport>{" "}
                  Generate Report
                </div>
              }
              style={{
                width: "100%",
              }}
            >
              <Table
                className=" bg-white"
                columns={columns}
                dataSource={data}
              />
            </Card>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ManagingDashboard;
