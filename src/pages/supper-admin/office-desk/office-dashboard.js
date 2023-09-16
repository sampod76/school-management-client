import { DatePicker, Space, Spin } from "antd";
import Link from "next/link";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import DeshbordLoading from "@/components/loader/deshbordLoading";
import { useGetAllAssignedWorkQuery } from "@/redux/features/work-assign/workAssignAPI";
import { useGetAllWorkPlanQuery } from "@/redux/features/workPlan/workPlan";
import { useGetAllEventQuery } from "@/redux/features/event/eventApi";
import { useGetNoticesQuery } from "@/redux/features/notices/noticesApi";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const { RangePicker } = DatePicker;

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const OfficeDashboard = ({ serverTime }) => {
  const { data: assignedWorkedData, isLoading: assignedWorkLoading } =
    useGetAllAssignedWorkQuery();
  const { data: eventData, isLoading: eventLoading } = useGetAllEventQuery();
  const { data: allWorkPlanData, isLoading: workPlanLoading } =
    useGetAllWorkPlanQuery();

  const { data: noticeData, isLoading: noticeLoading } = useGetNoticesQuery();

  if (noticeLoading || eventLoading || workPlanLoading || assignedWorkLoading) {
    return <DeshbordLoading />;
  }

  const totalWorkPlan = allWorkPlanData.data.length;
  const totalAssignWork = assignedWorkedData.data.length;
  const totalEvents = eventData.data.length;
  const totalNotice = noticeData.data.length;

  const contentData = [
    {
      title: "অনলাইন আবেদন",
      number: "২৩",
      text: "সকল আবেদনপত্র দেখুন",
      textLink: "/supper-admin/office-desk/online-application",
    },
    {
      title: "নোটিশ/বিজ্ঞপ্তি",
      number: totalNotice ? totalNotice : "0",
      text: "সকল নোটিশ/বিজ্ঞপ্তি",
      textLink: "/supper-admin/office-desk/office-notice",
    },

    {
      title: "কর্ম-পরিকল্পনা",
      number: totalWorkPlan ? totalWorkPlan : "0",
      text: "সকল কর্ম-পরিকল্পনা দেখুন",
      textLink: "/supper-admin/office-desk/work-plan",
    },
    {
      title: "প্রতিষ্ঠানের মিটিং",
      number: "১২",
      text: "সকল মিটিংগুলো দেখুন",
      textLink: "/supper-admin/office-desk/organization-meeting",
    },
    {
      title: "আজকের কাজ",
      number: totalAssignWork ? totalAssignWork : "0",
      text: "আজকের কাজগুলো দেখুন",
      textLink: "/supper-admin/office-desk/work-assign",
    },
    {
      title: "আসন্ন ইভেন্ট",
      number: totalEvents ? totalEvents : "0",
      text: "আসন্ন ইভেন্ট-সমূহ",
      textLink: "/supper-admin/office-desk/event",
    },

    {
      title: "অভিভাবক সম্মেলন",
      number: "৩২০",
      text: "সকল অভিভাবক সম্মেলন",
      textLink: "",
    },
    {
      title: "অফিস রিপোর্ট",
      number: "১৬",
      text: "সকল অফিস রিপোর্ট",
      textLink: "",
    },

    // Add more data objects as needed
  ];

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "শুভ সকাল";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "শুভ দুপুর";
    } else if (currentHour >= 17 && currentHour < 20) {
      return "শুভ সন্ধ্যা";
    } else {
      return "শুভ রাত্রি";
    }
  };

  return (
    <div className=" bg-slate-200 h-screen">
      <div className=" grid grid-cols-1 md:grid-cols-3 pt-4 mb-4 justify-between px-2">
        <div className=" col-span-2 ms-2 text-lg font-bold space-y-2">
          <p className="text-gray-500">
            {getGreetingMessage()}
            <br />
            আজ {serverTime}
          </p>
          <h1 className=" text-2xl pt-4 text-center lg:text-start">
            আজকের আপডেট।
          </h1>
        </div>

        <div className="my-4 text-center lg:text-end">
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
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
                    : "/supper-admin/office-desk/office-dashboard"
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
    </div>
  );
};

export async function getServerSideProps() {
  const currentDate = new Date();
  const serverTime = currentDate.toLocaleString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    props: {
      serverTime,
    },
  };
}

export default OfficeDashboard;

// old version=============================
// import React from "react";
// import { Card, DatePicker, Progress, Select, Space, Table, Tag } from "antd";
// import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

// import { HiOutlineDocumentReport } from "react-icons/hi";
// import Link from "next/link";
// import { AiOutlineDollar } from "react-icons/ai";

// import GoogleMapReact from "google-map-react";

// import IncomeExpenseLineChart from "@/components/office-desk/office-dashboard/IncomeExpenseLineChart";
// import OfficeDoughnutChart from "@/components/office-desk/office-dashboard/OfficeDoughnutChart";
// import TodayIncomeExpenseDoughnutChart from "@/components/office-desk/office-dashboard/TodayIncomeExpenseDoughnutChart";
// import Supper_admin_dashboard from "../dashboard";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const { RangePicker } = DatePicker;

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

// const doughnutChart = {
//   labels: ["Category A", "Category B", "Category C", "Category D"],
//   values: [25, 30, 20, 15],
//   colors: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF66"],
// };
// const handleChange = (value) => {
//   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
// };

// const OfficeDashboard = () => {
//   const todayIncome = 150;
//   const todayExpense = 75;
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };
//   return (

