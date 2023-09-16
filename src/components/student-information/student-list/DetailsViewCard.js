import ImageTag from "@/components/Tag/ImageTag";
import BirthdateToAge from "@/utils/birthdateToAge";
import { Card, Space } from "antd";
import Image from "next/image";
import { BiBorderRadius } from "react-icons/bi";

const DetailsViewCard = ({ singleDetails }) => {
  const { student, userId, photo } = singleDetails;



  return (
    <>
      <div className="bg-white rounded-lg shadow-md w-full">
        <div className="relative  mb-2 flex justify-center items-center">
          {/* <Image
            className="w-full"
            src={photo?.urls}
            width={150}
            height={120}
            alt="image"
          ></Image> */}
          <ImageTag data={{url:student?.photo?.url}} />
        </div>
        <div className="px-6 py-2">
          {/* <p className="text-xl font-semibold mb-2">{name}</p> */}
          <p className="text-gray-500 mb-1">Student ID: {userId}</p>
          <div className="border-t border-gray-300 my-3" />
          <div className="flex flex-col space-y-1">
            <p className="text-sm">
              {/* <span className="font-semibold">Roll:</span> {} */}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Name:</span>{" "}
              {student?.name_bangla}
            </p>
            {/* <p className="text-sm">
              <span className="font-semibold">Age:</span> {age}
            </p> */}
            {/* <p className="text-sm">
              <span className="font-semibold">Grade:</span> {student?.grade}
            </p> */}
            <p className="text-sm">
              {/* <span className="font-semibold">Section:</span> {section} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsViewCard;
