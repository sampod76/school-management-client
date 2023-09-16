import React from "react";
import { Table } from "antd";

const BoardNotice = () => {
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const notices = [
    {
      title: "Important Meeting",
      date: "2023-08-15",
      description: "All students are requested to attend...",
    },
    {
      title: "Holiday Announcement",
      date: "2023-08-18",
      description: "The institute will remain closed on...",
    },
    // Add more notice data as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">বোর্ড নোটিশ</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <Table columns={columns} dataSource={notices} pagination={false} />
      </div>
    </div>
  );
};

export default BoardNotice;
