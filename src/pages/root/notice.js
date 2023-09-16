import {
  Button,
  Table,
  Typography,
} from "antd";
import Link from "next/link";


const data = [
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2020-08-13",
    notice_date: "2020-08-13",

    key: 0,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2021-08-27",
    notice_date: "2021-08-27",

    key: 1,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2022-08-2",
    notice_datee: "2022-08-2",

    key: 2,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2023-08-29",
    notice_date: "2023-08-29",

    key: 3,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2024-08-10",
    notice_date: "2024-08-10",

    key: 4,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2025-08-11",
    notice_date: "2025-08-11",

    key: 5,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2026-08-25",
    notice_date: "2026-08-25",

    key: 6,
  },
  {
    title: "দিনের ক্লাস",
    description:
      "Notice এর বিষয়বস্তু লেখা হয়ে গেলে Notice প্রদানকারী স্বাক্ষর করবে। একই সাথে তিনি তার প্রাতিষ্ঠানিক পদ স্বাক্ষরের নিচে উল্লেখ করবেন। যেমন- স্কুলের প্রধান শিক্ষক যদি Notice লিখে থাকেন, তাহলে তিনি স্বাক্ষরের নিচে প্রধান শিক্ষক কথাটি উল্লেখ করবেন।",
    release_date: "2027-08-9",
    notice_datee: "2027-08-9",

    key: 7,
  },
];

const items = [
  {
    key: "1",
    label: "Edit",
  },
  {
    key: "2",
    label: "Delete",
  },
  {
    key: "3",
    label: "View",
  },
];
const notice = () => {
  return (
    <div className="p-3 w-[70%] mx-auto">
      <section className="flex justify-between items-center px-4">
        <Typography.Title level={2}>নোটিশ/বিজ্ঞপ্তি</Typography.Title>
      </section>
      <section>
        <Table
          dataSource={data}
          style={{ margin: "0.3rem 1rem" }}
          scroll={{
            x: 1200,
          }}
          columns={[
            {
              title: "শিরোনাম",
              width: 100,
              dataIndex: "title",
              key: "key",
              // fixed: "left",
              width: 150,
              ellipsis: true,
            },
            {
              title: "নোটিশ তারিখ",
              dataIndex: "notice_date",
              key: "key",
              width: 150,
            },
            {
              title: "প্রকাশ তারিখ",
              width: 100,
              dataIndex: "release_date",
              key: "key",
              // fixed: "left",
            },

            {
              title: "পাঠ্য",
              dataIndex: "description",
              key: "key",
              width: 150,
              ellipsis: true,
            },

          ]}
          d
        ></Table>
      </section>
    </div>
  );
};

export default notice;