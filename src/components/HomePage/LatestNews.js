import { Carousel } from "antd";
import Image from "next/image";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const images = [
  "https://i.ibb.co/zhJpBHB/1675856694-Morning-1350-600.jpg",
  "https://i.ibb.co/q0nDKdy/254944586-450475443463041-5363739295415609449-n-696x385.jpg",
  "https://i.ibb.co/1G98dkd/1629875819-PIC1.jpg",
];

const contentStyle = {
  width: "100%",
  height: "400px", // Set your desired height
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#364d79",
  position: "relative",
};

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const prev = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % images.length;
    setCurrentSlide(next);
  };

  const beforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  return (
    <div className="lg:w-[85%] w-full mx-auto ">
      <div className="lg:flex justify-between mt-4 items-start">
        <div className="lg:w-[68%] p-4">
          <Carousel initialSlide={currentSlide} dots={false}>
            {images.map((imageUrl, index) => (
              <div key={index} style={contentStyle} className="relative">
                <BiLeftArrow
                  onClick={prevSlide}
                  size={30}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
                />
                <Image
                  src={images[currentSlide]}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={300}
                  className="h-[300px] lg:h-[400px] w-full"
                />
                <BiRightArrow
                  onClick={nextSlide}
                  size={30}
                  className="absolute right-2 text-white top-1/2 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="lg:w-[30%]  p-4  overflow-y-auto scrollbar-none shadow-lg">
          <div className="bg-white">
            <h1 className="w-full bg-red-500 text-left px-2 text-white text-xl py-2">
              সর্বশেষ আপডেট
            </h1>
          </div>

          <marquee direction="up">
            <div className="border p-2 mb-2">
              <div className="flex justify-start items-start gap-1  pb-4 ">
                <MdOutlineKeyboardDoubleArrowRight />
                <p>
                  <span className="font-semibold"> 07-Jun-2023</span> -
                  ০৮/০৬/২০২৩ তারিখের পরীক্ষা ও সামষ্টিক মূল্যায়ন সংক্রান্ত জরুরি
                  বিজ্ঞপ্তি
                </p>
              </div>
            </div>
            <div className="border p-2 mb-2">
              <div className="flex justify-start items-start gap-1  pb-4 ">
                <MdOutlineKeyboardDoubleArrowRight />
                <p>
                  <span className="font-semibold"> 23-May-2023</span> -
                  ২৪/০৫/২০২৩ খ্রি. তারিখ থেকে ২য় থেকে ১০ম শ্রেণির ছাত্রদের
                  শ্রেণি কার্যক্রম চলবে।
                </p>
              </div>
            </div>

            <div className="border p-2 mb-2">
              <div className="flex justify-start items-start gap-1  pb-4 ">
                <MdOutlineKeyboardDoubleArrowRight />
                <p>
                  <span className="font-semibold"> 10-Jun-2023</span>{" "}
                  -২৪/০৫/২০২৩ খ্রি. তারিখ থেকে ২য় থেকে ১০ম শ্রেণির ছাত্রদের
                  শ্রেণি কার্যক্রম চলবে। -
                </p>
              </div>
            </div>

            <div className="border p-2 mb-2">
              <div className="flex justify-start items-start gap-1  pb-4 ">
                <MdOutlineKeyboardDoubleArrowRight />
                <p>
                  <span className="font-semibold"> 01-July-2023</span>
                  -২৪/০৫/২০২৩ খ্রি. তারিখ থেকে ২য় থেকে ১০ম শ্রেণির ছাত্রদের
                  শ্রেণি কার্যক্রম চলবে।
                </p>
              </div>
            </div>

            <div className="border p-2 mb-2">
              <div className="flex justify-start items-start gap-1  pb-4 ">
                <MdOutlineKeyboardDoubleArrowRight />
                <p>
                  <span className="font-semibold"> 29-Dec-2022 </span>
                  -পাঠ্যপুস্তক বিতরণ উৎসব-২০২৩
                </p>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
