/* //? create by sampod 
view page --> kamrul vi 
delete --> sampod
//? */
import React, { useContext, useState } from "react";
import {
  Table,
  Button,
  Space,
  Dropdown,
  Col,
  Row,
  Select,
  Typography,
  Input,
  Menu,
} from "antd";
import {
  useDeleteTeacherMutation,
  useGetTeachersQuery,
} from "@/redux/features/teacher/teacherApi";
import ImageTag from "@/components/Tag/ImageTag";
import Swal from "sweetalert2";

import { useRouter } from "next/router";
import Link from "next/link";
import { confirm_modal } from "@/utils/modalHook";
import { AuthContext } from "@/components/Auth/AuthProvider";

const { Search } = Input;

const AllTeachers = () => {
  const { Error_model } = useContext(AuthContext);
  const router = useRouter();
  const { data: Allteacher, isLoading, error, refetch } = useGetTeachersQuery();
  const [
    deletedTeacher,
    { isError, isLoading: teacherLoading, error: teacherError },
  ] = useDeleteTeacherMutation();

  // state for filter
  const [studentFilter, setStudentFilter] = useState({
    studentClass: "",
    studentSection: "",
    studentDepartment: "",
  });

  const handleDelete = (id) => {
    // setOpen(true);
    // setDeleteItem(record);
    confirm_modal("আপনি কি শিক্ষক এর ডাটা ডিলিট করতে চান!").then((result) => {
      if (result.isConfirmed) {
        deletedTeacher(id).then((result) => {
          if (result.data?.success) {
            refetch();
          } else {
            Error_model({
              message:
                result.error?.data?.message || "ভুল হচ্ছে দয়া করে চেক করুন",
              error: result,
            });
            console.log(result);
          }
        });
      }
    });
  };

  const items = [
    {
      key: "1",
      // label:(<Link href={`/supper-admin/student-information/view/`}>View</Link>),
      label: "View",
    },
    {
      key: "2",
      label: "Delete",
    },
    // {
    //   key: "3",
    //   label: "Edit",
    // },
  ];

  const handleFilterClick = () => {
    console.log("Selected Filters:", studentFilter);
  };

  const handleFilterReset = () => {};

  const onSearch = (value) => console.log(value);

  return (
    <div className="bg-white rounded-lg shadow p-6 m-3">
      <h2 className="text-xl font-semibold mb-4">সকল শিক্ষক</h2>

      <section className="mt-6 mb-10 px-4 border-2 border-gray-300  py-4 rounded-xl mx-2">
        <Typography.Title level={4}>ফিল্টারিং</Typography.Title>
        <div className="flex md:flex-row flex-col-reverse gap-2 justify-between items-start">
          <div className=" lg:w-[60%] md:w-[70%] w-full">
            {" "}
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} lg={8}>
                <Select
                  placeholder="বিষয় নির্বাচন করুন"
                  style={{ minWidth: "100%", textAlign: "center" }}
                  onChange={(value) =>
                    setStudentFilter((prevFilter) => ({
                      ...prevFilter,
                      studentClass: value,
                    }))
                  }
                >
                  <Select.Option value="বাংলা">বাংলা</Select.Option>
                  <Select.Option value="ইংরেজি">ইংরেজি</Select.Option>
                  <Select.Option value="গণিত">গণিত</Select.Option>
                  <Select.Option value="বিজ্ঞান">বিজ্ঞান</Select.Option>
                  <Select.Option value="সামাজিক বিজ্ঞান">
                    সামাজিক বিজ্ঞান
                  </Select.Option>
                  <Select.Option value="বাংলাদেশ ও বিশ্বপরিচয়">
                    বাংলাদেশ ও বিশ্বপরিচয়
                  </Select.Option>
                  <Select.Option value="ইসলাম ও নৈতিক শিক্ষা">
                    ইসলাম ও নৈতিক শিক্ষা
                  </Select.Option>
                  <Select.Option value="হিন্দু ধর্ম ও নৈতিক শিক্ষা">
                    হিন্দু ধর্ম ও নৈতিক শিক্ষা
                  </Select.Option>
                  <Select.Option value="বৌদ্ধ ধর্ম ও নৈতিক শিক্ষা">
                    বৌদ্ধ ধর্ম ও নৈতিক শিক্ষা
                  </Select.Option>
                  <Select.Option value="খ্রিস্ট ধর্ম ও নৈতিক শিক্ষা">
                    খ্রিস্ট ধর্ম ও নৈতিক শিক্ষা
                  </Select.Option>
                </Select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Button type="primary" onClick={handleFilterClick}>
                ফিল্টার করুন
              </Button>
              <Button type="primary ml-2" onClick={handleFilterReset}>
                রিসেট করুন
              </Button>
            </Row>
          </div>

          <div className="lg:w-[40%] md:w-[30%] w-full mt-4 md:mt-0">
            <Row justify="end">
              <Col xs={24} md={24} lg={16}>
                <Search
                  placeholder="আইডি দিয়ে অনুসন্ধান"
                  onSearch={onSearch}
                  enterButton
                  style={{ minWidth: "100%", textAlign: "center", width: 200 }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <div style={{ overflowY: "auto" }}>
        <Table
          loading={isLoading}
          dataSource={Allteacher?.data?.map(
            (
              {
                teacher_info,
                father_info,
                mother_info,
                current_address,
                ...other
              },
              i
            ) => ({
              teacher_name: teacher_info.name_bangla,
              subjects: teacher_info.subject.join(","),
              teacher_phone_number: teacher_info.phone_number,
              mother_phone_number: mother_info.phone_number,
              current_address: current_address.village,
              gender: teacher_info.gender,
              photo: teacher_info.photo,
              ...other,
              serial_number: `T-0000${i + 1}`,
            })
          )}
          columns={[
            {
              title: "এসআর নং",
              width: 100,
              dataIndex: "serial_number",
              key: "_id",
              // fixed: "left",
            },
            {
              title: "ছবি",
              dataIndex: "photo",
              key: "_id",
              width: 100,
              render: (record) => (
                <ImageTag
                  data={{
                    url: record.url,
                    width: 70,
                    height: 30,
                    class: "w-[5rem] h-[4.5rem]",
                  }}
                />
              ),
            },
            {
              title: "শিক্ষকের নাম",
              dataIndex: "teacher_name",
              key: "_id",
              width: 150,
              ellipsis: true,
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
              title: "বিষয়",
              dataIndex: "subjects",
              key: "_id",
              width: 150,
              ellipsis: true,
            },

            {
              title: "মোবাইল নম্বর",
              dataIndex: "teacher_phone_number",
              key: "_id",
              width: 150,
            },
            {
              title: "লিঙ্গ",
              dataIndex: "gender",
              key: "_id",
              width: 100,
            },
            {
              title: " অবস্থা",
              width: 100,
              dataIndex: "current_address",
              key: "_id",
              ellipsis: true,
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
                    overlay={
                      <Menu>
                        <Menu.Item
                          key="view"
                          onClick={() => {
                            // Handle view logic here
                          }}
                        >
                          <Link href={`all-teachers/view/${record._id}`}>
                            View
                          </Link>
                        </Menu.Item>
                        <Menu.Item
                          key="edit"
                          onClick={() => {
                            // Handle edit logic here
                          }}
                        >
                          {console.log(record._id, "kkkk")}
                          <Link href={`all-teachers/edit/${record._id}`}>
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
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default AllTeachers;
