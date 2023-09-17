import EventTable from "@/components/super-admin-dashboard/Dashboard/event-table";
import NoticeTable from "@/components/super-admin-dashboard/Dashboard/notice-table";
import { Card, DatePicker, Select, Space, Spin } from "antd";
import Link from "next/link";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import DeshbordLoading from "@/components/loader/deshbordLoading";
import {
  useGetAllIncomeQuery,
  useIncomeTimeRangeQuery,
} from "@/redux/features/income/incomeApi";
import { useExpenseTimeRangeQuery } from "@/redux/features/expense/expenseApi";
import { useGetAllAssignedWorkQuery } from "@/redux/features/work-assign/workAssignAPI";
import { useGetAllEventQuery } from "@/redux/features/event/eventApi";
import { useGetAllWorkPlanQuery } from "@/redux/features/workPlan/workPlan";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const { RangePicker } = DatePicker;

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const Supper_admin_dashboard = ({ serverTime }) => {
  const { data: assignedWorkedData, isLoading: assignedWorkLoading } =
    useGetAllAssignedWorkQuery();
  const { data: eventData, isLoading: eventLoading } = useGetAllEventQuery();
  const { data: allWorkPlanData, isLoading: workPlanLoading } =
    useGetAllWorkPlanQuery();

  const { data: allIncomeData, isLoading: incomeLoadingAll } =
    useGetAllIncomeQuery();

  const { data: dailyIncome, isLoading: incomeLoadingDaily } =
    useIncomeTimeRangeQuery("daily");
  const { data: weeklyIncome, isLoading: incomeLoadingWeekly } =
    useIncomeTimeRangeQuery("weekly");
  const { data: monthIncome, isLoading: incomeLoadingMonthly } =
    useIncomeTimeRangeQuery("monthly");
  const { data: yearlyIncome, isLoading: incomeLoadingYearly } =
    useIncomeTimeRangeQuery("yearly");

  const { data: dailyExpense, isLoading: expenseLoadingDaily } =
    useExpenseTimeRangeQuery("daily");
  const { data: weeklyExpense, isLoading: expenseLoadingWeekly } =
    useExpenseTimeRangeQuery("weekly");
  const { data: monthExpense, isLoading: expenseLoadingMonthly } =
    useExpenseTimeRangeQuery("monthly");
  const { data: yearlyExpense, isLoading: expenseLoadingYearly } =
    useExpenseTimeRangeQuery("yearly");

  if (
    eventLoading ||
    workPlanLoading ||
    assignedWorkLoading ||
    incomeLoadingDaily ||
    incomeLoadingWeekly ||
    incomeLoadingMonthly ||
    incomeLoadingYearly ||
    expenseLoadingDaily ||
    expenseLoadingWeekly ||
    expenseLoadingMonthly ||
    expenseLoadingYearly ||
    incomeLoadingAll
  ) {
    return <DeshbordLoading />;
  }

  const totalWorkPlan = allWorkPlanData?.data?.length;
  const totalAssignWork = assignedWorkedData?.data?.length;
  const totalEvents = eventData?.data?.length;

  const totalIncome = allIncomeData?.data?.reduce((total, income) => {
    return total + parseFloat(income.amount);
  }, 0);

  const calculateTotal = (data, key) => {
    return data?.data?.reduce((total, item) => {
      return total + parseFloat(item[key]);
    }, 0);
  };

  const totalDailyIncome = calculateTotal(dailyIncome["daily"], "amount");
  const totalWeeklyIncome = calculateTotal(weeklyIncome["weekly"], "amount");
  const totalMonthlyIncome = calculateTotal(monthIncome["monthly"], "amount");
  const totalYearlyIncome = calculateTotal(yearlyIncome["yearly"], "amount");

  const totalDailyExpense = calculateTotal(dailyExpense["daily"], "amount");
  const totalWeeklyExpense = calculateTotal(weeklyExpense["weekly"], "amount");
  const totalMonthlyExpense = calculateTotal(monthExpense["monthly"], "amount");
  const totalYearlyExpense = calculateTotal(yearlyExpense["yearly"], "amount");

  // const totalDailyIncome = dailyIncomeData?.data?.reduce((total, income) => {
  //   return total + parseFloat(income.amount);
  // }, 0);

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
      number: totalDailyIncome ? totalDailyIncome : "0",
      text: "আজকের সকল আয়",
    },

    {
      title: "আজকের ব্যয়",
      number: totalDailyExpense ? totalDailyExpense : "0",
      text: "আজকের সকল ব্যয়",
    },
    {
      title: "আজকের কাজ",
      number: totalAssignWork ? totalAssignWork : "0",
      text: "আজকের কাজগুলো দেখুন",
    },
    {
      title: "আসন্ন ইভেন্ট",
      number: totalEvents ? totalEvents : "0",
      text: "আসন্ন ইভেন্ট-সমূহ",
    },
    {
      title: "প্রতিষ্ঠানের মিটিং",
      number: "১২",
      text: "সকল মিটিংগুলো দেখুন",
    },
    {
      title: "কর্ম-পরিকল্পনা",
      number: totalWorkPlan ? totalWorkPlan : "0",
      text: "সকল কর্ম-পরিকল্পনা দেখুন",
    },
    {
      title: "দৈনিক ব্যয়",
      number: totalDailyExpense ? totalDailyExpense : "0",
      text: "আজকের সকল ব্যয়-সমূহ",
    },

    {
      title: "সাপ্তাহিক ব্যয়",
      number: totalWeeklyExpense ? totalWeeklyExpense : "0",
      text: "সাপ্তাহিক সকল ব্যয়-সমূহ",
    },
    {
      title: "মাসিক ব্যয়",
      number: totalMonthlyExpense ? totalMonthlyExpense : "0",
      text: "মাসিক সকল ব্যয়-সমূহ",
    },
    {
      title: "বার্ষিক ব্যয়",
      number: totalYearlyExpense ? totalYearlyExpense : "0",
      text: "বার্ষিক সকল ব্যয়-সমূহ",
    },
    {
      title: "দৈনিক আয়",
      number: totalDailyIncome ? totalDailyIncome : "0",
      text: "আজকের সকল আয়-সমূহ",
    },
    {
      title: "সাপ্তাহিক আয়",
      number: totalWeeklyIncome ? totalWeeklyIncome : "0",
      text: "সাপ্তাহিক সকল আয়-সমূহ",
    },
    {
      title: "মাসিক আয়",
      number: totalMonthlyIncome ? totalMonthlyIncome : "0",
      text: "মাসিক সকল আয়-সমূহ",
    },
    {
      title: "বার্ষিক আয়",
      number: totalYearlyIncome ? totalYearlyIncome : "0",
      text: "বার্ষিক সকল আয়-সমূহ",
    },
    {
      title: "মোট ব্যালেন্স",
      number: totalIncome ? totalIncome : "0",
      text: "সর্বমোট প্রতিষ্ঠানের ব্যালেন্স",
    },
    {
      title: "মোট শিক্ষার্থী",
      number: "৩২০",
      text: "সকল শিক্ষার্থীদের তালিকা",
    },
    {
      title: "মোট শিক্ষক",
      number: "১৬",
      text: "সকল শিক্ষকদের তালিকা",
    },
    {
      title: "মোট কর্মচারী",
      number: "০৬",
      text: "সকল কর্মচারীদের তালিকা",
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
    <div className=" bg-slate-200 ">
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
          {/* <div className="flex ms-2 items-center bg-teal-100 text-teal-400 px-4 py-1 rounded">
            <BsPlusSquareFill className="me-2 "></BsPlusSquareFill>Add Product
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 ms-2">
        {contentData.map((data, index) => (
          <div
            key={index}
            className={`bg-white  p-4 me-2 rounded-xl shadow-xl ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 ms-2  pb-6">
        <div className="">
          <Card
            title="নোটিশ"
            style={{
              width: "100%",
              height:"100%"
            }}
          >
            <NoticeTable />
            <Link href="/supper-admin/office-desk/office-notice">
              <p className="text-center  font-bold">সকল নোটিশ</p>
            </Link>
          </Card>
        </div>

        <div>
          <Card
            title="আসন্ন ইভেন্টস"
            style={{
              width: "100%",
              height:"100%"
            }}
          >
            <EventTable />
            <Link href="/supper-admin/office-desk/event">
              <p className="text-center  font-bold">সকল ইভেন্টস</p>
            </Link>
          </Card>
        </div>
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

export default Supper_admin_dashboard;
