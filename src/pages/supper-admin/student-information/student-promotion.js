import { Select } from "antd";
import React from "react";

const StudentPromotionPage = () => {
  return (
    <div style={{ backgroundColor: "#F3F4F6", padding: "10px" }}>
      <h1 className="text-3xl font-bold ml-2 mt-8">পুনঃনির্বাচন তালিকা</h1>
      <div className="bg-white  mt-12">
        <p className="text-xl font-semibold p-4">
          শিক্ষার্থী পুনঃনির্বাচন/শিক্ষার্থী প্রমোশন
        </p>
        <div className="text-gray-500  w-full">
          <hr />
        </div>

        <div className="p-4">
          <form className="bg-white space-y-2">
            <div className="w-full py-3 mx-2">
              <div className="lg:flex">
                <div className="space-y-2 px-4 pt-2 w-full">
                  <p className="font-semibold text-lg">
                    শ্রেণী <span className="text-red-600">*</span>
                  </p>

                  <Select
                    placeholder="শ্রেনি নির্বাচন করুন"
                    style={{
                      minWidth: "100%",
                      minHeight: "10%",
                    }}
                  >
                    <Select.Option value="">শ্রেনি নির্বাচন করুন</Select.Option>
                    <Select.Option value="6">ষষ্ঠ শ্রেণি</Select.Option>
                    <Select.Option value="7">সপ্তম শ্রেণী</Select.Option>
                    <Select.Option value="8">অষ্টম শ্রেণী</Select.Option>
                    <Select.Option value="9">নবম শ্রেণী</Select.Option>
                    <Select.Option value="10">দশম শ্রেণী</Select.Option>
                    {/* Add other division options here */}
                  </Select>
                </div>

                <div className="space-y-2 px-4 pt-2 w-full">
                  <p className="font-semibold text-lg">
                    শাখা <span className="text-red-600">*</span>
                  </p>
                  {/* <input
                    className=" border  border-gray-200  focus:border-blue-400 outline-none w-full h-10"
                    type="text"
                  /> */}
                  <Select
                    placeholder="শাখা নির্বাচন করুন"
                    style={{
                      minWidth: "100%",
                      minHeight: "10%",
                    }}
                  >
                    <Select.Option value="">শাখা নির্বাচন করুন</Select.Option>
                    <Select.Option value="A">A শাখা</Select.Option>
                    <Select.Option value="B">B শাখা</Select.Option>
                    <Select.Option value="C">C শাখা</Select.Option>
                    <Select.Option value="D">D শাখা</Select.Option>গ{" "}
                    {/* Add other division options here */}
                  </Select>
                </div>
              </div>

              <p className="text-3xl py-8 mx-2">
                পরবর্তি সেশনে শিক্ষার্থীদের উন্নীত করুন
              </p>

              <div className="lg:flex">
                <div className="space-y-2 px-4 pt-2 w-full">
                  <p className="font-semibold text-lg">
                    সেশন উন্নীত করুন <span className="text-red-600">*</span>
                  </p>
                  <Select
                    placeholder="সেশন উন্নীত করুন"
                    style={{
                      minWidth: "100%",
                      minHeight: "10%",
                    }}
                  >
                    <Select.Option value="">সেশন উন্নীত করুন</Select.Option>
                    <Select.Option value="2023">2023 বর্তমান</Select.Option>
                    <Select.Option value="2024">2024</Select.Option>
                    <Select.Option value="2025">2025</Select.Option>
                    <Select.Option value="2026">2026</Select.Option>গ{" "}
                    {/* Add other division options here */}
                  </Select>
                </div>

                <div className="space-y-2 px-4 pt-2 w-full">
                  <p className="font-semibold text-lg">
                    ক্লাস উন্নিত করুন <span className="text-red-600">*</span>
                  </p>
                  <Select
                    placeholder="শ্রেনি নির্বাচন করুন"
                    style={{
                      minWidth: "100%",
                      minHeight: "10%",
                    }}
                  >
                    <Select.Option value="">শ্রেনি নির্বাচন করুন</Select.Option>
                    <Select.Option value="6">ষষ্ঠ শ্রেণি</Select.Option>
                    <Select.Option value="7">সপ্তম শ্রেণী</Select.Option>
                    <Select.Option value="8">অষ্টম শ্রেণী</Select.Option>
                    <Select.Option value="9">নবম শ্রেণী</Select.Option>
                    <Select.Option value="10">দশম শ্রেণী</Select.Option>
                    {/* Add other division options here */}
                  </Select>
                </div>

                <div className="space-y-2 px-4 pt-2 w-full">
                  <p className="font-semibold text-lg">
                    সেকশনে উন্নীত করুন <span className="text-red-600">*</span>
                  </p>
                  <Select
                    placeholder="শাখা নির্বাচন করুন"
                    style={{
                      minWidth: "100%",
                      minHeight: "10%",
                    }}
                  >
                    <Select.Option value="">শাখা নির্বাচন করুন</Select.Option>
                    <Select.Option value="A">A শাখা</Select.Option>
                    <Select.Option value="B">B শাখা</Select.Option>
                    <Select.Option value="C">C শাখা</Select.Option>
                    <Select.Option value="D">D শাখা</Select.Option>গ{" "}
                    {/* Add other division options here */}
                  </Select>
                </div>
              </div>

              <div className="flex justify-end items-center mr-4 pb-4">
                <button className="px-4 text-lg w-32 h-12 py-1 mt-10 text-white rounded bg-gradient-to-r from-purple-900 to-indigo-700 flex items-center justify-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span> অনুসন্ধান</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPromotionPage;
