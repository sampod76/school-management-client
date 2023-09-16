import {
  useDeleteEventMutation,
  useGetAllEventQuery,
} from "@/redux/features/event/eventApi";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table, Tag } from "antd";
 
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EventTable = () => {
  const [startDate, setStartDate] = useState(new Date());

  // get query
  const { data: eventData, refetch } = useGetAllEventQuery();

  // mutation query
  const [deleteEvent, { isError }] = useDeleteEventMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete Event!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteEvent(id).then((props) => {
          console.log(props);
          if (props.data?.success) {
            refetch();
            toast.success("Event deleted successfully");
          }
        });
      }
    });
  };

  // Sort the eventData by createdAt in ascending order and take the first five items
  const sortedEvents = eventData?.data
    ? eventData.data
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)
    : [];

  return (
    <div>
      <Table
        dataSource={sortedEvents}
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
            title: "ইভেন্ট এর নাম",

            dataIndex: "event_name",
            key: "_id",
            //এটা হলে সে ওই জিনিসটাকে সব সময় ফিক্স রাখবে বাকিগুলো স্কুল করবে
            // fixed: "left",
            width: 250,
            //ডাটা যদি অনেক বড় হয়ে যায় তাহলে সেখানে ... দেখাবে
          },
          {
            title: "তারিখ",
            dataIndex: "event_date",
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
                        <Link href={`office-desk/event/view/${record._id}`}>
                          View
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`office-desk/event/edit/${record._id}`}>
                          Edit
                        </Link>
                      </Menu.Item>

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

export default EventTable;
