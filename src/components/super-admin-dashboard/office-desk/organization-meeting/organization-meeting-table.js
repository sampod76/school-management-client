import {
  useDeleteMeetingMutation,
  useGetAllMeetingQuery,
} from "@/redux/features/meeting/meetingApi";
import {
  useDeleteWorkPlanMutation,
  useGetAllWorkPlanQuery,
} from "@/redux/features/workPlan/workPlan";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { confirm_modal } from "@/utils/modalHook";
import { Dropdown, Menu, Space, Table } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MeetingTable = () => {
  const [workPlanData, setWorkPlanData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const {
    data: allWorkPlanData,
    isLoading,
    isError,
    refetch,
  } = useGetAllMeetingQuery();

  useEffect(() => {
    if (allWorkPlanData?.data) {
      const dataWithSerialNumbers = allWorkPlanData.data.map((item, index) => ({
        ...item,
        serial_no: (index + 1).toString(),
        key: index.toString(),
      }));
      setWorkPlanData(dataWithSerialNumbers);
    }
  }, [allWorkPlanData]);

  console.log(allWorkPlanData, "hhhhhhhhhh");

  // delete mutations
  const [deleteMeeting] = useDeleteMeetingMutation();

  const handleDelete = (id) => {
    console.log(id);
    confirm_modal("আপনি কি মিটিং তথ্য মোছতে চান?").then(async (willDelete) => {
      if (willDelete.value) {
        deleteMeeting(id).then((props) => {
          console.log(props);
          if (props.data?.success) {
            refetch();
            toast.success(" মিটিং তথ্য সফলভাবে মোছা হয়েছে");
          }
        });
      }
    });
  };

  return (
    <>
      <Table
        dataSource={workPlanData}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{
          x: 1000,
        }}
        columns={[
          {
            ellipsis: true,
            title: "ক্রমিক নং",
            dataIndex: "serial_no",
            key: "_id",
            width: 50,
          },
          {
            title: "বিষয়",
            dataIndex: "meeting_subject",
            key: "_id",
            width: 100,
            ellipsis: true,
          },
          {
            title: "বিস্তারিত",
            dataIndex: "details",
            key: "_id",
            width: 150,
            ellipsis: true,
          },
          {
            title: "স্থান",
            dataIndex: "meeting_place",
            key: "_id",
            width: 150,
            ellipsis: true,
          },

          {
            title: "অংশগ্রহণকারী",
            width: 100,
            dataIndex: "participants",
            key: "_id",
            // render: (status) => (
            //   <span style={{ color: status === "active" ? "green" : "red" }}>
            //     {status}
            //   </span>
            // ),
            ellipsis: true,
          },
          {
            title: "তারিখ",
            width: 100,
            dataIndex: "meeting_date",
            key: "_id",
            width: 100,
            ellipsis: true,
            render: (plan_date) => (
              <span>{englishDataToBangle(plan_date)}</span>
            ),
          },

          {
            title: "একশন",
            ellipsis: true,
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
                        <Link href={`organization-meeting/view/${record._id}`}>
                          View
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`organization-meeting/edit/${record._id}`}>
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
        loading={isLoading}
      ></Table>
    </>
  );
};

export default MeetingTable;

// import DeshbordLoading from "@/components/loader/deshbordLoading";
// import { useGetAllMeetingQuery } from "@/redux/features/meeting/meetingApi";
// import { confirm_modal } from "@/utils/modalHook";
// import { Dropdown, Menu, Space, Table } from "antd";
// import Link from "next/link";
// import Swal from "sweetalert2";
// const localData = [
//   {
//     key: 0,
//     meeting: "শিক্ষক-শিক্ষিকা সভা",
//     date: "2023-01-15",
//     topic: "শিক্ষার্থীদের উন্নয়ন",
//     member: "প্রধান শিক্ষক,শিক্ষক,শিক্ষিকা",
//     link: "https://drive.google.com/file/d/15apILN0slxqfBkFLXnhP1fU30MuUrnNU/view?usp=sharing",
//     class: "six",
//     mobile_number: "12345678900",
//     application_time: "2020-08-13",
//     date: "2020-03-13",
//     students_name: "Jane Doe0",
//     roll_number: 101,
//     total_number: 1417,
//     serial_number: "SR1230",
//   },
//   {
//     key: 1,
//     meeting: "আলোচনা স্কুল চেয়ারম্যান সভা",
//     date: "2023-05-02",
//     topic: "স্কুল প্রজেক্ট এবং কর্মসূচি",
//     member: "চেয়ারম্যান,প্রধান শিক্ষক,সদস্য,শিক্ষক,শিক্ষিকা",
//     link: "https://drive.google.com/file/d/1nBqo1QfssD1K-ohzwXezzjaIlSsEJRGv/view?usp=sharing",
//   },
//   {
//     key: 2,
//     meeting: "শিক্ষক-শিক্ষিকা সভা",
//     date: "2023-06-05",
//     topic: "পাঠ্যপুস্তক ও শিক্ষাষ্ট্রী উন্নতি সভা",
//     member: "প্রধান শিক্ষক,শিক্ষক,শিক্ষিকা",
//     link: "https://drive.google.com/file/d/19gd3wJnVvuYhm2Q_z5wD4l8o_M5T_w3B/view?usp=sharing",
//   },
//   {
//     key: 3,
//     meeting: " সভাপতি শিক্ষক সভা",
//     date: "2023-07-12",
//     topic: "প্রশাসনিক সমস্যা ও সমাধান সভা",
//     member: "চেয়ারম্যান,প্রধান শিক্ষক,শিক্ষক,শিক্ষিকা",
//     link: "https://drive.google.com/file/d/1YTG9SS6o3vgu3w8Sg-mVUH4fXXu9Yrro/view?usp=drive_link",
//   },
//   {
//     key: 4,
//     meeting: "শিক্ষার্থী অভিভাবক সভা",
//     date: "2023-08-09",
//     topic: "শিক্ষার্থীদের উন্নয়ন",
//     member: " প্রধান শিক্ষক,শিক্ষক,শিক্ষিকা,অভিভাবক",
//     link: "https://drive.google.com/file/d/15apILN0slxqfBkFLXnhP1fU30MuUrnNU/view?usp=sharing",
//   },
// ];

// // const items = [
// //   {
// //     key: "1",
// //     label: "Edit",
// //   },
// //   {
// //     key: "2",
// //     label: "Delete",
// //   },
// //   {
// //     key: "3",
// //     label: "View",
// //   },
// // ];

// const MeetingTable = () => {
//   const { data, isLoading, isError } = useGetAllMeetingQuery();

//   if (isLoading) {
//     return <DeshbordLoading />;
//   }
//   console.log(isError, "error");
//   console.log(data, "testing");
//   console.log(data?.data, "testing");
//   console.log(localData, "testing");

//   const handleDelete = () => {
//     Swal.fire({
//       title: "আপনি কি ডিলিট করতে চান?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "হ্যা",
//       cancelButtonText: "না",
//     });
//   };

//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <Table
//         dataSource={data?.data}
//         style={{ margin: "0.3rem 1rem" }}
//         scroll={{
//           x: 900,
//         }}
//         columns={[
//           {
//             title: "প্রতিষ্ঠানের মিটিং",
//             // width: 100,
//             dataIndex: "name",
//             key: "1",
//           },

//           {
//             title: "মিটিং এর তারিখ ",
//             dataIndex: "date",
//             key: "2",
//             // width: 150,
//           },

//           {
//             title: "মিটিং এর বিষয়",
//             dataIndex: "subject",
//             key: "3",
//             // width: 150,
//           },
//           {
//             title: "অংশগ্রহণকারী সদস্যবৃন্দ",
//             // width: 100,
//             dataIndex: "participant",
//             key: "4",
//             // fixed: "left",
//           },

//           {
//             title: "একশন",
//             key: "5",
//             fixed: "right",
//             width: 100,
//             render: (record) => (
//               <Space size="middle">
//                 <Dropdown
//                   overlay={
//                     <Menu>
//                       <Menu.Item
//                         key="view"
//                         onClick={() => {
//                           // Handle view logic here
//                         }}
//                       >
//                         <Link href={`${record.link}`}>Open</Link>
//                       </Menu.Item>
//                       {/* <Menu.Item
//                         key="edit"
//                         onClick={() => {
//                           // Handle edit logic here
//                         }}
//                       >
//                         <Link href={`office-notice/edit/1`}>Edit</Link>
//                       </Menu.Item> */}

//                       <Menu.Item
//                         key="delete"
//                         onClick={() => {
//                           handleDelete();
//                         }}
//                       >
//                         Delete
//                       </Menu.Item>
//                     </Menu>
//                   }
//                 >
//                   <a>একশন</a>
//                 </Dropdown>
//               </Space>
//             ),
//           },
//         ]}
//         d
//       ></Table>
//     </div>
//   );
// };

// export default MeetingTable;
