import React from "react";

const Statistics = (props) => {
  return (
    <div className="row g-3">

      {/* Total Tasks */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-3 h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              
              <div>
                <p
                  className="mb-1"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                >
                  Total Tasks
                </p>

                <h3
                  className="mb-0 fw-bold"
                  style={{ color: "#0F172A" }}
                >
                  {props.data.totalTasks}
                </h3>
              </div>

              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#EFF6FF",
                  color: "#2563EB",
                }}
              >
                <i className="fa-solid fa-list-check fs-5"></i>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Completed */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-3 h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <p
                  className="mb-1"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                >
                  Completed
                </p>

                <h3
                  className="mb-0 fw-bold"
                  style={{ color: "#0F172A" }}
                >
                  {props.data.completed}
                </h3>
              </div>

              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#DCFCE7",
                  color: "#16A34A",
                }}
              >
                <i className="fa-solid fa-circle-check fs-5"></i>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Pending */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-3 h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <p
                  className="mb-1"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                >
                  Pending
                </p>

                <h3
                  className="mb-0 fw-bold"
                  style={{ color: "#0F172A" }}
                >
                  {props.data.pending}
                </h3>
              </div>

              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#FFEDD5",
                  color: "#EA580C",
                }}
              >
                <i className="fa-solid fa-clock fs-5"></i>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* High Priority */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="card border-0 shadow-sm rounded-3 h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <p
                  className="mb-1"
                  style={{
                    color: "#64748B",
                    fontSize: "14px",
                  }}
                >
                  High Priority
                </p>

                <h3
                  className="mb-0 fw-bold"
                  style={{ color: "#0F172A" }}
                >
                  {props.data.highPeriority}
                </h3>
              </div>

              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#FEE2E2",
                  color: "#DC2626",
                }}
              >
                <i className="fa-solid fa-flag fs-5"></i>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Statistics;