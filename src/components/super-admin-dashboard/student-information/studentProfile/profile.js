//? create by and only dynamic --> kamrul vi
/* 
data and photo not show problem --> fix sampod
*/
import React from "react";
import Image from "next/image";
import profileImage from "../../../../assets/img/profileImage.jpg";
import englishDataToBangle from "@/utils/englishDataToBangle";

const Profile = ({ data }) => {
  const teacherData1 = [
    {
      title: "জন্ম তারিখ",
      value:
        englishDataToBangle(data?.data?.teacher_info?.date_of_birth) ||
        "(পাওয়া যায়নি)",
    },
    {
      title: "বয়স",
      value: "13 বছর" || "(পাওয়া যায়নি)",
    },
    {
      title: "গ্রুপ",
      value: null || "(পাওয়া যায়নি)",
    },
    {
      title: "ধর্ম",
      value: data?.data?.teacher_info?.religion || "(পাওয়া যায়নি)",
    },
    {
      title: "ফোন নম্বর",
      value:
        data?.data?.teacher_info?.phone_number ||
        data?.data?.mother_info?.phone_number,
    },
    {
      title: "বর্তমান ঠিকানা",
      value:
        data?.data?.current_address?.district +
        "/" +
        data?.data?.current_address?.sub_district +
        "/" +
        data?.data?.current_address?.union,
    },
    {
      title: "স্থায়ী ঠিকানা",
      value:
        data?.data?.permanent_address?.district +
        "/" +
        data?.data?.permanent_address?.sub_district +
        "/" +
        data?.data?.permanent_address?.union,
    },
  ];
  const teacherData2 = [
    {
      title: "পিতার নাম",
      value: data?.data?.father_info?.name_bangla || "(পাওয়া যায়নি)",
    },
    {
      title: "মাতার নাম",
      value: data?.data?.mother_info?.name_bangla || "(পাওয়া যায়নি)",
    },
    {
      title: "পিতার পেশা",
      value: data?.data?.father_info?.profession || "(পাওয়া যায়নি)",
    },
    {
      title: "ফোন নম্বর",
      value: data?.data?.father_info?.phone_number || "(পাওয়া যায়নি)",
    },
    {
      title: "মাতার পেশা",
      value: data?.data?.mother_info?.profession || "(পাওয়া যায়নি)",
    },
  ];
  const teacherData3 = [
    {
      title: "অভিভাবকের নাম",
      value: data?.data?.guardian_info?.name || "(পাওয়া যায়নি)",
    },
    {
      title: "এনআইডি",
      value: data?.data?.guardian_info?.nid || "(পাওয়া যায়নি)",
    },
    {
      title: "ফোন নম্বর",
      value: data?.data?.guardian_info?.number || "(পাওয়া যায়নি)",
    },
    {
      title: "অভিভাবকের সাথে সম্পর্ক",
      value: data?.data?.guardian_info?.relationship || "(পাওয়া যায়নি)",
    },
    {
      title: "পেশা",
      value: data?.data?.guardian_info?.profession || "(পাওয়া যায়নি)",
    },
  ];
  const teacherData4 = [
    {
      title: "অন্যান্য তথ্য",
      value: null || "(পাওয়া যায়নি)",
    },
    {
      title: "রক্তের গ্রুপ",
      value: data?.data?.student?.blood_group || "(পাওয়া যায়নি)",
    },
    {
      title: "পূর্ববর্তী স্কুলের তথ্য",
      value: "(পাওয়া যায়নি)" || "(পাওয়া যায়নি)",
    },
    // {
    //   title: "জাতীয় আইডি নম্বর",
    //   value: null || "(পাওয়া যায়নি)",
    // },
    // {
    //   title: "স্থানীয় আইডি নম্বর",
    //   value: null || "(পাওয়া যায়নি)",
    // },
    // {
    //   title: "ব্যাংক অ্যাকাউন্ট নম্বর",
    //   value: "+৮৮০১২৩৪৫৬৭১" || "(পাওয়া যায়নি)",
    // },
    // {
    //   title: "ব্যাংকের নাম",
    //   value: "ডিবিবিএল" || "(পাওয়া যায়নি)",
    // },
    // {
    //   title: "IFSC কোড",
    //   value: null || "(পাওয়া যায়নি)",
    // },
  ];

  return (
    <div>
      <div className="h-30% bg-white text-[#767474] py-10  rounded-lg">
        {teacherData1.map((teacher, index) => (
          <div key={index}>
            <div className="flex justify-between px-12 py-2">
              <p>{teacher.title}</p>
              <p>{teacher.value}</p>
            </div>
            <div className="text-gray-500  px-12 py-2">
              <hr />
            </div>
          </div>
        ))}

        <div>
          <div className="flex justify-between px-12 pt-8">
            <p className="text-2xl text-black">পিতা/মাতা/গার্ডিয়ানের তথ্য</p>
          </div>
          <div className="text-gray-500  px-12 py-2">
            <hr />
          </div>

          {teacherData2.map((teacher, index) => (
            <div key={index}>
              <div className="flex justify-between px-12 py-2">
                <p>{teacher.title}</p>
                <p>{teacher.value}</p>
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
                {teacherData3.map((teacher, index) => (
                  <div key={index}>
                    <div className="flex justify-between px-12 py-2">
                      <p>{teacher.title}</p>
                      <p>{teacher.value}</p>
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

          {teacherData4.map((teacher, index) => (
            <div key={index}>
              <div className="flex justify-between px-12 py-2">
                <p>{teacher.title}</p>
                <p>{teacher.value}</p>
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
