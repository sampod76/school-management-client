import TodaysTimeTable from "@/components/student-information/TodaysTimeTable";
import Attendance from "@/components/student-information/student-details/Attendance";
import { Avatar, Progress, Space } from "antd";
import React from "react";
import Supper_admin_dashboard from "../dashboard";

const StudentDashboard = () => {
  return (
    <Supper_admin_dashboard />
    // <div className="lg:flex items-start">
    //   {/* width 70%  */}
    //   <div className="lg:w-[75%]">
    //     <Attendance />
    //     <TodaysTimeTable />
    //   </div>
    //   {/* width 30%  */}
    //   <div className="mt-4 lg:w-[23%] m-2">
    //     <div>
    //       <h1 className="text-2xl font-bold mb-2">Announcement</h1>
    //       <div className="p-6 rounded-lg bg-white">
    //         <p className="font-bold my-1">
    //           Academic:{" "}
    //           <span className="font-normal text-gray-600">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
    //             necessitatibus?
    //           </span>
    //         </p>

    //         <p className="font-bold my-1">
    //           Co-curricular:{" "}
    //           <span className="font-normal text-gray-600">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
    //             necessitatibus?
    //           </span>
    //         </p>

    //         <p className="font-bold my-1">
    //           Examination:{" "}
    //           <span className="font-normal text-gray-600">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
    //             necessitatibus?
    //           </span>
    //         </p>
    //       </div>
    //     </div>

    //     <div className="mt-8">
    //       <h1 className="text-2xl font-bold mb-2">Teacher's on leave</h1>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-1">
    //         <div className="p-6 rounded-lg bg-white flex items-center justify-start gap-4 mb-2">
    //           <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full">
    //             <span className="text-white text-lg font-semibold">JD</span>
    //           </div>
    //           <div>
    //             <h1 className="font-bold text-xl">The Professor</h1>
    //             <p className="font-semibold">Full Duty</p>
    //           </div>
    //         </div>

    //         <div className="p-6 rounded-lg bg-white flex items-center justify-start gap-4 mb-2">
    //           <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full">
    //             <span className="text-white text-lg font-semibold">JD</span>
    //           </div>
    //           <div>
    //             <h1 className="font-bold text-xl">The Professor</h1>
    //             <p className="font-semibold">Full Duty</p>
    //           </div>
    //         </div>

    //         <div className="p-6 rounded-lg bg-white flex items-center justify-start gap-4 mb-2">
    //           <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full">
    //             <span className="text-white text-lg font-semibold">JD</span>
    //           </div>
    //           <div>
    //             <h1 className="font-bold text-xl">The Professor</h1>
    //             <p className="font-semibold">Full Duty</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StudentDashboard;
