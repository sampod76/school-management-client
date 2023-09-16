import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Descriptions } from "antd";
import { AuthContext } from "@/components/Auth/AuthProvider";
import englishDataToBangle from "@/utils/englishDataToBangle";

const ViewWorkAssign = () => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const id = router.query.workAssignId;

  const [workDetails, setWorkDetails] = useState({});

  useEffect(() => {
    if (id) {
      // Fetch details of the specific item using the provided `id`
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/work_schedule/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setWorkDetails(data?.data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  return (
    <div>
      <h3 className="text-4xl font my-4 ms-2">কাজ এসাইন ডিটেইলস</h3>
      <Descriptions layout="horizontal" bordered>
        <Descriptions.Item
          label="কাজের নাম"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workDetails.work_name}
        </Descriptions.Item>
        <Descriptions.Item
          label="কাজের বিস্তারিত"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workDetails.work_details}
        </Descriptions.Item>
        <Descriptions.Item
          label="যার জন্য"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workDetails.work_for}
        </Descriptions.Item>
        <Descriptions.Item
          label="এসাইন করার সময়"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {englishDataToBangle(workDetails.assign_date)}
        </Descriptions.Item>
        <Descriptions.Item
          label="জমা দেওয়ার সময়"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {englishDataToBangle(workDetails.complete_date)}
        </Descriptions.Item>
        <Descriptions.Item
          label="স্ট্যাটাস"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workDetails.status}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ViewWorkAssign;
