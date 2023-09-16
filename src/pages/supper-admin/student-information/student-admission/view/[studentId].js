import DetailsView from "@/components/student-information/student-list/DetailsView";
import Profile from "@/components/super-admin-dashboard/student-information/studentProfile/profile";
import Attendance from "@/components/super-admin-dashboard/student-information/studentProfile/attendance";
import Exam from "@/components/super-admin-dashboard/student-information/studentProfile/exam";
// import Record from "@/components/super-admin-dashboard/student-information/studentProfile/record";
import Document from "@/components/super-admin-dashboard/student-information/studentProfile/document";
import Timeline from "@/components/super-admin-dashboard/student-information/studentProfile/timeline";
import Leave from "@/components/super-admin-dashboard/student-information/studentProfile/leave";
import { Button, Tabs } from "antd";
import React from "react";
import styles from "@/styles/studentProfile.module.css";
import { useGetSingleStudentQuery } from "@/redux/features/student/studentApi";
import { useRouter } from "next/router";
import Image from "next/image";
import ImageTag from "@/components/Tag/ImageTag";
import DeshbordLoading from "@/components/loader/deshbordLoading";



const StudentProfile = () => {
  const router = useRouter();
  const { studentId } = router.query;
//   console.log(studentId);
  const { data, error, isLoading } = useGetSingleStudentQuery(studentId, {
    skip: !studentId,
  });
// console.log(data)
  const students = [
    {
      title: "শিক্ষার্থী নাম",
      value: data?.data?.student?.name_bangla || "(পাওয়া যায়নি)",
    },
    
    {
      title: "ব্যবহারকারী আইডি",
      value: data?.data?.userId || "(পাওয়া যায়নি)",
    },
    {
      title: "শ্রেণী",
      value: data?.data?.student?.desired_class || "(পাওয়া যায়নি)",
    },
    {
      title: "গ্রাম",
      value: data?.data?.current_address?.village || "(পাওয়া যায়নি)",
    },
    {
      title: "লিঙ্গ",
      value: data?.data?.student?.gender || "(পাওয়া যায়নি)",
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <div className={styles.profile_menu}>
          <span>প্রোফাইল</span>
        </div>
      ),
      children: <Profile data={data} />,
    },
    {
      key: "2",
      label: (
        <div className={styles.profile_menu}>
          <span>ছুটি</span>
        </div>
      ),
      children: <Leave />,
    },
    {
      key: "3",
      label: (
        <div className={styles.profile_menu}>
          <span>পরিক্ষা</span>
        </div>
      ),
      children: <Exam />,
    },
    {
      key: "4",
      label: (
        <div className={styles.profile_menu}>
          <span>ডকুমেন্ট</span>
        </div>
      ),
      children: <Document />,
    },
    {
      key: "5",
      label: (
        <div className={styles.profile_menu}>
          <span>রেকর্ড</span>
        </div>
      ),
      children: <DetailsView />,
    },
    {
      key: "6",
      label: (
        <div className={styles.profile_menu}>
          <span>উপস্থিতি</span>
        </div>
      ),
      children: <Attendance />,
    },
    {
      key: "7",
      label: (
        <div className={styles.profile_menu}>
          <span>সময়</span>
        </div>
      ),
      children: <Timeline />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return <DeshbordLoading/>
  }



  return (
    <div className="p-10 border-none">
      <div className="bg-white w-full h-16 rounded-lg flex items-center ">
        <p className="text-2xl font-bold m-6 mt-8">শিক্ষার্থীর বিবরণ</p>
      </div>

      <div>
        <div className="lg:flex justify-between my-8">
          <p className="text-2xl">শিক্ষার্থীর বিবরণ</p>
          <div className=" ">
            <div className=" top-5 right-2">
              <Button type="primary">+যোগ কর</Button>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-6">
          <div className="lg:w-1/4 ">
            <div className="text-sm border-2 rounded-md">
              {/* <Image width={100} height={100} src={data?.data?.student?.photo?.url}></Image> */}
              <div className="flex justify-center items-center">
              <ImageTag data={{url:data?.data?.student?.photo?.url}}/>
              </div>
              <div className=" bg-white pt-8">
                
                {students.map((student, index) => (
                  <div key={index}>
                    <div className="flex justify-between  px-10 py-2">
                      <p className="text-[#767474]">{student.title}</p>
                      <p>{student.value}</p>
                    </div>

                    <div className="text-gray-500  px-10 py-2">
                      <hr />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div>
              <div className="p-3 rounded-md relative">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
