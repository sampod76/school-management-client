import React from "react";

export default function TodaysTimeTable() {
  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-2">Today's Timetable</h1>

      <div className="bg-white p-6 rounded-xl overflow-x-auto">
        <table className="w-full">
          <tr>
            <th>Time</th>
            <th>Room Number</th>
            <th>Subject</th>
            <th></th>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="text-center py-4">10-11Am</td>
            <td className="text-center py-4">101</td>
            <td className="text-center py-4">Biology</td>
            <td className="text-center py-4">Lecture</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="text-center py-4">10-11Am</td>
            <td className="text-center py-4">101</td>
            <td className="text-center py-4">Biology</td>
            <td className="text-center py-4">Lecture</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="text-center py-4">10-11Am</td>
            <td className="text-center py-4">101</td>
            <td className="text-center py-4">Biology</td>
            <td className="text-center py-4">Lecture</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
