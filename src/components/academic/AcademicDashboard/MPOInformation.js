import React from "react";
import { Table } from "antd";

const MPOInformation = () => {
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const mpoInfo = {
    title: "Master Plan of Operations",
    date: "2023-08-10",
    description:
      "The Master Plan of Operations outlines the strategic goals and plans...",
  };

  const data = [mpoInfo];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">এমপিও তথ্য</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};

export default MPOInformation;
