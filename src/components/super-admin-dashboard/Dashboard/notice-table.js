import {
  useDeleteEventMutation,
  useGetAllEventQuery,
} from "@/redux/features/event/eventApi";
import {
  useDeleteNoticeMutation,
  useGetNoticesQuery,
} from "@/redux/features/notices/noticesApi";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table, Tag } from "antd";
 
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const NoticeTable = () => {
  const [startDate, setStartDate] = useState(new Date());

  // get query
  const { data: noticeData, refetch } = useGetNoticesQuery();

  // mutation query
  const [deleteNotice, { isError }] = useDeleteNoticeMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete Notice!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteNotice(id).then((props) => {
          console.log(props);
          if (props.data?.success) {
            refetch();
            toast.success("Notice deleted successfully");
          }
        });
      }
    });
  };

  // Sort the eventData by createdAt in ascending order and take the first five items
  const sortedNotice = noticeData?.data
    ? noticeData.data
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
    : [];

  return (
    <div>
      <Table
        dataSource={sortedNotice}
        style={{ margin: "0.3rem 1rem" }}
        // scroll={{
        //   x: 1200,
        // }}
        columns={[
          {
            title: "ক্রমিক নং",
            dataIndex: "date",
             key: "_id",
            width: 50,
            render: (text, record, rowIndex) => rowIndex + 1,
          },
          {
            title: "নোটিশ",

            dataIndex: "title",
             key: "_id",
            //এটা হলে সে ওই জিনিসটাকে সব সময় ফিক্স রাখবে বাকিগুলো স্কুল করবে
            // fixed: "left",
            width: 250,
            //ডাটা যদি অনেক বড় হয়ে যায় তাহলে সেখানে ... দেখাবে
          },
          {
            title: "তারিখ",
            dataIndex: "notice_date",
             key: "_id",
            width: 100,
            render: (recode) => <span>{englishDataToBangle(recode)}</span>,
          },

          {
            title: "একশন",
             key: "_id",
            fixed: "right",
            width: 50,
            render: (record) => (
              <Space size="middle">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        key="view"
                        onClick={() => {
                          // Handle view logic here
                        }}
                      >
                        <Link
                          href={`office-desk/office-notice/view/${record._id}`}
                        >
                          View
                        </Link>
                      </Menu.Item>
                      {/* <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link
                          href={`office-desk/office-notice/edit/${record._id}`}
                        >
                          Edit
                        </Link>
                      </Menu.Item> */}

                      <Menu.Item
                        key="delete"
                        onClick={() => {
                          handleDelete(record._id);
                        }}
                      >
                        Delete
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <a>একশন</a>
                </Dropdown>
              </Space>
            ),
          },
        ]}
      ></Table>
    </div>
  );
};

export default NoticeTable;
