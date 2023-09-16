import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";

const IncomeExpenseLineChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const labels = [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7" /* ... and so on */,
    ];
    const incomeData = [100, 120, 150, 130, 160, 200, 180 /* ... and so on */];
    const expenseData = [50, 70, 80, 60, 90, 110, 100 /* ... and so on */];

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "আয়",
            data: incomeData,
            borderColor: "green",
            backgroundColor: "rgba(0, 128, 0, 0.2)",
          },
          {
            label: "ব্যয়",
            data: expenseData,
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Day of the Month",
            },
          },
          y: {
            title: {
              display: true,
              text: "Amount ($)",
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="mb-4"> মাসিক আয় এবং ব্যয়</h1>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default IncomeExpenseLineChart;
