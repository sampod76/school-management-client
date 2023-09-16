import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notice = () => {
  return (
    <div className="lg:w-[60%] w-full mx-auto">
      <div className="lg:flex  justify-between  mt-4 items-start">
        <div className="lg:w-[68%] p-4 md:flex justify-between items-center gap-4">
          <div className="lg:w-[48%]">
            <h1 className="w-full bg-black text-white text-center">নোটিশ</h1>
            <ul className="space-y-2">
              <Link className="hover:text-red-500" href="/">
                <li className="space-y-2 border-b border-gray-300 py-4">
                  <h1 className="text-lg">শেখ রাসেল পদক ২০২৩ বিষয়ক নোটিশ</h1>
                  <p className="text-xs">- জুন ২৪, ২০২৩</p>
                </li>
              </Link>
              <Link className="hover:text-red-500" href="/">
                <li className="space-y-2 border-b border-gray-300 py-4">
                  <h1 className="text-lg">শেখ রাসেল পদক ২০২৩ বিষয়ক নোটিশ</h1>
                  <p className="text-xs">- জুন ২৪, ২০২৩</p>
                </li>
              </Link>
              <Link className="hover:text-red-500" href="/">
                <li className="space-y-2 border-b border-gray-300 py-4">
                  <h1 className="text-lg">শেখ রাসেল পদক ২০২৩ বিষয়ক নোটিশ</h1>
                  <p className="text-xs">- জুন ২৪, ২০২৩</p>
                </li>
              </Link>
              <Link className="hover:text-red-500" href="/">
                <li className="space-y-2 border-b border-gray-300 py-4">
                  <h1 className="text-lg">শেখ রাসেল পদক ২০২৩ বিষয়ক নোটিশ</h1>
                  <p className="text-xs">- জুন ২৪, ২০২৩</p>
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-[48%] mt-3">
            <h1 className="w-full bg-black text-white text-center">
              সংবাদ/মিডিয়া
            </h1>

            <div className="flex items-start justify-between gap-3 py-2">
              <Image
                src="https://i.ibb.co/YNQzhMj/353856522-217289317806138-4791375471495513352-n.jpg"
                width={110}
                height={110}
                alt="Chairman image"
              ></Image>
              <div>
                <Link className="hover:text-red-500" href="/">
                  <h1 className="text-sm mt-1">
                    এসএসসি পরীক্ষার্থীদের বিদায় অনুষ্ঠান-২০২২
                  </h1>
                </Link>
                <p className="text-xs mt-1">জুন ২৪, ২০২৩</p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3 py-2">
              <Image
                src="https://i.ibb.co/YNQzhMj/353856522-217289317806138-4791375471495513352-n.jpg"
                width={110}
                height={110}
                alt="Chairman image"
              ></Image>
              <div>
                <Link className="hover:text-red-500" href="/">
                  <h1 className="text-sm mt-1">
                    এসএসসি পরীক্ষার্থীদের বিদায় অনুষ্ঠান-২০২২
                  </h1>
                </Link>
                <p className="text-xs mt-1">জুন ২৪, ২০২৩</p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3 py-2">
              <Image
                src="https://i.ibb.co/YNQzhMj/353856522-217289317806138-4791375471495513352-n.jpg"
                width={110}
                height={110}
                alt="Chairman image"
              ></Image>
              <div>
                <Link className="hover:text-red-500" href="/">
                  <h1 className="text-sm mt-1">
                    এসএসসি পরীক্ষার্থীদের বিদায় অনুষ্ঠান-২০২২
                  </h1>
                </Link>
                <p className="text-xs mt-1">জুন ২৪, ২০২৩</p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3 py-2">
              <Image
                src="https://i.ibb.co/YNQzhMj/353856522-217289317806138-4791375471495513352-n.jpg"
                width={110}
                height={110}
                alt="Chairman image"
              ></Image>
              <div>
                <Link className="hover:text-red-500" href="/">
                  <h1 className="text-sm mt-1">
                    এসএসসি পরীক্ষার্থীদের বিদায় অনুষ্ঠান-২০২২
                  </h1>
                </Link>
                <p className="text-xs mt-1">জুন ২৪, ২০২৩</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%] p-4 mt-3">
          <ul>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>
            <Link href="/">
              <li className="bg-red-600 text-white text-center py-1 my-1">প্রধান শিক্ষকের বাণী</li>
            </Link>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notice;
