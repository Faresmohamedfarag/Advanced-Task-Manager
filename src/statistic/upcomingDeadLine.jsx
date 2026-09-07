import React from "react";

const UpcomingDeadlines = () => {
  const tasks = [
    {
      title: "Finish React Project",
      date: "Today",
      priority: "High",
      color: "#DC2626",
      bg: "#FEE2E2",
    },
    {
      title: "Update Portfolio",
      date: "Tomorrow",
      priority: "Medium",
      color: "#EA580C",
      bg: "#FFEDD5",
    },
    
  ];

  return (
    <div className="card border-0 shadow-sm rounded-3 h-100 " style={{width:"48%"}}>
      <div className="card-body p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5
              className="fw-bold mb-1"
              style={{ color: "#0F172A" }}
            >
              Upcoming Deadlines
            </h5>

            <small style={{ color: "#64748B" }}>
              Tasks that need your attention
            </small>
          </div>

          <i
            className="fa-solid fa-calendar-days"
            style={{
              color: "#2563EB",
              fontSize: "20px",
            }}
          ></i>
        </div>

        {/* Tasks */}
        <div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between py-3"
              style={{
                borderBottom:
                  index !== tasks.length - 1
                    ? "1px solid #E2E8F0"
                    : "none",
              }}
            >

              {/* Task Info */}
              <div className="d-flex align-items-center gap-3">

                <div
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "#EFF6FF",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <i className="fa-regular fa-calendar"></i>
                </div>

                <div>
                  <h6
                    className="mb-1 fw-semibold"
                    style={{ color: "#0F172A" }}
                  >
                    {task.title}
                  </h6>

                  <small style={{ color: "#64748B" }}>
                    <i className="fa-regular fa-clock me-1"></i>
                    {task.date}
                  </small>
                </div>

              </div>

              {/* Priority */}
              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: task.bg,
                  color: task.color,
                  fontWeight: "500",
                }}
              >
                {task.priority}
              </span>

            </div>
          ))}
        </div>

        {/* View All */}
        <button
          className="btn btn-link text-decoration-none p-0 mt-3"
          style={{ color: "#2563EB" }}
        >
          View all deadlines
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </button>

      </div>
    </div>
  );
};

export default UpcomingDeadlines;