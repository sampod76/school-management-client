import { AuthContext } from "@/components/Auth/AuthProvider";
import DeshbordLoading from "@/components/loader/deshbordLoading";
import TabileLoading from "@/components/loader/tabileLoading";
import { ENUM_YN } from "@/const/userConstant";
import {
  useDeletePendingStudentMutation,
  useGetPendingStudentsQuery,
  usePatchPendingStudentApprovedMutation,
  usePatchPendingStudentMutation,
} from "@/redux/features/student/pending-students";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { Success_model, confirm_modal } from "@/utils/modalHook";
import {
  Col,
  Row,
  Select,
  Typography,
  Input,
  Table,
  Menu,
  Space,
  Dropdown,
  Button,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
const { Search } = Input;
import React, { useContext } from "react";
import { PiClipboardTextDuotone } from "react-icons/pi";
const data = [
  {
    gender: "Male",
    mobile_number: "12345678900",
    admission_date: "2020-08-23",
    guardians_name: "John Doe fathen0",
    students_name: "Jane Doe0",
    roll_number: 101,
    admission_number: 12345,
    serial_number: "SR1230",
    key: 0,
  },
  {
    gender: "Male",
    mobile_number: "12345678901",
    admission_date: "2021-08-27",
    guardians_name: "John Doe fathen1",
    students_name: "Jane Doe1",
    roll_number: 102,
    admission_number: 12346,
    serial_number: "SR1231",
    key: 1,
  },
  {
    gender: "Male",
    mobile_number: "12345678902",
    admission_date: "2022-08-26",
    guardians_name: "John Doe fathen2",
    students_name: "Jane Doe2",
    roll_number: 103,
    admission_number: 12347,
    serial_number: "SR1232",
    key: 2,
  },
  {
    gender: "Male",
    mobile_number: "12345678903",
    admission_date: "2023-08-2",
    guardians_name: "John Doe fathen3",
    students_name: "Jane Doe3",
    roll_number: 104,
    admission_number: 12348,
    serial_number: "SR1233",
    key: 3,
  },
  {
    gender: "Male",
    mobile_number: "12345678904",
    admission_date: "2024-08-28",
    guardians_name: "John Doe fathen4",
    students_name: "Jane Doe4",
    roll_number: 105,
    admission_number: 12349,
    serial_number: "SR1234",
    key: 4,
  },
  {
    gender: "Male",
    mobile_number: "12345678905",
    admission_date: "2025-08-9",
    guardians_name: "John Doe fathen5",
    students_name: "Jane Doe5",
    roll_number: 106,
    admission_number: 12350,
    serial_number: "SR1235",
    key: 5,
  },
  {
    gender: "Male",
    mobile_number: "12345678906",
    admission_date: "2026-08-30",
    guardians_name: "John Doe fathen6",
    students_name: "Jane Doe6",
    roll_number: 107,
    admission_number: 12351,
    serial_number: "SR1236",
    key: 6,
  },
  {
    gender: "Male",
    mobile_number: "12345678907",
    admission_date: "2027-08-29",
    guardians_name: "John Doe fathen7",
    students_name: "Jane Doe7",
    roll_number: 108,
    admission_number: 12352,
    serial_number: "SR1237",
    key: 7,
  },
  {
    gender: "Male",
    mobile_number: "12345678908",
    admission_date: "2028-08-26",
    guardians_name: "John Doe fathen8",
    students_name: "Jane Doe8",
    roll_number: 109,
    admission_number: 12353,
    serial_number: "SR1238",
    key: 8,
  },
  {
    gender: "Male",
    mobile_number: "12345678909",
    admission_date: "2029-08-17",
    guardians_name: "John Doe fathen9",
    students_name: "Jane Doe9",
    roll_number: 110,
    admission_number: 12354,
    serial_number: "SR1239",
    key: 9,
  },
  {
    gender: "Male",
    mobile_number: "123456789010",
    admission_date: "20210-08-2",
    guardians_name: "John Doe fathen10",
    students_name: "Jane Doe10",
    roll_number: 111,
    admission_number: 12355,
    serial_number: "SR12310",
    key: 10,
  },
  {
    gender: "Male",
    mobile_number: "123456789011",
    admission_date: "20211-08-23",
    guardians_name: "John Doe fathen11",
    students_name: "Jane Doe11",
    roll_number: 112,
    admission_number: 12356,
    serial_number: "SR12311",
    key: 11,
  },
  {
    gender: "Male",
    mobile_number: "123456789012",
    admission_date: "20212-08-3",
    guardians_name: "John Doe fathen12",
    students_name: "Jane Doe12",
    roll_number: 113,
    admission_number: 12357,
    serial_number: "SR12312",
    key: 12,
  },
  {
    gender: "Male",
    mobile_number: "123456789013",
    admission_date: "20213-08-23",
    guardians_name: "John Doe fathen13",
    students_name: "Jane Doe13",
    roll_number: 114,
    admission_number: 12358,
    serial_number: "SR12313",
    key: 13,
  },
];

const StudentAdmissionPage = () => {
  const { Error_model } = useContext(AuthContext);

  const {
    data: PendingStudents,
    error,
    isLoading,
    refetch,
  } = useGetPendingStudentsQuery("", { refetchOnFocus: true });
  const [
    deletePendingStudent,
    { error: deletePendingError, isLoading: deletePendingLoading, isSuccess },
  ] = useDeletePendingStudentMutation();
  const [
    updatePendingStudentApproved,
    {
      error: updatePendingApprovedError,
      isLoading: updatePendingApprovedLoading,
    },
  ] = usePatchPendingStudentApprovedMutation();
  const router = useRouter();

  const handleDelete = (id) => {
    // setOpen(true);
    // setDeleteItem(record);
    confirm_modal("আপনি কি এডমিশন টি বাতিল করতে চান!").then((result) => {
      if (result.isConfirmed) {
        deletePendingStudent(id).then((result) => {
          if (result?.data?.success) {
            refetch();
            Success_model({ message: "শিক্ষার্থী ডাটাটি ডিলিট করা হয়েছে" });
          } else {
            Error_model({ message: "ভুল হচ্ছে দয়া করে চেক করুন" });
            console.log(result);
          }
        });
      }
    });
  };
  const handleConfirmAdmintion = (id, userId) => {
    // setOpen(true);
    // setDeleteItem(record);
    confirm_modal("আপনি কি এডমিশনটি নিশ্চিত করতে চান!", "নিশ্চিত").then(
      (result) => {
        if (result.isConfirmed) {
          updatePendingStudentApproved({
            id,
            data: { admission_approved: ENUM_YN.YES, userId: userId },
          }).then((result) => {
            if (result?.data?.success) {
              refetch();
              Success_model({ message: "আবেদন মঞ্জুর করা হয়েছে" });
            } else {
              Error_model({
                message:
                  result?.error?.data?.message || "ভুল হচ্ছে দয়া করে চেক করুন",
              });
              console.log(result);
            }
            console.log(result);
          });
        }
      }
    );
  };

 

  if (
    error ||
    PendingStudents?.error ||
    deletePendingError ||
    updatePendingApprovedError
  ) {
    console.log(error);
    Error_model({
      message:
        error?.message ||
        PendingStudents?.error?.data?.message ||
        deletePendingError?.message ||
        updatePendingApprovedError?.message,
    });
  }
  if (isLoading || deletePendingLoading || updatePendingApprovedLoading) {
    // return <TabileLoading/>
    return <DeshbordLoading />;
  }
  const onSearch = (value) => console.log(value);

  return (
    <div className="mt-2">
      {" "}
      {/* <h1 className="text-2xl p-4 font-bold">নতুন শিক্ষার্থীর তালিকা </h1> */}
      <p className="ml-5 text-xl text-blue-400 my-3">
        হোম <span className="text-black ">/ নতুন শিক্ষার্থীর তালিকা</span>
      </p>
      <section style={{ marginInline: "1.2rem" }}>
        <div className="md:flex justify-between items-center">
          <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Select
                placeholder="শ্রেনি নির্বাচন করুন"
                style={{ minWidth: "100%", textAlign: "center" }}
              >
                <Select.Option value="">শ্রেনি নির্বাচন করুন</Select.Option>
                <Select.Option value="6">ষষ্ঠ শ্রেণি</Select.Option>
                <Select.Option value="chattogram">সপ্তম শ্রেণী</Select.Option>
                <Select.Option value="rajshahi">অষ্টম শ্রেণী</Select.Option>
                <Select.Option value="khulna">নবম শ্রেণী</Select.Option>
                <Select.Option value="khulna">দশম শ্রেণী</Select.Option>
                {/* Add other division options here */}
              </Select>
            </Col>
            <Col xs={24} md={8}>
              <Select
                placeholder="শাখা নির্বাচন করুন"
                style={{ minWidth: "100%", textAlign: "center" }}
              >
                <Select.Option value="">শাখা নির্বাচন করুন</Select.Option>
                <Select.Option value="6">ষষ্ঠ শ্রেণি</Select.Option>
                <Select.Option value="chattogram">সপ্তম শ্রেণী</Select.Option>
                <Select.Option value="rajshahi">অষ্টম শ্রেণী</Select.Option>
                <Select.Option value="khulna">নবম শ্রেণী</Select.Option>
                <Select.Option value="khulna">দশম শ্রেণী</Select.Option>
                {/* Add other division options here */}
              </Select>
            </Col>
            <Col xs={24} md={8}>
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                style={{ minWidth: "100%", textAlign: "center" }}
              />
            </Col>
          </Row>
        </div>
      </section>
      <Table
        dataSource={PendingStudents?.data?.map(
          (
            { student, father_info, mother_info, current_address, ...other },
            i
          ) => ({
            student_name: student?.name_bangla,
            father_name: father_info?.name_bangla,
            phone_number:
              father_info?.phone_number || mother_info?.phone_number,

            current_address: current_address?.village,
            gender: student?.gender,
            createdAt: other?.createdAt,
            ...other,
            serial_number: `S-0000${i + 1}`,
          })
        )}
        loading={
          isLoading || deletePendingLoading || updatePendingApprovedLoading
        }
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: "এসআর নং",
            width: 100,
            dataIndex: "serial_number",
            key: "key",
            // fixed: "left",
            width: 150,
          },

          {
            title: "শিক্ষাথীর নাম",
            dataIndex: "student_name",
            key: "key",
            width: 150,
          },
          {
            title: "অবিভাবকের নাম",
            dataIndex: "father_name",
            key: "key",
            width: 150,
          },
          {
            title: "ভর্তির তারিখ",
            dataIndex: "createdAt",
            key: "key",
            width: 150,
            render: (text, recode, dataIndex) => (
              <p>{englishDataToBangle(text)}</p>
            ),
          },
          {
            title: "মোবাইল নম্বর",
            dataIndex: "phone_number",
            key: "key",
            width: 150,
          },
          {
            title: "লিঙ্গ",
            dataIndex: "gender",
            key: "key",
            width: 150,
          },
          {
            title: "একশন",
            key: "key",

            fixed: "middle",
            width: 200,
            render: (record) => (
              <Space size="middle" align="center">
                <Button
                  type="link"
                  onClick={() => router.push(`student-admission/approve-and-edit/${record?._id}`)}
                  style={{ color: "white", background: "#60A5FA" }}
                >
                  Accept
                </Button>
                {/* <Button
                  type="link"
                  onClick={() =>
                    handleConfirmAdmintion(record?._id, record?.userId)
                  }
                  style={{ color: "white", background: "green" }}
                >
                  Accept
                </Button> */}
                <Button
                  type="link"
                  style={{ color: "white", background: "red" }}
                  onClick={() => handleDelete(record?._id)}
                >
                  Delete
                </Button>
              </Space>
            ),
          },

          // {
          //   title: "একশন",
          //   key: "key",
          //   fixed: "right",
          //   width: 100,
          //   render: (record) => (
          //     <Space size="middle">
          //       <Dropdown
          //         overlay={
          //           <Menu>
          //             <Menu.Item
          //               key="view"
          //               onClick={() => {
          //                 // Handle view logic here
          //               }}
          //             >
          //               <Link href={`student-admission/view/1`}>View</Link>
          //             </Menu.Item>
          //             <Menu.Item
          //               key="edit"
          //               onClick={() => {
          //                 // Handle edit logic here
          //               }}
          //             >
          //               <Link href={`student-admission/edit/1`}>Edit</Link>
          //             </Menu.Item>

          //             <Menu.Item
          //               key="delete"
          //               onClick={() => {
          //                 handleDelete();
          //               }}
          //             >
          //               Delete
          //             </Menu.Item>
          //           </Menu>
          //         }
          //       >
          //         <a>একশন</a>
          //       </Dropdown>
          //     </Space>
          //   ),
          // },
        ]}
        d
      ></Table>
    </div>
  );
};

export default StudentAdmissionPage;