//     <div className=" bg-slate-200">
//       <div className=" grid grid-cols-1 md:grid-cols-3 pt-4 mb-4 ">
//         <div className=" col-span-2 ms-2">
//           <h1 className="text-2xl font-bold">অফিস ড্যাশবোর্ড </h1>
//         </div>
//         <div className="grid grid-cols-1  items-center">
//           <Space direction="vertical" size={12}>
//             <RangePicker />
//           </Space>
//           {/* <div className="flex ms-2 items-center bg-teal-100 text-teal-400 px-4 py-1 rounded">
//             <BsPlusSquareFill className="me-2 "></BsPlusSquareFill>Add Product
//           </div> */}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 ms-2">
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>মোট ব্যালেন্স</p>
//             <p className="flex items-center text-teal-600">
//               <span className="me-2">
//                 <BsArrowUpRight></BsArrowUpRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               সর্বমোট প্রতিষ্ঠানের ব্যালেন্স
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>দৈনিক আয়</p>
//             <p className="flex items-center text-teal-600">
//               <span className="me-2">
//                 <BsArrowUpRight></BsArrowUpRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               আজকের সকল আয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>সাপ্তাহিক আয়</p>
//             <p className="flex items-center text-teal-600">
//               <span className="me-2">
//                 <BsArrowUpRight></BsArrowUpRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               সাপ্তাহিক সকল আয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>মাসিক আয়</p>
//             <p className="flex items-center text-teal-600">
//               <span className="me-2">
//                 <BsArrowUpRight></BsArrowUpRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               মাসিক সকল আয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>বার্ষিক আয়</p>
//             <p className="flex items-center text-teal-600">
//               <span className="me-2">
//                 <BsArrowUpRight></BsArrowUpRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               বার্ষিক সকল আয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>দৈনিক ব্যয়</p>
//             <p className="flex items-center text-red-600">
//               <span className="me-2">
//                 <BsArrowDownRight></BsArrowDownRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               আজকের সকল ব্যয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>সাপ্তাহিক ব্যয়</p>
//             <p className="flex items-center text-red-600">
//               <span className="me-2">
//                 <BsArrowDownRight></BsArrowDownRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               সাপ্তাহিক সকল ব্যয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>মাসিক ব্যয়</p>
//             <p className="flex items-center text-red-600">
//               <span className="me-2">
//                 <BsArrowDownRight></BsArrowDownRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               মাসিক সকল ব্যয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//         <div className=" bg-white rounded p-4 me-2">
//           <div className="flex items-center justify-between">
//             <p>বার্ষিক ব্যয়</p>
//             <p className="flex items-center text-red-600">
//               <span className="me-2">
//                 <BsArrowDownRight></BsArrowDownRight>
//               </span>
//               +16.24 %
//             </p>
//           </div>
//           <div className="pt-4 font-bold"> $ 559.25 K</div>
//           <div className="flex items-center justify-between pt-4">
//             {" "}
//             <Link href={"#"} className=" underline">
//               বার্ষিক সকল ব্যয়-সমূহ
//             </Link>
//             <div className=" text-teal-600 bg-teal-100 p-3">
//               <AiOutlineDollar></AiOutlineDollar>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 ms-2">
//         <div className=" col-span-2 bg-white">
//           <IncomeExpenseLineChart />
//         </div>
//         <div className="mx-2">
//           {" "}
//           <Card
//             title="আজকের আয় এবং ব্যয়"
//             extra={
//               <span className="text-gray-600 bg-gray-100 p-3">
//                 Export Report
//               </span>
//             }
//             style={{
//               width: "100%",
//             }}
//           >
//             <div>
//               <TodayIncomeExpenseDoughnutChart
//                 income={todayIncome}
//                 expense={todayExpense}
//               />
//             </div>
//           </Card>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 ms-2 my-4">
//         <div>
//           <Card
//             title="Best Selling Product"
//             extra={
//               <span className=" p-3">
//                 <span className="font-bold">Sort By : </span>
//                 <Select
//                   className=" border-none"
//                   labelInValue
//                   defaultValue={{
//                     value: "lucy",
//                     label: "Lucy (101)",
//                   }}
//                   style={{
//                     width: 120,
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack (100)",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy (101)",
//                     },
//                   ]}
//                 />
//               </span>
//             }
//             style={{
//               width: "100%",
//             }}
//           >
//             <Table className=" bg-white" columns={columns} dataSource={data} />
//           </Card>
//         </div>
//         <div>
//           <Card
//             title="Top Seller"
//             extra={
//               <span className=" p-3">
//                 <span className="font-bold">Sort By : </span>
//                 <Select
//                   className=" border-none"
//                   labelInValue
//                   defaultValue={{
//                     value: "lucy",
//                     label: "Lucy (101)",
//                   }}
//                   style={{
//                     width: 120,
//                   }}
//                   onChange={handleChange}
//                   options={[
//                     {
//                       value: "jack",
//                       label: "Jack (100)",
//                     },
//                     {
//                       value: "lucy",
//                       label: "Lucy (101)",
//                     },
//                   ]}
//                 />
//               </span>
//             }
//             style={{
//               width: "100%",
//             }}
//           >
//             <Table className=" bg-white" columns={columns} dataSource={data} />
//           </Card>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 ms-2 py-4">
//         <div className="bg-white ">
//           <OfficeDoughnutChart data={doughnutChart} />
//         </div>
//         <div className="mx-2 col-span-2">
//           <div>
//             <Card
//               title="Top Seller"
//               extra={
//                 <div className="flex ms-2 items-center bg-teal-100 text-teal-400 px-4 py-1 rounded">
//                   <HiOutlineDocumentReport className="me-2"></HiOutlineDocumentReport>{" "}
//                   Generate Report
//                 </div>
//               }
//               style={{
//                 width: "100%",
//               }}
//             >
//               <Table
//                 className=" bg-white"
//                 columns={columns}
//                 dataSource={data}
//               />
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>

//    // <Supper_admin_dashboard />

//   );
// };

// export default OfficeDashboard;
