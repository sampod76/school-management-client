import { AuthContext } from "@/components/Auth/AuthProvider";
import DeshbordLoading from "@/components/loader/deshbordLoading";
import { ENUM_CLASS } from "@/const/userConstant";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
} from "@/redux/features/student/studentApi";
import { confirm_modal } from "@/utils/modalHook";
import { Button, Dropdown, Space, Table, Modal } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import Swal from "sweetalert2";

const ListView = () => {
  const [open, setOpen] = useState(false);
  // const [deleteItem, setDeleteItem] = useState();
  const { Error_model } = useContext(AuthContext);

  const { data: students, error, isLoading, refetch } = useGetStudentsQuery();
  const [
    deleteStudent,
    { error: deleteError, isLoading: deleteLoading, isSuccess },
  ] = useDeleteStudentMutation();
  const router = useRouter();

  const handleDelete = (record) => {
    // setOpen(true);
    // setDeleteItem(record);
   confirm_modal("আপনি কি স্টুডেন্টের ডাটা ডিলিট করতে ইচ্ছুক").then((result) => {
      if (result.isConfirmed) {
        deleteStudent(record._id).then((result) => {
          if (result?.data?.success) {
            refetch();
          } else {
            Error_model({
              message: "ভুল হচ্ছে দয়া করে চেক করুন",
              error: result,
            });
            console.log(result);
          }
        });
      }
    });
  };

  if (isLoading || deleteLoading) {
    return <DeshbordLoading />;
  }

  if (error || students?.error || deleteError) {
    console.log(error);
    Error_model({
      message:
        error?.message ||
        students?.error?.data?.message ||
        deleteError?.message,
    });
 
  }

  const items = [
    {
      key: "1",
      // label:(<Link href={`/supper-admin/student-information/view/`}>View</Link>),
      label: "View",
    },
    {
      key: "3",
      label: "Edit",
    },
    {
      key: "2",
      label: "Delete",
    },
  ];

  console.log(students)
  return (
    <>
      <div>
        <Table
          loading={isLoading || deleteLoading}
          dataSource={students?.data?.map(
            (
              { student, father_info, mother_info, current_address, ...other },
              i
            ) => ({
              student_name: student?.name_bangla,
              father_name: father_info?.name_bangla,
              father_phone_number: father_info?.phone_number,
              mother_phone_number: mother_info?.phone_number,
              current_address: current_address?.village,
              gender: student?.gender,
              ...other,
              serial_number: `S-0000${i}`,
            })
          )}
          style={{ margin: "0.3rem 1rem" }}
          scroll={{
            x: 1000,
          }}
          columns={[
            {
              title: "এসআর নং",
              width: 100,
              dataIndex: "serial_number",
              key: "_id",
              // fixed: "left",
              width: 150,
            },
            {
              title: "শিক্ষাথীর নাম",
              dataIndex: "student_name",
              key: "_id",
              width: 150,
              // render: (_, record) => {
              //   return <p>{record.student?.name_bangla}</p>
              // },
            },
            {
              title: "আইডি",
              dataIndex: "userId",
              key: "_id",
              width: 150,
            },

            {
              title: "অবিভাবকের নাম",
              dataIndex: "father_name",
              key: "_id",
              width: 150,
            },

            {
              title: "মোবাইল নম্বর",
              dataIndex: "father_phone_number",
              key: "_id",
              width: 150,
            },
            {
              title: "লিঙ্গ",
              dataIndex: "gender",
              key: "_id",
              width: 150,
            },
            {
              title: " অবস্থা",
              width: 100,
              dataIndex: "current_address",
              key: "_id",
              // fixed: "left",
            },

            {
              title: "একশন",
              key: "_id",
              fixed: "right",
              width: 100,
              render: (record) => (
                <Space size="middle">
                  <Dropdown
                    // menu={{
                    //   items,
                    // }}
                    overlay={
                      <ul className="bg-gray-200 rounded-lg p-2 w-[80px] text-center font-bold ">
                        {items.map((item) => (
                          <li key={item.key}>
                            <Button
                              style={{ width: "100%" }}
                              onClick={() => {
                                item.label === "View"
                                  ? router.push(
                                      `/supper-admin/student-information/student-admission/view/${record._id}`
                                    )
                                  : item.label === "Edit"
                                  ? router.push(
                                      `/supper-admin/student-information/student-admission/edit/${record._id}`
                                    )
                                  : handleDelete(record);
                              }}
                            >
                              {item.label}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    }
                  >
                    <a>একশন</a>
                  </Dropdown>
                </Space>
              ),
            },
          ]}
          d
        ></Table>
      </div>
    </>
  );
};

export default ListView;
