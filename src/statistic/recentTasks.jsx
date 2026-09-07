import React from "react";

const RecentTasks = (props) => {
  
 

  return (
    <div className="card border-0 shadow-sm rounded-3 h-100" style={{width:"48%"}}>
      <div className="card-body p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5
              className="fw-bold mb-1"
              style={{ color: "#0F172A" }}
            >
              Recent Tasks
            </h5>

            <small style={{ color: "#64748B" }}>
              Your latest tasks
            </small>
          </div>

          <i
            className="fa-solid fa-clock-rotate-left"
            style={{
              color: "#2563EB",
              fontSize: "20px",
            }}
          ></i>
        </div>

        {/* Tasks */}
        {props.recent.tasks.map((task, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-between py-3"
            style={{
              borderBottom:
                index !== props.recent.tasks.length - 1
                  ? "1px solid #E2E8F0"
                  : "none",
            }}
          >

            {/* Left side */}
            <div className="d-flex align-items-center gap-3">

              {/* Status Icon */}
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor:
                    task.status === "Completed"
                      ? "#DCFCE7"
                      : "#EFF6FF",
                  color:
                    task.status === "Completed"
                      ? "#16A34A"
                      : "#2563EB",
                  flexShrink: 0,
                }}
              >
                <i
                  className={
                    task.status === "Completed"
                      ? "fa-solid fa-check"
                      : "fa-solid fa-clock"
                  }
                ></i>
              </div>

              {/* Task information */}
              <div>
                <h6
                  className="mb-1 fw-semibold"
                  style={{ color: "#0F172A" }}
                >
                  {task.title}
                </h6>

                <small style={{ color: "#64748B" }}>
                  {task.date}
                </small>
              </div>

            </div>

            {/* Status */}
            <span
              className="badge rounded-pill"
              style={{
                backgroundColor:
                  task.status === "Completed"
                    ? "#DCFCE7"
                    : "#EFF6FF",
                color:
                  task.status === "Completed"
                    ? "#16A34A"
                    : "#2563EB",
                fontWeight: "500",
              }}
            >
              {task.status}
            </span>

          </div>
        ))}

        {/* View All */}
        <button
          className="btn btn-link text-decoration-none p-0 mt-3"
          style={{ color: "#2563EB" }}
        >
          View all tasks
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>

      </div>
    </div>
  );
};

export default RecentTasks;