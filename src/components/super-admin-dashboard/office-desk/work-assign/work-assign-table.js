import { useState, useEffect } from "react";
import { Dropdown, Menu, Modal, Space, Table } from "antd";
import Link from "next/link";
import {
  useDeleteAssignedworkMutation,
  useGetAllAssignedWorkQuery,
} from "@/redux/features/work-assign/workAssignAPI";
import englishDataToBangle from "@/utils/englishDataToBangle";
import { confirm_modal } from "@/utils/modalHook";
import { toast } from "react-toastify";

const WorkAssignTable = () => {
  const [workData, setWorkData] = useState([]);

  // get data from rtk

  const {
    data: assignedWorkedData,
    isLoading,
    isError,
    refetch,
  } = useGetAllAssignedWorkQuery();

  useEffect(() => {
    if (assignedWorkedData?.data) {
      const dataWithSerialNumbers = assignedWorkedData.data.map(
        (item, index) => ({
          ...item,
          serial_no: (index + 1).toString(),
          key: index.toString(),
        })
      );
      setWorkData(dataWithSerialNumbers);
    }
  }, [assignedWorkedData]);

  // delete mutations
  const [deleteAssignedwork] = useDeleteAssignedworkMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete Work!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteAssignedwork(id).then((props) => {
          console.log(props);
          if (props.data?.success) {
            refetch();
            toast.success("Work deleted successfully");
          }
        });
      }
    });
  };

  const columns = [
    {
      title: "ক্রমিক নং",
      dataIndex: "serial_no",
      key: "serial_no",
      width: 50,
    },
    {
      title: "কাজের নাম",
      dataIndex: "work_name",
      key: "work_name",
      width: 200,
    },
    {
      title: "কাজের বিস্তারিত",
      dataIndex: "work_details",
      key: "work_details",
      width: 250,
    },
    {
      title: "যার জন্য",
      dataIndex: "work_for",
      key: "work_for",
      width: 100,
    },
    {
      title: "এসাইন করার সময়",
      dataIndex: "assign_date",
      key: "assign_date",
      width: 100,
      render: (recode) => <span>{englishDataToBangle(recode)}</span>,
    },
    {
      title: "জমা দেওয়ার সময়",
      dataIndex: "complete_date",
      key: "complete_date",
      width: 100,
      render: (recode) => <span>{englishDataToBangle(recode)}</span>,
    },
    {
      title: "একশন",
      key: "action",
      fixed: "right",
      width: 100,
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="view">
                  <Link href={`work-assign/view/${record?._id}`}>View</Link>
                </Menu.Item>
                <Menu.Item key="edit">
                  <Link href={`work-assign/edit/${record?._id}`}>Edit</Link>
                </Menu.Item>
                <Menu.Item
                  key="delete"
                  onClick={() => {
                    handleDelete(record?._id);
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
    <>
      <Table
        dataSource={workData}
        columns={columns}
        style={{ margin: "0.3rem 1rem" }}
        scroll={{ x: 1000 }}
        loading={isLoading}
      />
    </>
  );
};

export default WorkAssignTable;
