import React from "react";
import Image from "next/image";
import profileImage from "../../../../assets/img/profileImage.jpg";

const teachersData1 = [
  {
    title: "জন্ম তারিখ",
    value: "9 ই মে, 2010",
  },
  {
    title: "বয়স",
    value: "13 বছর",
  },
  {
    title: "গ্রুপ",
    value: null,
  },
  {
    title: "ধর্ম",
    value: null,
  },
  {
    title: "ফোন নম্বর",
    value: "+৮৮০১২৩৪৫৬৭১",
  },
  {
    title: "বর্তমান ঠিকানা",
    value: "বাংলাদেশ",
  },
  {
    title: "স্থায়ী ঠিকানা",
    value: "বাংলাদেশ",
  },
];
const teachersData2 = [
  {
    title: "পিতার নাম",
    value: "আইনো",
  },
  {
    title: "মাতার নাম",
    value: null,
  },
  {
    title: "পেশা",
    value: "শিক্ষক",
  },
];

const teachersData3 = [
  {
    title: "অভিভাবকের নাম",
    value: "শেরিডান",
  },
  {
    title: "ইমেল ঠিকানা",
    value: "guardian_191@infixedu.com",
  },
  {
    title: "ফোন নম্বর",
    value: "৮০০৫৭৯৩২",
  },
  {
    title: "অভিভাবকের সাথে সম্পর্ক",
    value: "ভাই",
  },
  {
    title: "পেশা",
    value: "ব্যবসায়ী",
  },
  {
    title: "অভিভাবকের ঠিকানা",
    value: "ঢাকা-১২১৯, বাংলাদেশ",
  },
];

const teachersData4 = [
  {
    title: "অন্যান্য তথ্য",
    value: null,
  },
  {
    title: "রক্তের গ্রুপ",
    value: "গাই",
  },
  {
    title: "পূর্ববর্তী স্কুলের তথ্য",
    value: "বাংলাদেশ",
  },
  {
    title: "জাতীয় আইডি নম্বর",
    value: null,
  },
  {
    title: "স্থানীয় আইডি নম্বর",
    value: null,
  },
  {
    title: "ব্যাংক অ্যাকাউন্ট নম্বর",
    value: "+৮৮০১২৩৪৫৬৭১",
  },
  {
    title: "ব্যাংকের নাম",
    value: "ডিবিবিএল",
  },
  {
    title: "IFSC কোড",
    value: null,
  },
];

const Profile = () => {
  return (
    <div>
      <div className="h-30% bg-white text-[#767474] py-10  rounded-lg">
        {teachersData1.map((teacherData1, index) => (
          <div key={index}>
            <div className="flex justify-between px-12 py-2">
              <p>{teacherData1.title}</p>
              <p>{teacherData1.value}</p>
            </div>
            <div className="text-gray-500  px-12 py-2">
              <hr />
            </div>
          </div>
        ))}

        <div>
          <div className="flex justify-between px-12 pt-8">
            <p className="text-2xl text-black">PARENT GUARDIAN DETAILS</p>
          </div>
          <div className="text-gray-500  px-12 py-2">
            <hr />
          </div>

          {teachersData2.map((teacherData2, index) => (
            <div key={index}>
              <div className="flex justify-between px-12 py-2">
                <p>{teacherData2.title}</p>
                <p>{teacherData2.value}</p>
              </div>
              <div className="text-gray-500  px-12 py-2">
                <hr />
              </div>
            </div>
          ))}

          <div className=" px-12 py-2">
            <p className="mb-8">পেশা</p>
            <div className="flex justify-between w-full">
              <div className="w-2/12">
                <Image
                  src={profileImage}
                  alt="Description of the image"
                  width={150}
                  height={90}
                  layout="responsive"
                  className="rounded"
                />
              </div>
              <div className="w-10/12">
                {teachersData3.map((teacherData3, index) => (
                  <div key={index}>
                    <div className="flex justify-between px-12 py-2">
                      <p>{teacherData3.title}</p>
                      <p>{teacherData3.value}</p>
                    </div>
                    <div className="text-gray-500  px-12 py-2">
                      <hr />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between px-12 pt-8">
            <p className="text-2xl text-black">TRANSPORT & DORMITORY INFO</p>
          </div>
          <div className="text-gray-500  px-12 py-2">
            <hr />
          </div>

          {teachersData4.map((teacherData4, index) => (
            <div key={index}>
              <div className="flex justify-between px-12 py-2">
                <p>{teacherData4.title}</p>
                <p>{teacherData4.value}</p>
              </div>
              <div className="text-gray-500  px-12 py-2">
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
