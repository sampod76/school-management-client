import Image from "next/image";
import React from "react";

const SecondTopHeader = () => {
  return (
    <div className="lg:w-[85%] w-full mx-auto">
      <div className="flex md:flex-row flex-col-reverse justify-between items-start  mt-4">
        <div className="lg:w-[68%] bg-[#F7F7F7] m-4">
          <div className="md:flex items-center justify-between pt-8 pb-4 px-4">
            <div className="md:w-[50%]">
              <div className="w-[90%] space-y-6">
                <h1 className="text-xl">হাজী আবুবকর সিদ্দিক আদর্শ উচ্চ বিদ্যালয়</h1>
                <p className="text-lg">
                  ১৯৯৮ সালে প্রতিষ্ঠিত হয় মুন্সিগঞ্জ জেলার সিরাজদিখান উপজেলার
                  বালুচর ইউনিয়নের কালীনগরে চর এলাকার স্বনামধন্য উচ্চ বিদ্যালয়;-
                  "হাজী আবুবকর সিদ্দিক উচ্চ বিদ্যালয়"। প্রতিষ্ঠাকাল থেকেই বেশ
                  সুনামের সাথে শিক্ষা কার্যক্রম চালিয়ে যাচ্ছে স্কুলটি...
                </p>
                <button className="bg-red-600 text-white text-center py-1 text-xl w-36">
                  বিস্তারিত
                </button>
              </div>
            </div>
            <div className="md:w-[50%] md:pt-0 pt-4">
              <Image
                src="https://i.ibb.co/YNQzhMj/353856522-217289317806138-4791375471495513352-n.jpg"
                width={400}
                height={400}
                alt="Chairman image"
              ></Image>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%] m-4 p-4">
          <div className="">
            <h1 className="bg-red-600 text-white text-center py-3 text-xl ">
              সভাপতির বাণী
            </h1>
            <div className="w-full flex justify-center mt-1 px-4 py-4 bg-[#F2F2F2]">
              <Image
                src="https://i.ibb.co/h2kTyxj/yy.jpg"
                width={200}
                height={200}
                alt="Chairman image"
              ></Image>
            </div>
            <div className="text-center p-4 space-y-2 bg-[#F2F2F2]">
              <h1 className="text-xl">আলহাজ্ব মোঃ আবুবকর সিদ্দিক</h1>
              <p>সভাপতি</p>
              <p>
                ১৯৯৮ সাল থেকে শুরু হয়, হাজী আবুবকর সিদ্দিক আদর্শ উচ্চ বিদ্যালয়ের
                পথচলা। প্রতিষ্ঠা লগ্ন থেকেই...
              </p>
            </div>
            <button className="bg-red-600 text-white text-center py-3 text-xl w-full">
              বিস্তারিত
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTopHeader;
