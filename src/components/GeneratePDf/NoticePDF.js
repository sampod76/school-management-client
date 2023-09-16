import React from "react";
import LogoImage from "../../assets/images/logo (2).png";
import Image from "next/image";

const NoticePDF = () => {
  return (
    <div className="w-[595px] h-[842px] mx-auto bg-white relative">
      <div className="border-b-2 border-[#de1b14]">
        <div className="flex items-start justify-between p-3 border-b-2 border-[#5abd64] mb-[1px]">
          <Image
            className="w-[13%]"
            src={LogoImage}
            width={50}
            height={50}
            alt="image"
          ></Image>

          <div className="w-[65%]">
            <div className="text-center">
              <h1 className="text-xl font-bold text-[#5abd64]">
                হাজী আবুবকর সিদ্দিক উচ্চ বিদ্যালয়
              </h1>
              <p className="text-xs">
                গ্রামঃ কালীনগর, পোঃ খাসমহল বালুচর, উপজেলাঃ সিরাজদিখান,জেলাঃ
                মুন্সীগজ্ঞ
              </p>
              <p className="text-sm">স্থাপিতঃ ১৯৯৮ খ্রিঃ</p>
              <p className="text-sm text-[#8D6970] font-bold">
                E-Mail:hajiabubakkarhighSchool@gmail.com
              </p>
            </div>
          </div>
          <div className="text-xs w-[22%]">
            <p>বিদ্যালয় কোডঃ ৩৫৮০</p>
            <p>EIIN: 11187</p>
            <p>জেলা কোডঃ ২০</p>
            <p>উপজেলা কোডঃ ২০</p>
            <p>পোস্ট কোডঃ ২০</p>
            <div className="flex">
              <p>Mobile: </p>
              <div>
                <p>0186213545</p>
                <p>0186213545</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-0 h-6 bg-[#5abd64] w-full">

      </div>
    </div>
  );
};

export default NoticePDF;
