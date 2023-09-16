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
import { useRouter } from "next/router";
import { useGetSingleTeacherQuery } from "@/redux/features/teacher/teacherApi";
import ImageTag from "@/components/Tag/ImageTag";

const TeacherProfile = () => {
  const router = useRouter();
  const { teacherId } = router.query;
  const { data, error, isLoading } = useGetSingleTeacherQuery(teacherId, {
    skip: !teacherId,
  });
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
      children: <DetailsView data={data} />,
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
  const teacherSubject = data?.data?.teacher_info?.subject.map(
    (teacherIndividualSubject, index) => (
      <p key={index}>{teacherIndividualSubject}</p>
    )
  );
  const teachers = [
    {
      title: "শিক্ষক নাম",
      value: data?.data?.teacher_info?.name_bangla || "(পাওয়া যায়নি)",
    },
    // {
    //   title: "ভর্তি নম্বর",
    //   value: 10809,
    // },
    // {
    //   title: "রোল নম্বর",
    //   value: 32438,
    // },
    // {
    //   title: "শ্রেণী",
    //   value: "দুই",
    // },
    // {
    //   title: "সেকশন",
    //   value: "বি",
    // },
    // {
    //   title: "সেকশন",
    //   value: "বি",
    // },
    {
      title: "বিষয়",
      value: teacherSubject,
    },
    {
      title: "লিঙ্গ",
      value: data?.data?.teacher_info?.gender || "(পাওয়া যায়নি)",
    },
  ];

  const onChange = (key) => {};
  return (
    <div className="p-10 border-none">
      <div className="bg-white w-full h-16 rounded-lg flex items-center ">
        <p className="text-2xl font-bold m-6 mt-8">শিক্ষকের বিবরণ</p>
      </div>

      <div>
        <div className="lg:flex justify-between my-8">
          <p className="text-2xl">শিক্ষকের বিবরণ</p>
          <div className=" ">
            <div className=" top-5 right-2">
              <Button type="primary">+যোগ কর</Button>
            </div>
          </div>
        </div>

        <div className="lg:flex gap-6">
          <div className="lg:w-1/4 ">
            <div className="text-sm">
              <div className="flex items-center justify-center bg-[#D5D3D3] rounded-t-lg py-6">
                <ImageTag
                  data={{ url: data?.data?.teacher_info?.photo?.urls }}
                />
              </div>
              <div className=" bg-white pt-8">
                {teachers.map((teacher, index) => (
                  <div key={index}>
                    <div className="flex justify-between  px-10 py-2">
                      <p className="text-[#767474]">{teacher.title}</p>
                      <p>{teacher.value}</p>
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

export default TeacherProfile;
