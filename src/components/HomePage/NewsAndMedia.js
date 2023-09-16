import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsAndMedia = () => {
  return (
    <div className="lg:w-[90%] w-full mx-auto">
      <div className="lg:flex  justify-between  mt-4 items-start">
        <div className="lg:w-[68%] p-4">
          <h1 className="w-full bg-black text-white text-center py-1">নোটিশ</h1>
          <div className="lg:flex items-start py-4 justify-between gap-4">
            <div className="md:w-[48%] w-full space-y-3">
              <Image
                src="https://i.ibb.co/d2C7CM8/image-669114-1682614209-324x235.jpg"
                width={400}
                height={300}
                alt="image"
              ></Image>
              <h1 className="text-xl font-bold ">
                পরীক্ষার্থীদের জন্য গুরুত্বপূর্ণ কিছু দিক-নির্দেশনা
              </h1>
              <p className="text-xs">- জুন ২৪, ২০২৩</p>
              <p>
                আর কদিন পর এসএসসি পরীক্ষা। পরীক্ষা নিয়ে ছাত্র-অভিভাবক অনেকেরই
                অনেক ভয় বা আতঙ্ক থাকে। তাদের জন্যই এই লেখা। শিক্ষার্থীরা এখন
                নিশ্চয়ই রিভিশন দেয়া শুরু...
              </p>
            </div>

            <div className="lg:w-[48%] w-full">
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-3 ">
                  <Image
                    src="https://i.ibb.co/YNQzhMj/353856522-217289317806138-4791375471495513352-n.jpg"
                    width={110}
                    height={110}
                    className="md:w-[50%] lg:w-[200px] h-fit lg:h-[100px]"
                    alt="Chairman image"
                  ></Image>
                  <div className="pr-2 ">
                    <Link className="hover:text-red-500" href="/">
                      <h1 className="text-xl">
                        বাংলা প্রথমপত্রে যেভাবে ভালো নম্বর পাবে
                      </h1>
                    </Link>
                    <p className="text-xs mt-1 text-slate-500">জুন ২৪, ২০২৩</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 ">
                  <Image 
                    className="md:w-[50%] lg:w-[200px] h-fit lg:h-[100px]"
                    src="https://i.ibb.co/WFL1svr/download-1.jpg"
                    width={110}
                    height={110}
                    alt="Chairman image"
                  ></Image>
                  <div className="pr-2">
                    <Link className="hover:text-red-500" href="/">
                      <h1 className="text-xl">
                      আসন্ন কর্মশালা:ডিজিটাল প্রতিভা উন্নয়ন
                      </h1>
                    </Link>
                    <p className="text-xs mt-1 text-slate-500">জুন ২৪, ২০২৩</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 ">
                  <Image
                   className="md:w-[50%] lg:w-[200px] h-fit lg:h-[100px]"
                    src="https://i.ibb.co/TMvGjKW/images-3.jpg"
                    width={110}
                    height={110}
                    alt="Chairman image"
                  ></Image>
                  <div className="pr-2">
                    <Link className="hover:text-red-500" href="/">
                      <h1 className="text-xl">
                      সেবা সৃষ্টি প্রোগ্রামে স্বেচ্ছাসেবক সুযোগ
                      </h1>
                    </Link>
                    <p className="text-xs mt-1 text-slate-500">জুন ২৪, ২০২৩</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 ">
                  <Image
                  className="md:w-[50%] lg:w-[200px] h-fit lg:h-[100px]"
                    src="https://i.ibb.co/mRy1yCg/images-4.jpg"
                    width={110}
                    height={110}
                    alt="Chairman image"
                  ></Image>
                  <div className="pr-2">
                    <Link className="hover:text-red-500" href="/">
                      <h1 className="text-xl">
                      শিল্প প্রতিযোগিতা:সৃজনশীলতা উদযাপন"
                      </h1>
                    </Link>
                    <p className="text-xs mt-1 text-slate-500">জুন ২৪, ২০২৩</p>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 ">
                  <Image
                   className="md:w-[50%] lg:w-[200px] h-fit lg:h-[100px]"
                    src="https://i.ibb.co/sjkDFkZ/image-92951-1685883196.jpg"
                    width={110}
                    height={110}
                    alt="Chairman image"
                  ></Image>
                  <div className="pr-2">
                    <Link className="hover:text-red-500" href="/">
                      <h1 className="text-xl">
                      পরিবেশ সংরক্ষণ উপর অত্যন্ত গুরুত্বপূর্ণ
                      </h1>
                    </Link>
                    <p className="text-xs mt-1 text-slate-500">জুন ২৪, ২০২৩</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%] p-4">
          <h1 className="w-full bg-black text-white text-center py-1">নোটিশ</h1>

          <div className="mt-4 space-y-3 ">
            <iframe
              className="w-full h-40 md:h-72" // You can adjust the height as needed
              src="https://www.youtube.com/embed/C-9AUsZm_cE?si=94h2oL3_Wn10b2I1" 
              title="YouTube video player"
              frameBorder="0" // Use frameBorder instead of frameborder
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen // Use allowFullScreen instead of allowfullscreen
            ></iframe>
            <iframe
              className="w-full h-40 md:h-72" // You can adjust the height as needed
              src="https://www.youtube.com/embed/C-9AUsZm_cE?si=94h2oL3_Wn10b2I1" 
              title="YouTube video player"
              frameBorder="0" // Use frameBorder instead of frameborder
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen // Use allowFullScreen instead of allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndMedia;
