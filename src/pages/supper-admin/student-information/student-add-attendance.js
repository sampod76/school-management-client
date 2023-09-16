import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Menu,
  Row,
  Select,
  Input,
  Space,
  Table,
  Typography,
} from "antd";
import { useGetStudentsQuery } from "@/redux/features/student/studentApi";
import DeshbordLoading from "@/components/loader/deshbordLoading";
import { AuthContext } from "@/components/Auth/AuthProvider";
import ImageTag from "@/components/Tag/ImageTag";
import Link from "next/link";

import { ENUM_CLASS, ENUM_YN } from "@/const/userConstant";
import { usePostStudentAttendanceMutation } from "@/redux/features/studensAttendance/studensAttendanceApi";
import { Success_model, confirm_modal } from "@/utils/modalHook";
import { useRouter } from "next/router";

const StudentAddAttendance = () => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter()
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState([]);

  //filter states
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  //! *********** all api methods **************
  const { data: AllStudents, isLoading, error } = useGetStudentsQuery();
  const [
    createStudentAttendance,
    { isLoading: attendanceLoading, error: attendanceError },
  ] = usePostStudentAttendanceMutation();

  //
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setSelectedUserData([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys, selectedRows) => {
    const attendanceStudent = selectedRows.map((row) => ({
      student_userId: row.userId,
      student: row._id,
      attendance: ENUM_YN.YES,
    }));
    console.log("userId changed: ", selectedRows, attendanceStudent);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedUserData(attendanceStudent);
  };
  //   const rowSelection = {
  //     selectedRowKeys,
  //     onChange: onSelectChange,
  //   };
  const hasSelected = selectedRowKeys.length > 0;

  //   if (isLoading || deleteLoading) {
  //     return <DeshbordLoading />;
  //   }

  const onChange = (key) => {
    console.log(key);
  };

  const onSearch = (value) => console.log(value);

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };

  const handleFilterReset = () => {};
  if (error) {
    console.log(error);
    Error_model({
      message: error?.message,
    });
  }

  //handle submitted

  const handleSubmit = () => {
    const sendData = {
      classInfo: { name: ENUM_CLASS.ONE },
      date: new Date(Date.now()).toISOString(),
      students:selectedUserData
    };

    confirm_modal("আপনি কি হাজিরা জমা দিতে ইচ্ছুক!", "ইচ্ছুক").then(
      (result) => {
        if (result.isConfirmed) {
          createStudentAttendance(sendData)
            .then((res) => {
              if (res?.data?.success) {
                Success_model({ message: "শিক্ষার্থীর হাজিরা সম্পন্ন হয়েছে" });
                router.push(`student-attendance`)
              } else {
                Error_model({
                  message:
                    res?.error?.data?.message ||
                    "কোন কিছু ভুল হচ্ছে দয়া করে পুনরায় যাচাই করুন",
                  error: res,
                });
                console.log(res);
              }
            })
            .catch((error) => {
              Error_model({ message: error?.message, error: error });
            });
        }
      }
    );
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          padding: "1rem",
        }}
      >
        <h1 className="text-2xl p-4 font-bold ">শিক্ষার্থী উপস্থিতি</h1>
        <p className="ml-4 text-xl text-blue-400">
          হোম <span className="text-black">/ শিক্ষার্থী উপস্থিতি</span>
        </p>

        <section className="mt-6 mb-1 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2 ">
          <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
          <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
            <div className=" lg:w-[60%] md:w-[70%] w-full">
              {" "}
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Select
                    placeholder="শ্রেনি নির্বাচন করুন"
                    style={{ minWidth: "100%", textAlign: "center" }}
                    onChange={(value) =>
                      setStudentFilter((prevFilter) => ({
                        ...prevFilter,
                        studentClass: value,
                      }))
                    }
                  >
                    <Select.Option value="প্রথম">প্রথম শ্রেণী</Select.Option>
                    <Select.Option value="দ্বিতীয়">
                      দ্বিতীয় শ্রেণী
                    </Select.Option>
                    <Select.Option value="তৃতীয়">তৃতীয় শ্রেণী</Select.Option>
                    <Select.Option value="চতুর্থ">চতুর্থ শ্রেণী</Select.Option>
                    <Select.Option value="পঞ্চম">পঞ্চম শ্রেণী</Select.Option>
                    <Select.Option value="ষষ্ঠ">ষষ্ঠ শ্রেণী</Select.Option>
                    <Select.Option value="সপ্তম">সপ্তম শ্রেণী</Select.Option>
                    <Select.Option value="অষ্টম">অষ্টম শ্রেণী</Select.Option>
                    <Select.Option value="নবম">নবম শ্রেণী</Select.Option>
                    <Select.Option value="দশম">দশম শ্রেণী</Select.Option>
                  </Select>
                </Col>
                <Col xs={24} md={8}>
                  <Select
                    placeholder="শাখা নির্বাচন করুন"
                    style={{ minWidth: "100%", textAlign: "center" }}
                    onChange={(value) =>
                      setStudentFilter((prevFilter) => ({
                        ...prevFilter,
                        studentSection: value,
                      }))
                    }
                  >
                    <Select.Option value="ক">ক শাখা</Select.Option>
                    <Select.Option value="খ">খ শাখা</Select.Option>
                    <Select.Option value="গ">গ শ্রেণী</Select.Option>
                  </Select>
                </Col>
                <Col xs={24} md={8}>
                  <Select
                    placeholder="বিভাগ নির্বাচন করুন"
                    style={{ minWidth: "100%", textAlign: "center" }}
                    onChange={(value) =>
                      setStudentFilter((prevFilter) => ({
                        ...prevFilter,
                        studentDepartment: value,
                      }))
                    }
                  >
                    <Select.Option value="বিজ্ঞান">বিজ্ঞান</Select.Option>
                    <Select.Option value="বাণিজ্য">বাণিজ্য</Select.Option>
                    <Select.Option value="মানবিক">মানবিক</Select.Option>
                  </Select>
                </Col>
              </Row>
              {/* <Row className="mt-3">
                <Button type="primary" onClick={handleFilterClick}>
                  ফিল্টার করুন
                </Button>
                <Button type="primary ml-2" onClick={handleFilterReset}>
                  রিসেট করুন
                </Button>
              </Row> */}
            </div>

            <div className="lg:w-[40%] md:w-[30%] w-full mt-4 md:mt-0">
              <Row justify="end">
                <Col xs={24} md={22} lg={16}>
                  <Input.Search
                    placeholder="আইডি দিয়ে অনুসন্ধান"
                    onSearch={onSearch}
                    enterButton
                    style={{
                      minWidth: "100%",
                      textAlign: "center",
                      width: 200,
                    }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </div>
      <Table
        loading={attendanceLoading || isLoading}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
          //   width: "fit-content",
        }}
        pagination={false}
        scroll={{
          x: 1200,
        }}
        columns={[
          {
            title: "",
            dataIndex: "photo",
            key: "_id",
            width: 100,
            render: (record) => (
              <ImageTag
                data={{
                  url: record?.url,
                  width: 100,
                  height: 100,
                  //   class: "w-full h-[4.5rem]",
                }}
              />
            ),
          },
          {
            title: "নাম",
            dataIndex: "name",
            key: "_id",
            width: "200px",
            fixed: "left",
            ellipsis: true,
          },
          {
            title: "ব্যবহারকারী আইডি",
            dataIndex: "userId",
            key: "_id",
            width: "200px",
            ellipsis: true,
            fixed: "left",
          },
          {
            title: "শ্রেণী",
            dataIndex: "class",
            key: "_id",
            width: 100,
          },
          {
            title: "মোবাইল নম্বর",
            dataIndex: "phone",
            key: "_id",
            width: "200px",
            ellipsis: true,
          },
          {
            title: "ঠিকানা",
            key: "_id",
            dataIndex: "address",
            ellipsis: true,
            width: "300px",
          },
          {
            title: "",
            key: "_id",
            fixed: "right",
            width: 100,
            render: (record) => (
              <Space size="middle">
                <Button type="primary">
                  <Link href={`student-admission/view/${record?._id}`}>
                    View
                  </Link>
                </Button>
              </Space>
            ),
          },
        ]}
        dataSource={AllStudents?.data?.map(
          ({
            student,
            father_info,
            mother_info,
            current_address,
            ...other
          }) => ({
            name: student?.name_bangla,
            photo: student?.photo?.url,
            class: student?.desired_class,
            address:
              current_address?.sub_district +
              "," +
              current_address?.union +
              "," +
              current_address?.village,
            phone: father_info?.phone_number || mother_info?.phone_number,
            key: other?._id,
            ...other,
          })
        )}
      />
      <div
        style={{
          position: "fixed",
          top: "95%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 100,
        }}
      >
        <Button
          type="primary"
          shape="round"
          onClick={() => handleSubmit()}
          style={{
            height: 40,
            textAlign: "center",
            backgroundColor: "green",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.5 },
            },
          }}
        >
          জমা দিন
        </Button>
      </div>
    </div>
  );
};
export default StudentAddAttendance;
