import React from "react";
import { useRouter } from "next/router";
 
import { useGetSingleNoticeQuery } from "@/redux/features/notices/noticesApi";
import Image from "next/image";
import demoImage from "../../../../../assets/images/noImge.jpg";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { Descriptions } from "antd";
const NoticeView = () => {
  const router = useRouter();
  const { noticeId } = router.query;

  // Fetch notice data by ID
  const {
    data: noticeData,
    refetch,
    isError,
  } = useGetSingleNoticeQuery(noticeId, {
    skip: !noticeId,
  });

  if (isError) {
    // Handle error
    return <div className="text-red-500">Error loading notice data</div>;
  }

  if (!noticeData) {
    // Handle loading state
    return <div className="text-gray-500">Loading...</div>;
  }

  const { title, notice_date, publishe_date, message, createdAt, updatedAt } =
    noticeData?.data;

  const imageUrl = noticeData?.data?.document?.url;

  return (
    <div>
      <h3 className="text-4xl font my-4 ms-2">নোটিশ ডিটেইলস</h3>
      {/* <div className="bg-white rounded-lg shadow-lg p-6">
        {imageUrl ? (
          <Image
            className=" w-48 h-48 mb-4"
            src={demoImage}
            width={100}
            height={100}
            alt="image"
          />
        ) : (
          <div className="w-32 h-40 bg-gray-300">
            {" "}
            <Image
              className="w-32 h-40"
              src={demoImage}
              width={10}
              height={10}
              alt="image"
            />
          </div> // Placeholder demo image
        )}
      </div> */}

      <Descriptions layout="horizontal" bordered>
        <Descriptions.Item
          label="শিরোনাম"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {title}
        </Descriptions.Item>
        <Descriptions.Item
          label="তারিখ"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {englishDataToBangle(notice_date)}
        </Descriptions.Item>
        <Descriptions.Item
          label="প্রকাশের তারিখ"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          {englishDataToBangle(publishe_date)}
        </Descriptions.Item>
        <Descriptions.Item
          label="মেসেজ"
          labelStyle={{ width: "30%" }}
          contentStyle={{ width: "70%" }}
          span={4}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: message
                .replace(/<a(.*?)>/g, '<a$1 className="text-blue-500">')
                .replace(/<ul>/g, '<ul className="list-disc pl-6">')
                .replace(/<ol>/g, '<ol className="list-decimal pl-6">')
                .replace(/<li>/g, '<li className="mb-2">')
                .replace(
                  /<\/li>\n<li className="mb-2">/g,
                  "</li><li className='mb-2'>"
                ),
            }}
          />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default NoticeView;
