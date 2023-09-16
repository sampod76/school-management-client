import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import AllTeachersCard from "../all-teachers/all-teachers-card";


const teachers = [
  {
    _id: 1,
    name: "তাজুল ইসলাম",
    image:
      "https://i.ibb.co/KXCB9Yc/01.jpg",
    subject: "ইসলাম শিক্ষা",
    phone: "০১৯৮৫৭৮২২৩০",
  },
  {
    _id: 2,
    name: "সানিয়া তাসনীম",
    image:
      "https://i.ibb.co/BwR6RG5/principal.jpg",
    subject: "গণিত",
    phone: "০১৩৮৫৭৮৯২২০",
  },
  {
    _id: 3,
    name: "সামির ইকবাল",
    image:
      "https://i.ibb.co/2WkdYTc/director.png",
    subject: "বাংলা",
    phone: "০১৯৮৫৭৮৯২২৩০",
  },
  {
    _id: 4,
    name: "আযমা ফাতেমা",
    image:
      "https://i.ibb.co/PZyqwH5/Ln-Nishat-Parveen-Huq.jpg",
    subject: "বিজ্ঞান",
    phone: "০১৫৭৮৮৯২২৩০",
  },
  {
    _id: 5,
    name: "আরমান হাসান",
    image:
      "https://i.ibb.co/XXh5kmS/Gobinda-Chandra-Roy.jpg",
    subject: "ইংরেজি",
    phone: "০১৮৫৭৮৯২২৩০",
  }
];

const Teacher = () => {
  return (
    <div className="lg:w-[85%] w-full mx-auto">
      <div className="w-36 mx-auto text-center">
        <h1 className="border-b-2 border-red-500  w-32 text-2xl  my-6">
          শিক্ষকবৃন্দ
        </h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8  mx-auto w-full">
        {teachers.map((teacher) => (
          <AllTeachersCard
            key={teacher._id}
            teacher={teacher}
          ></AllTeachersCard>
        ))}
      </div>

      <Link className="flex items-center justify-center mb-5" href="/all-teachers">
        <button className="bg-red-600 text-white px-6 py-2 flex items-center justify-center gap-2">
          সকল শিক্ষক <BsFillArrowRightCircleFill/>
        </button>
      </Link>
 
      

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 lg:py-4 px-4">
        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <Image
            src="https://i.ibb.co/P5FCTSs/01.jpg"
            width={550}
            height={200}
            alt="teacher-image"
            className="w-full max-h-[350px]"
          ></Image>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">নীরোদ রঞ্জন রায়</h1>
            <p className="text-base text-gray-5 00">প্রধান শিক্ষক</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
          <div className="text-end my-8">
            <Link href="/all-teachers">
              <button className="flex items-center gap-2 text-white bg-red-600 hover:bg-slate-600 px-6 py-2">
                SEE ALL <BsArrowRightCircleFill />
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">রাজিয়া বেগম</h1>
            <p className="text-base text-gray-5 00">আয়া</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">আকাশ</h1>
            <p className="text-base text-gray-5 00">নিরাপত্তাকর্মী</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">রবিউল্লাহ</h1>
            <p className="text-base text-gray-5 00">পরিচ্ছন্নতা কর্মী</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">রবিউল্লাহ</h1>
            <p className="text-base text-gray-5 00">পরিচ্ছন্নতা কর্মী</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-1 py-4">
            <h1 className="text-2xl tracking-wider">রবিউল্লাহ</h1>
            <p className="text-base text-gray-5 00">পরিচ্ছন্নতা কর্মী</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white  text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoFacebook />
            </div>
            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoInstagram className="" />
            </div>

            <div className="bg-red-600 text-white text-xl w-12 h-10 flex justify-center items-center">
              <BiLogoTwitter />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Teacher;
