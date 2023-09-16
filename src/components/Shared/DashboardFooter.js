import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const customStyle2 = {
  backgroundColor: "gray",
  // height: "auto",
};

const DashboardFooter = () => {
  return (
    <>
      <footer>
        <div className=" p-4 bg-white">
          <p className="text-xl font-semibold flex items-center ">
            <AiOutlineCopyrightCircle className="me-2"></AiOutlineCopyrightCircle>{" "}
            Made By Payrasoft.
          </p>
        </div>
      </footer>
    </>
  );
};

export default DashboardFooter;
