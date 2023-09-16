import React from "react";

const Timeline = () => {
  return (
    <div className=" bg-white h-screen ">
      <div className="lg:flex justify-around pt-8 text-lg p-4">
        <p>LEAVE TYPE </p>
        <p>LEAVE FROM </p>
        <p>LEAVE TO </p>
        <p>APPLY DATE </p>
        <p>STATUS </p>
        <p>ACTION </p>
      </div>

      <div className="text-gray-500 h-24  px-12 py-4">
        <hr />
      </div>

      <h1 className="text-4xl text-center my-12">Timeline Page</h1>
    </div>
  );
};

export default Timeline;
