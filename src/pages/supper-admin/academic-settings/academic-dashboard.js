import React from "react";
import BoardNotice from "@/components/academic/AcademicDashboard/BoardNotice";
import CurriculumInfo from "@/components/academic/AcademicDashboard/CurriculumInfo";
import MPOInformation from "@/components/academic/AcademicDashboard/MPOInformation";

const AcademicDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-center text-3xl font-semibold mb-10">
        একাডেমিক ড্যাশবোর্ড
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">এমপিও তথ্য</h2>
          <MPOInformation />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            বোর্ড নোটিশ
          </h2>
          <BoardNotice />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            শিক্ষাক্রম তথ্য
          </h2>
          <CurriculumInfo />
        </div>
      </div>
    </div>
  );
};

export default AcademicDashboard;
