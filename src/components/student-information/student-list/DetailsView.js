/* eslint-disable react/jsx-key */
import { useGetStudentsQuery } from "@/redux/features/student/studentApi";
import DetailsViewCard from "./DetailsViewCard";
import { useContext } from "react";
import { AuthContext } from "@/components/Auth/AuthProvider";

const DetailsView = () => {
  const { Error_model } = useContext(AuthContext);
  const { data: students, error, isLoading } = useGetStudentsQuery();
  if (isLoading) {
    return;
  }
  if (error || students?.error) {
    console.log(error);
    Error_model({
      message: error?.message || students?.error?.data?.message,
    });
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 gap-4">
      {students?.data?.map((singleDetails) => (
        <DetailsViewCard key={singleDetails.id} singleDetails={singleDetails} />
      ))}
    </div>
  );
};

export default DetailsView;
