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

const WorkPlanTable = () => {
  const [workPlanData, setWorkPlanData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const {
    data: allWorkPlanData,
    isLoading,
    isError,
    refetch,
  } = useGetAllWorkPlanQuery();
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

  // delete mutations
  const [deleteWorkPlan] = useDeleteWorkPlanMutation();

  const handleDelete = (id) => {
    confirm_modal("You want to delete WoRk Plan!").then(async (willDelete) => {
      if (willDelete.value) {
        deleteWorkPlan(id).then((props) => {
          console.log(props);
          if (props.data?.success) {
            refetch();
            toast.success("Work Plan deleted successfully");
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
            title: "কর্ম-পরিকল্পনার নাম",
            dataIndex: "work_plan_name",
            key: "_id",
            width: 200,
            ellipsis: true,
          },

          {
            title: "পরিকল্পনার তারিখ",
            width: 100,
            dataIndex: "plan_date",
            key: "_id",

            width: 100,
            ellipsis: true,
            render: (plan_date) => (
              <span>{englishDataToBangle(plan_date)}</span>
            ),
          },

          {
            title: "পরিকল্পনার মেয়াদ",
            width: 100,
            dataIndex: "duration_date",
            key: "_id",
            ellipsis: true,
            render: (duration_date) => (
              <span>{englishDataToBangle(duration_date)}</span>
            ),
          },
          {
            title: "বিস্তারিত",
            dataIndex: "details",
            key: "_id",
            width: 250,
            ellipsis: true,
          },
          {
            title: "পরিকল্পনার মেয়াদ",
            width: 100,
            dataIndex: "duration_date",
            key: "_id",
            ellipsis: true,
            render: (duration_date) => (
              <span>{englishDataToBangle(duration_date)}</span>
            ),
          },
          {
            title: "বিস্তারিত",
            dataIndex: "details",
            key: "_id",
            width: 250,
            ellipsis: true,
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
                        <Link href={`work-plan/view/${record._id}`}>View</Link>
                      </Menu.Item>
                      <Menu.Item
                        key="edit"
                        onClick={() => {
                          // Handle edit logic here
                        }}
                      >
                        <Link href={`work-plan/edit/${record._id}`}>Edit</Link>
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

export default WorkPlanTable;