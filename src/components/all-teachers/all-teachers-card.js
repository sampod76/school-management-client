/* eslint-disable @next/next/no-img-element */

import { Button, Card } from "antd";

const AllTeachersCard = ({ teacher }) => {
  const { name, image, subject, phone } = teacher;

  return (
    <div className="w-80">
       <Card>
        <img
          className=" h-60 w-full rounded"
          alt="image"
          src={image}
        />
        <p className="text-xl text pt-3"> {name} </p>
        <p className="text-lg"> {subject} </p>
        <p className="mt-2"> {phone} </p>
        <div className="my-4">
          <Button type="primary">শিক্ষক পরিচিতি</Button>
        </div>
      </Card>
    </div>
  );
};

export default AllTeachersCard;
