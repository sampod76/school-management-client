import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="lg:w-[85%] w-full mx-auto  py-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 p-4">
        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/4J6G3dt/download-11.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>আমাদের বৈশিষ্ট্য</h1>
            <p>11</p>
          </div>
        </div>

        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/ThdFdxX/download-12.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>শ্রেণী ও শিক্ষক</h1>
            <p>7</p>
          </div>
        </div>


        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/hDXLxr5/download-13.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>ইভেন্ট-সমূহ</h1>
            <p>2</p>
          </div>
        </div>


        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/wRVr3Fz/download-14.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1> সকল নোটিশ</h1>
            <p>20</p>
          </div>
        </div>



        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/6mzrTk7/download-15.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>অনলাইন আবেদন</h1>
            <p>2</p>
          </div>
        </div>



        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/k8Vwwfw/download-16.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>সেরা শিক্ষার্থী </h1>
            <p>5</p>
          </div>
        </div>


        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/2nWFnk9/download-17.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>ভিডিও টিউটোরিয়াল</h1>
            <p>420+</p>
          </div>
        </div>


        <div className=" border border-gray-300 px-10 py-6 rounded-lg text-center">
          <Image
            src="https://i.ibb.co/T1M9djz/download-18.png"
            width={100}
            height={100}
            className="mx-auto"
            alt="image-of-service"
          ></Image>

          <div className="space-y-4 my-3">
            <h1>ম্যানেজিং কমিটি</h1>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
