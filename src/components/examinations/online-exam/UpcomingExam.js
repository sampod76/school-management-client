// pages/events.js
import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "বিষয়",
    dataIndex: "subject",
  },
  {
    title: "তারিখ থেকে",
    dataIndex: "dateFrom",
  },
  {
    title: "সময় শুরু",
    dataIndex: "startTime",
  },
  {
    title: "সময়কাল",
    dataIndex: "duration",
  },
  {
    title: "রুম নম্বর",
    dataIndex: "roomNo",
  },
  {
    title: "সর্বনিম্ন মার্ক",
    dataIndex: "markMin",
  },
  {
    title: "সর্বাধিক মার্ক",
    dataIndex: "markMax",
  },
];

const data = [
  {
    key: 1,
    subject: "গণিত",
    dateFrom: "২০২৩-০৯-১৫",
    startTime: "১০:০০ সকাল",
    duration: "120",
    roomNo: "১০১",
    markMin: "৪০",
    markMax: "১০০",
  },
  {
    key: 2,
    subject: "বাংলা",
    dateFrom: "২০২৩-০৯-২০",
    startTime: "২:০০ অপরাহ্ণ",
    duration: "90",
    roomNo: "১০২",
    markMin: "৩০",
    markMax: "৯০",
  },
];

const UpcomingEvent = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">আসন্য এভেন্ট পেজ</h1>
      <Table
        scroll={{
          x: 1000,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};

export default UpcomingEvent;
