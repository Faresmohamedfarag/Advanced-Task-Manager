import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const ProductivityChart = (props) => {

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    datasets: [
      {
        label: "Completed Tasks",
        data: [props.data.weekDaysCompleted.monday, props.data.weekDaysCompleted.tuesday, props.data.weekDaysCompleted.wensday, props.data.weekDaysCompleted.thursday, props.data.weekDaysCompleted.friday, props.data.weekDaysCompleted.saturday, props.data.weekDaysCompleted.sunday],
        backgroundColor: "#2563EB",
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          label: (context) => `${context.raw} tasks`,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
          color: "#64748B",
        },
        grid: {
          color: "#E2E8F0",
        },
      },

      x: {
        ticks: {
          color: "#64748B",
        },

        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="card border-0 shadow-sm rounded-3 " style={{height:"100%",width:"48%"}}>
      <div className="card-body p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h5
              className="fw-bold mb-1"
              style={{ color: "#0F172A" }}
            >
              Productivity
            </h5>

            <small style={{ color: "#64748B" }}>
              Tasks completed this week
            </small>
          </div>

          <i
            className="fa-solid fa-chart-column"
            style={{
              color: "#2563EB",
              fontSize: "20px",
            }}
          ></i>

        </div>

        <div style={{ height: "150px",width:"50%" }}>
          <Bar data={data} options={options} />
        </div>

      </div>
    </div>
  );
};

export default ProductivityChart;