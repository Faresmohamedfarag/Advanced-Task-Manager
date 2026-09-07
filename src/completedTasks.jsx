import { Component } from "react";
import Navbar from "./navbar";

class CompletedTasks extends Component {
  render() {
    const completedTasks = this.props.data.tasks.filter(
      (task) => task.status === "Completed"
    );

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "75%",
        }}
      >
        <Navbar />

        {/* Header */}
        <section
          className="d-flex align-items-center justify-content-between"
          style={{
            height: "90px",
            width: "95%",
            marginLeft: "15px",
          }}
        >
          <div>
            <h1 className="mb-1">Completed Tasks</h1>

            <p
              className="mb-0"
              style={{ color: "#64748B" }}
            >
              Review the tasks you have successfully completed.
            </p>
          </div>

          <button className="btn btn-primary rounded-3">
            <i className="fa-solid fa-list-check me-2"></i>
            Clear Completed
          </button>
        </section>

        <hr />

        {/* Completed Tasks */}
        <section
          style={{
            width: "95%",
            marginLeft: "10px",
          }}
        >
          {completedTasks.map((task) => (
            <div
              key={task.id}
              className="card border-0 shadow-sm rounded-3 mb-3"
            >
              <div className="card-body p-4">

                {/* Title + Status */}
                <div className="d-flex justify-content-between align-items-start">

                  <div>
                    <h5
                      className="fw-semibold mb-2"
                      style={{ color: "#0F172A" }}
                    >
                      {task.title}
                    </h5>

                    <p
                      className="mb-3"
                      style={{ color: "#64748B" }}
                    >
                      {task.description}
                    </p>
                  </div>

                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#DCFCE7",
                      color: "#16A34A",
                    }}
                  >
                    {task.status}
                  </span>

                </div>

                {/* Category + Priority + Date */}
                <div className="d-flex align-items-center gap-3 flex-wrap">

                  {/* Category */}
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#EFF6FF",
                      color: "#2563EB",
                    }}
                  >
                    {task.category}
                  </span>

                  {/* Priority */}
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor:
                        task.priority === "High"
                          ? "#FFEDD5"
                          : "#F1F5F9",
                      color:
                        task.priority === "High"
                          ? "#EA580C"
                          : "#475569",
                    }}
                  >
                    {task.priority} Priority
                  </span>

                  {/* Date */}
                  <span
                    style={{
                      color: "#64748B",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fa-regular fa-calendar me-1"></i>
                    Completed {task.completedDate}
                  </span>

                </div>

              </div>
            </div>
          ))}

        </section>
      </div>
    );
  }
}

export default CompletedTasks;