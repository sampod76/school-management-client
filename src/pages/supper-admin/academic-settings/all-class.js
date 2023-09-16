import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Row,
  Col,
  Divider,
  Select,
  Dropdown,
  Menu,
  Spin,
} from "antd";
import Link from "next/link";
import { Success_model } from "@/utils/modalHook";
import EditClassModal from "./AllClass/EditClassModal";
const { Option } = Select;
const AllClass = () => {
  const [isLoading, SetIsLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [newClass, setNewClass] = useState({ className: "", status: "Active" });

  useEffect(() => {
    async function fetchData() {
      try {
        SetIsLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/classes`
        );
        if (response.ok) {
          const data = await response.json();

          setClasses(data?.data);
          SetIsLoading(false);
        } else {
          console.error("Failed to fetch classes");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  const handleAddClass = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/classes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newClass),
        }
      );

      if (response.ok) {
        const addedClass = await response.json();
        setClasses([...classes, addedClass]);

        setNewClass({ className: "", status: "active" });
        Success_model({ message: "Registration successfully done" });
      } else {
        console.error("Failed to add class");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (record) => {
    setEditingClass(record);
    setEditModalVisible(true);
  };

  const handleSaveEdit = async (updatedClass) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/classes/${updatedClass._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedClass),
        }
      );

      if (response.ok) {
        const updatedClasses = classes.map((cls) =>
          cls._id === updatedClass._id ? updatedClass : cls
        );
        setClasses(updatedClasses);
        setEditModalVisible(false);
        Success_model({ message: "Update successful" });
      } else {
        console.error("Failed to update class");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (record) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/classes/${record._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedClasses = classes.filter((cls) => cls._id !== record._id);
        setClasses(updatedClasses);
        Success_model({ message: "Deleted successfully" });
      } else {
        console.error("Failed to delete class");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const columns = [
    { title: "নাম", dataIndex: "className", key: "className" },
    {
      title: "অবস্থা",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <span style={{ color: status === "active" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
      title: "একশন",
      key: "key",
      fixed: "right",
      width: 100,
      render: (record) => (
        <Space size="middle">
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="edit" onClick={() => handleEdit(record)}>
                  Edit
                </Menu.Item>
                <Menu.Item key="delete" onClick={() => handleDelete(record)}>
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
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">শ্রেণী সমূহ</h2>
      <div className="mb-4">
        <Row gutter={24} className="mb-4">
          <Col span={12}>
            <h1>
              নাম<span style={{ color: "red" }}>*</span>
            </h1>
            <Input
              placeholder="নাম"
              value={newClass.className}
              onChange={(e) =>
                setNewClass({ ...newClass, className: e.target.value })
              }
              required
            />
          </Col>
          <Col span={12}>
            <h1>
              অবস্থা<span style={{ color: "red" }}>*</span>
            </h1>
            <Select
              className="w-full"
              placeholder="অবস্থা"
              value={newClass.status}
              onChange={(value) => setNewClass({ ...newClass, status: value })}
            >
              <Option value="active">active</Option>
              <Option value="inactive">inactive</Option>
            </Select>
          </Col>
        </Row>
        <div className="flex item-end justify-end">
          <button
            onClick={handleAddClass}
            className="bg-gradient-to-r from-[#324CAD] to-[#05065c] text-white py-2 px-4 rounded border-none text-2xl"
          >
            +<span className="text-lg">যোগ করুন</span>
          </button>
        </div>

        <Divider />
      </div>

      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Spin />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={classes}
          pagination={{ pageSize: 5 }}
        />
      )}
      <EditClassModal
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onSave={handleSaveEdit}
        classData={editingClass}
      />
    </div>
  );
};

export default AllClass;
