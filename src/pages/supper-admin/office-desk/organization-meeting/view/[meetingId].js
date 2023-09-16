import React, { useEffect } from "react";
import { Descriptions, Form } from "antd";

import { useRouter } from "next/router";
import { useGetSingleMeetingQuery } from "@/redux/features/meeting/meetingApi";

const ViewOrganizationMeeting = () => {
  const router = useRouter();
  const { meetingId } = router.query;

  // get query
  const { data: meetingData } = useGetSingleMeetingQuery(meetingId, {
    skip: !meetingId,
  });

  return (
    <div className="mx-6 my-4">
      <h3 className="text-2xl font-bold mb-4">প্রতিষ্ঠানের মিটিং</h3>

      <Descriptions layout="horizontal" bordered>
        <Descriptions.Item
          label="মিটিং এর বিষয়"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {meetingData?.data?.meeting_subject}
        </Descriptions.Item>

        <Descriptions.Item
          label="মিটিং এর তারিখ"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {meetingData?.data?.meeting_date}
        </Descriptions.Item>

        <Descriptions.Item
          label="মিটিং এর স্থান"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {meetingData?.data?.meeting_place}
        </Descriptions.Item>
        <Descriptions.Item
          label="অংশগ্রহণকারী"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {meetingData?.data?.participants}
        </Descriptions.Item>
        <Descriptions.Item
          label="বিস্তারিত"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {meetingData?.data?.details}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ViewOrganizationMeeting;
