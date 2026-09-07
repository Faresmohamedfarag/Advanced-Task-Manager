import React from "react";

const TaskCompletion = (props) => {
  return (
    <div className="card border-0 shadow-sm rounded-3 " style={{width:"48%",height:"100%"}}>
      <div className="card-body p-4">

        <h5 className="fw-bold mb-4" style={{ color: "#0F172A" }}>
          Task Completion
        </h5>

        <div className="d-flex align-items-center gap-4">

          {/* Circular Progress */}
          <div
            className="position-relative d-flex align-items-center justify-content-center"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background: `conic-gradient(
                #2563EB 0% 50%,
                #E2E8F0 50% 100%
              )`,
              flexShrink: 0,
            }}
          >
            {/* Inner Circle */}
            <div
              className="bg-white rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "110px",
                height: "110px",
              }}
            >
              <div className="text-center">
                <h3
                  className="fw-bold mb-0"
                  style={{ color: "#0F172A" }}
                >
                  {(props.data.completed  / props.data.totalTasks)*100} %
                </h3>

                <small style={{ color: "#64748B" }}>
                  Completed
                </small>
              </div>
            </div>
          </div>

          {/* Information */}
          <div>
            <h6 className="fw-bold mb-2" style={{ color: "#0F172A" }}>
              Keep going!
            </h6>

            <p className="mb-2" style={{ color: "#64748B" }}>
              You completed {props.data.completed} of {props.data.totalTasks} tasks.
            </p>

            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: "#DCFCE7",
                color: "#16A34A",
              }}
            >
              {props.data.totalTasks - props.data.completed} tasks remaining
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TaskCompletion;