import { Chart } from "chart.js";
import React, { useEffect, useRef } from "react";

const TodayIncomeExpenseDoughnutChart = ({ income, expense }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: ["আয়", "ব্যয়"],
      datasets: [
        {
          data: [income, expense],
          backgroundColor: ["green", "red"],
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [income, expense]);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default TodayIncomeExpenseDoughnutChart;
