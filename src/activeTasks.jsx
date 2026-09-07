import { Component } from "react";

class Active extends Component {
  render() {
    const activeTasks = this.props.data.tasks.filter(
      (task) => task.status === "Active"
    );

    return (
      <div className="container-fluid p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Active Tasks</h2>
            <p className="text-muted mb-0">
              Tasks that are currently active and need your attention
            </p>
          </div>

          <button className="btn btn-primary rounded-3 px-4">
            <i className="fa-solid fa-plus me-2"></i>
            Add Task
          </button>
        </div>

        {/* Search & Filter */}
        <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
          <div className="row g-3">

            {/* Search */}
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>

                <input
                  type="text"
                  className="form-control bg-transparent border-start-0"
                  placeholder="Search active tasks..."
                />
              </div>
            </div>

            {/* Priority */}
            <div className="col-md-3">
              <select className="form-select">
                <option>All Priorities</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Category */}
            <div className="col-md-3">
              <select className="form-select">
                <option>All Categories</option>
                <option>Work</option>
                <option>Study</option>
                <option>Personal</option>
                <option>Programming</option>
              </select>
            </div>

          </div>
        </div>

        {/* Active Tasks */}
        <div className="row g-4">

          {activeTasks.map((task) => (
            <div className="col-12" key={task.id}>

              <div className="card border-0 shadow-sm rounded-4 p-3">

                <div className="d-flex align-items-center">

                  {/* Checkbox */}
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                  />

                  {/* Task Information */}
                  <div className="flex-grow-1">

                    <h5 className="fw-semibold mb-1">
                      {task.title}
                    </h5>

                    <p className="text-muted small mb-2">
                      {task.description}
                    </p>

                    {/* Category */}
                    <span className="badge bg-primary-subtle text-primary me-2">
                      {task.category}
                    </span>

                    {/* Priority */}
                    <span
                      className={
                        task.priority === "High"
                          ? "badge bg-danger-subtle text-danger"
                          : task.priority === "Medium"
                          ? "badge bg-warning-subtle text-warning"
                          : "badge bg-success-subtle text-success"
                      }
                    >
                      {task.priority} Priority
                    </span>

                  </div>

                  {/* Due Date */}
                  <div className="text-end me-3">

                    <small className="text-muted d-block">
                      Due Date
                    </small>

                    <span className="fw-semibold">
                      {task.dueDate}
                    </span>

                  </div>

                  {/* Edit */}
                  <button className="btn btn-light rounded-3 me-2">
                    <i className="fa-solid fa-pen"></i>
                  </button>

                  {/* Delete */}
                  <button className="btn btn-light text-danger rounded-3">
                    <i className="fa-solid fa-trash"></i>
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    );
  }
}

export default Active;