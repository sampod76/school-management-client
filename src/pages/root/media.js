import Image from "next/image";
import Link from "next/link";
import React from "react";

const Media = () => {
  const images = [
    "https://i.ibb.co/h2kTyxj/yy.jpg",
    "https://i.ibb.co/zhJpBHB/1675856694-Morning-1350-600.jpg",
    "https://i.ibb.co/1G98dkd/1629875819-PIC1.jpg",
    "https://i.ibb.co/TMvGjKW/images-3.jpg",
    // Add more image paths here
  ];
  return (
    <section className="container mx-auto px-5 py-20 w-[80%]">
      <p className="text-3xl my-4">মিডিয়া</p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <Link href={image}>
                <Image
                  className="md:w-84 w-full h-80 object-cover"
                  src={image}
                  width={50}
                  height={100}
                  alt="loading"
                ></Image>
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Image Title</h2>
                <p className="text-gray-600">
                  Description or details about the image.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
