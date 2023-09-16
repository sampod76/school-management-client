import React from "react";
import { Input } from "antd";

const EditSectionPage = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="lg:w-[35%] w-full py-3 mx-2">
          <form className="bg-white space-y-2 pb-4">
            <p className="text-xl font-semibold p-4">শাখা যুক্ত করুন</p>
            {/* ... rest of the form */}
            <div className="space-y-2 px-4 pt-2 w-full">
              <p className="font-semibold text-lg">
              শাখা নাম <span className="text-red-600">*</span>
              </p>
              <Input placeholder="শাখা নাম" />
            </div>
            <div className="flex justify-end items-center mr-4 pb-4">
              <button className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl">
                সংরক্ষণ করুন
              </button>
            </div>
            {/* ... rest of the form */}
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default EditSectionPage;
