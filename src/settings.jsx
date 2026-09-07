import { Component } from "react";
import Navbar from "./navbar";

class Settings extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "75%"
        }}
      >

        <Navbar />

        {/* Header */}
        <section
          className="p-4"
          style={{
            borderBottom: "1px solid #E2E8F0"
          }}
        >
          <h2
            className="fw-bold mb-1"
            style={{ color: "#0F172A" }}
          >
            Settings
          </h2>

          <p
            className="mb-0"
            style={{ color: "#64748B" }}
          >
            Customize your TaskFlow experience.
          </p>
        </section>


        {/* Settings */}
        <section className="p-4">

          {/* Appearance */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">

            <div className="card-body p-4">

              <h5
                className="fw-semibold mb-1"
                style={{ color: "#0F172A" }}
              >
                Appearance
              </h5>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "14px"
                }}
              >
                Customize how TaskFlow looks.
              </p>

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div>
                  <h6 className="mb-1">
                    Theme
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#64748B",
                      fontSize: "14px"
                    }}
                  >
                    Choose your preferred theme.
                  </p>
                </div>

                <select
                  className="form-select shadow-none"
                  style={{
                    width: "150px",
                    borderColor: "#CBD5E1"
                  }}
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>

              </div>

            </div>
          </div>


          {/* Notifications */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">

            <div className="card-body p-4">

              <h5
                className="fw-semibold mb-1"
                style={{ color: "#0F172A" }}
              >
                Notifications
              </h5>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "14px"
                }}
              >
                Manage your notification preferences.
              </p>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-3">

                <div>
                  <h6 className="mb-1">
                    Task Reminders
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#64748B",
                      fontSize: "14px"
                    }}
                  >
                    Receive reminders for upcoming tasks.
                  </p>
                </div>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </div>

              </div>

              <div className="d-flex justify-content-between align-items-center">

                <div>
                  <h6 className="mb-1">
                    Completed Tasks
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#64748B",
                      fontSize: "14px"
                    }}
                  >
                    Show notifications when tasks are completed.
                  </p>
                </div>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </div>

              </div>

            </div>
          </div>


          {/* Task Preferences */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">

            <div className="card-body p-4">

              <h5
                className="fw-semibold mb-1"
                style={{ color: "#0F172A" }}
              >
                Task Preferences
              </h5>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "14px"
                }}
              >
                Customize your task management preferences.
              </p>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-3">

                <div>
                  <h6 className="mb-1">
                    Default Priority
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#64748B",
                      fontSize: "14px"
                    }}
                  >
                    Set the default priority for new tasks.
                  </p>
                </div>

                <select
                  className="form-select shadow-none"
                  style={{
                    width: "150px",
                    borderColor: "#CBD5E1"
                  }}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>

              </div>

              <div className="d-flex justify-content-between align-items-center">

                <div>
                  <h6 className="mb-1">
                    Default Category
                  </h6>

                  <p
                    className="mb-0"
                    style={{
                      color: "#64748B",
                      fontSize: "14px"
                    }}
                  >
                    Choose the default category for new tasks.
                  </p>
                </div>

                <select
                  className="form-select shadow-none"
                  style={{
                    width: "150px",
                    borderColor: "#CBD5E1"
                  }}
                >
                  <option>Programming</option>
                  <option>Study</option>
                  <option>Personal</option>
                  <option>Work</option>
                </select>

              </div>

            </div>
          </div>


          {/* Danger Zone */}
          <div
            className="card border-0 rounded-3"
            style={{
              backgroundColor: "#FEF2F2"
            }}
          >
            <div className="card-body p-4">

              <h5
                className="fw-semibold"
                style={{ color: "#DC2626" }}
              >
                Danger Zone
              </h5>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "14px"
                }}
              >
                Permanently delete all your tasks.
              </p>

              <button className="btn btn-danger rounded-3">
                <i className="fa-solid fa-trash me-2"></i>
                Delete All Tasks
              </button>

            </div>
          </div>

        </section>

      </div>
    );
  }
}

export default Settings;