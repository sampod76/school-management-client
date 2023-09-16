import React, { useEffect } from "react";
import { Descriptions, Form } from "antd";

import { useRouter } from "next/router";
import { useGetSingleWorkPlanQuery } from "@/redux/features/workPlan/workPlan";
import englishDataToBangle from "@/utils/englishDataToBangle";

const ViewWorkPlan = () => {
  const router = useRouter();
  const { workPlanId } = router.query;

  // get query
  const { data: workPlanData, refetch } = useGetSingleWorkPlanQuery(
    workPlanId,
    {
      skip: !workPlanId,
    }
  );

  return (
    <div className="mx-6 my-4">
      <h3 className="text-2xl font-bold mb-4">কর্মপরিকল্পনা দেখুন</h3>

      <Descriptions layout="horizontal" bordered>
        <Descriptions.Item
          label="কর্ম-পরিকল্পনার নাম"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workPlanData?.data?.work_plan_name}
        </Descriptions.Item>
        <Descriptions.Item
          label="বিস্তারিত"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workPlanData?.data?.details}
        </Descriptions.Item>
        <Descriptions.Item
          label="পরিকল্পনার তারিখ"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {englishDataToBangle(workPlanData?.data?.plan_date)}
        </Descriptions.Item>
        <Descriptions.Item
          label="পরিকল্পনার মেয়াদ"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {englishDataToBangle(workPlanData?.data?.duration_date)}
        </Descriptions.Item>
        {/* <Descriptions.Item
          label="স্ট্যাটাস"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {workPlanData?.data?.status}
        </Descriptions.Item> */}
      </Descriptions>
    </div>
  );
};

export default ViewWorkPlan;
