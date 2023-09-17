import React, { useContext } from "react";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";
import { useDeleteWorkPlanMutation } from "@/redux/features/workPlan/workPlan";
import { confirm_modal } from "@/utils/modalHook";
import { toast } from "react-toastify";
import { AuthContext } from "@/components/Auth/AuthProvider";

// const data = [
//   {
//     key: 1,
//     subject: "গণিত",
//     dateFrom: "২০২৩-০৯-১৫",
//     startTime: "১০:০০ সকাল",
//     duration: "২ ঘণ্টা",
//     roomNo: "১০১",
//     markMin: "৪০",
//     markMax: "১০০",
//   },
//   {
//     key: 2,
//     subject: "বাংলা",
//     dateFrom: "২০২৩-০৯-২০",
//     startTime: "২:০০ অপরাহ্ণ",
//     duration: "১.৫ ঘণ্টা",
//     roomNo: "১০২",
//     markMin: "৩০",
//     markMax: "৯০",
//   },
// ];

const UpcomingAssignment = ({ data }) => {
  // delete mutations
  const { setUser, Error_model,user } = useContext(AuthContext);
  
  const [deleteWorkPlan,{isLoading,error}] = useDeleteWorkPlanMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete WoRk Plan!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteWorkPlan(id).then((props) => {
          if (props.data?.success) {
            refetch();
            toast.success("Work Plan deleted successfully");
          }
        });
      }
    });
  };

  const columns = [
    {
      title: "বিষয়",
      dataIndex: "subject",
      render: (subject) => (subject ? subject.bookName : "N/A"),
    },
    {
      title: "তারিখ থেকে",
      dataIndex: "dateFrom",
    },
    {
      title: "সময় শুরু",
      dataIndex: "startTime",
    },
    {
      title: "সময়কাল",
      dataIndex: "duration",
    },
    {
      title: "রুম নম্বর",
      dataIndex: "roomNo",
    },
    {
      title: "মার্ক সর্বনিম্ন",
      dataIndex: "markMin",
    },
    {
      title: "মার্ক সর্বোচ্চ",
      dataIndex: "markMax",
    },
    {
      title: "একশন",
      key: "_id",
      fixed: "right",
      width: 100,
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                {/* <Menu.Item
                  key="view"
                  onClick={() => {
                    // Handle view logic here
                  }}
                >
                  <Link href={"#"}>View</Link>
                </Menu.Item> */}
                <Menu.Item
                  key="edit"
                  onClick={() => {
                    // Handle edit logic here
                  }}
                >
                  <Link href={`online-assignment/edit/${record._id}`}>
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
  ];
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">আসন্য এসাইনমেন্ট পেজ</h1>
      <Table
        scroll={{
          x: 1000,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default UpcomingAssignment;
