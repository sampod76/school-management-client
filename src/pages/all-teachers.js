import AllTeachersCard from "@/components/all-teachers/all-teachers-card";
import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const teachers = [
  {
    _id: 1,
    name: "আব্দুল্লাহ খান",
    image: "https://i.ibb.co/KXCB9Yc/01.jpg",
    subject: "ইসলাম শিক্ষা",
    phone: "০১৮৫৭৮৯২২৩০",
  },
  {
    _id: 2,
    name: "ফাতেমা বেগম",
    image: "https://i.ibb.co/zf91N4k/04.jpg",
    subject: "আদর্শ বাংলা",
    phone: "০১৮৫৭৮৯২২৩১",
  },
  {
    _id: 3,
    name: "জাকারিয়া আহমেদ",
    image: "https://i.ibb.co/9GtHKpd/02.jpg",
    subject: "গণিত ও বিজ্ঞান",
    phone: "০১৮৫৭৮৯২২৩২",
  },
  {
    _id: 4,
    name: "ইব্রাহীম হাসান",
    image: "https://i.ibb.co/sP3P0Zs/03.jpg",
    subject: "আধুনিক বাংলা",
    phone: "০১৮৫৭৮৯২২৩৩",
  },
  {
    _id: 5,
    name: "আইশা ফারুক",
    image: "https://i.ibb.co/nrN9bZw/06.jpg",
    subject: "ইংরেজি",
    phone: "০১৮৫৭৮৯২২৩৪",
  },
  {
    _id: 6,
    name: "জামাল উদ্দিন",
    image: "https://i.ibb.co/mHNCp0y/9.jpg",
    subject: "পরিবেশ ও বিজ্ঞান",
    phone: "০১৮৫৭৮৯২২৩৫",
  },
  {
    _id: 7,
    name: "লুতফ আলম",
    image: "https://i.ibb.co/rc4kNwC/10.jpg",
    subject: "পদার্থবিজ্ঞান",
    phone: "০১৮৫৭৮৯২২৩৬",
  },
  {
    _id: 8,
    name: "মাহিয়া রহমান",
    image: "https://i.ibb.co/k04HShB/14.jpg",
    subject: "বাংলাদেশ ও বিশ্বপরিচয়",
    phone: "০১৮৫৭৮৯২২৩৭",
  },
  {
    _id: 9,
    name: "কামরুল হক",
    image: "https://i.ibb.co/n89JvKM/11.jpg",
    subject: "ইসলাম শিক্ষা",
    phone: "০১৮৫৭৮৯২২৩৮",
  },

];

const AllTeachers = () => {
  return (
    <div className="lg:w-[85%] mx-auto">
      <div className="text-center py-4">
        <h1 className="text-4xl">সকল শিক্ষকবৃন্দ</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8  mx-auto">
        {teachers.map((teacher) => (
          <AllTeachersCard
            key={teacher._id}
            teacher={teacher}
          ></AllTeachersCard>
        ))}
      </div>

      <Link className="flex items-center justify-center mb-5" href="/">
        <button className="bg-red-600 text-white px-6 py-2 flex items-center justify-center gap-2">
          <BsArrowLeftCircleFill /> Back To Home
        </button>
      </Link>
    </div>
  );
};

export default AllTeachers;
