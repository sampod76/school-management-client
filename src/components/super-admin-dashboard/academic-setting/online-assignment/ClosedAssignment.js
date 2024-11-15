// pages/ClosedAssignment.js
import React, { useContext } from "react";
import { Table, Checkbox, Space, Dropdown, Menu } from "antd";
import Link from "next/link";
import { useDeleteOnlineAssignmentsMutation } from "@/redux/features/onlineAssignments/onlineAssignmentsApi";
import {
  Error_model_hook,
  Success_model,
  confirm_modal,
} from "@/utils/modalHook";
import { toast } from "react-toastify";
import { AuthContext } from "@/components/Auth/AuthProvider";

// const data = [
//   {
//     key: 1,
//     exam: "গণিত",
//     quiz: "কুইজ 1",
//     question: "প্রশ্ন 1",
//     attempts: 2,
//     examFrom: "২০২৩-০৯-১৫",
//     examTo: "২০২৩-০৯-২০",
//     duration: "২ ঘণ্টা",
//     examPublished: true, // Representing as boolean
//     resultPublished: false, // Representing as boolean
//     description: "এই পরীক্ষা সম্পন্ন হয়েছে",
//   },
//   // Add more data items as needed
// ];

const ClosedAssignment = ({ data, refetch }) => {
  const { setUser, Error_model } = useContext(AuthContext);
  // delete mutations
  const [deleteOnlineAssignments, { isLoading, error }] =
    useDeleteOnlineAssignmentsMutation();

  const handleDelete = (id) => {
    confirm_modal("আপনি কি কর্ম পরিকল্পনা ডিলিট করতে চান!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteOnlineAssignments(id).then((props) => {
          if (props.data?.success) {
            refetch();
            Success_model({ message: "সফলভাবে কর্মপরিকল্পনা ডিলেট করা হয়েছে" });
          } else {
            Error_model({ message: props?.error?.data?.message });
          }
        });
      }
    });
  };
  const columns = [
    {
      title: "পরীক্ষা",
      dataIndex: "exam",
    },
    {
      title: "কুইজ",
      dataIndex: "quiz",
      width: 150,
    },
    {
      title: "প্রশ্ন",
      dataIndex: "question",
      width: 250,
    },
    {
      title: "চেষ্টা",
      dataIndex: "attempts",
    },
    {
      title: "পরীক্ষা শুরু",
      dataIndex: "examFrom",
      width: 50,
    },
    {
      title: "পরীক্ষা শেষ",
      dataIndex: "examTo",
      width: 50,
    },
    {
      title: "সময়কাল",
      dataIndex: "duration",
    },
    {
      title: "পরীক্ষা প্রকাশিত",
      dataIndex: "examPublished",
      width: 50,
      render: (examPublished) => <Checkbox checked={examPublished} />,
    },
    {
      title: "নতুন ফলাফল",
      dataIndex: "resultPublished",
      width: 50,
      render: (resultPublished) => <Checkbox checked={resultPublished} />,
    },
    {
      title: "বর্ণনা",
      dataIndex: "description",
      width: 450,
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
      <h1 className="text-2xl font-semibold mb-6">
        নিকটবর্তী অ্যাসাইনমেন্ট পেজ
      </h1>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default ClosedAssignment;
