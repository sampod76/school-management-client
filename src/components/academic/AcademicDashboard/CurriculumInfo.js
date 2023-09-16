import React from "react";
import { Table } from "antd";

const CurriculumInfo = () => {
  const columns = [
    { title: "Course Name", dataIndex: "name", key: "name" },
    { title: "Credits", dataIndex: "credits", key: "credits" },
    { title: "Instructor", dataIndex: "instructor", key: "instructor" },
  ];

  const curriculumData = [
    {
      name: "Introduction to Programming",
      credits: 3,
      instructor: "John Smith",
    },
    { name: "Data Structures", credits: 4, instructor: "Jane Doe" },
    { name: "Web Development", credits: 3, instructor: "Alex Johnson" },
    { name: "Algorithms", credits: 4, instructor: "Emily White" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">শিক্ষাক্রম তথ্য</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <Table
          columns={columns}
          dataSource={curriculumData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default CurriculumInfo;
