import { Carousel } from "antd";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

const TopBanner = () => {
  const images = [
    "https://i.ibb.co/zHjdgWL/254944586-450475443463041-5363739295415609449-n-696x385.jpg",
    "https://i.ibb.co/zHjdgWL/254944586-450475443463041-5363739295415609449-n-696x385.jpg",
    "https://i.ibb.co/zHjdgWL/254944586-450475443463041-5363739295415609449-n-696x385.jpg",
  ];

  return (
    <div className="lg:w-[60%] w-full mx-auto">
      <div className="lg:flex  justify-between  mt-4">
        <div className="lg:w-[68%] p-4">
          {/* carousal  */}

          <div className="relative">
            {/* Carousel */}
            <Carousel
              autoplay
              prevArrow={<GrPrevious />}
              nextArrow={<GrNext />}
            >
              {images.map((imageUrl, index) => (
                <div key={index}>
                  <Image
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    width={900}
                    height={400}
                  />
                </div>
              ))}
            </Carousel>

            {/* Notice */}
            <div className="absolute bottom-0 left-0 w-full  bg-opacity-60 p-4 text-white">
              <p className=" bg-red-500 w-36 px-2">সর্বশেষ আপডেট</p>
              <h1 className="text-[20px]">
                পরীক্ষার্থীর জন্য গুরুত্বপূর্ণ নির্দেশনা
              </h1>
              <p>Text Line 3</p>
            </div>
          </div>
          {/* notice  */}

          <div className="flex md:justify-between justify-center items-center py-8 px-4">
            <div className="lg:flex items-center gap-4 justify-center">
              <p className="bg-black text-white px-2 py-1 text-center mb-2 md:mb-0">সর্বশেষ আপডেট</p>
              <h1>পরীক্ষার্থীর জন্য গুরুত্বপূর্ণ নির্দেশনা</h1>
            </div>
            <div className="md:flex items-center bg-white gap-2 hidden ">
              <div className="w-6 bg-gray-100 h-6 flex items-center justify-center">
                <GrPrevious />
              </div>
              <div className="w-6 bg-gray-100 h-6 flex items-center justify-center">
                <GrNext />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%] p-4">
          <div>
            <h1 className="bg-red-600 text-white text-center py-3 text-xl">
              সভাপতির বাণী
            </h1>
            <div className="w-full flex justify-center py-4 px-4 mt-1 bg-[#F2F2F2]">
              <Image
                src="https://i.ibb.co/NZ9PQ4H/yy.jpg"
                width={200}
                height={200}
                alt="Chairman image"
              ></Image>
            </div>
            <div className="text-center p-4 space-y-2  bg-[#F2F2F2]">
              <h1 className="text-xl">আলহাজ্ব মোঃ আবুবকর সিদ্দিক</h1>
              <p>সভাপতি</p>
              <p>১৯৯৮ সাল থেকে শুরু হয়, হাজী আবুবকর সিদ্দিক আদর্শ উচ্চ বিদ্যালয়ের পথচলা। প্রতিষ্ঠা লগ্ন থেকেই...</p>
              
            </div>
            <button className="bg-red-600 text-white text-center py-3 text-xl w-full">বিস্তারিত</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
