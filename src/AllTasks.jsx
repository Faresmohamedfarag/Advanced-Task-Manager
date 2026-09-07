import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { Component } from "react";

class AllTasks extends Component {

   state ={
    tasks:[
      {title:"create react app",description:"make an advanced task manager",status:"active",priority: "medium",createdDate:"5/9/2026",category:"programming",dueDate:"12/9/2026",id:"1"}
      ]
   }

    
   handleChange = (e, task) => {
    const newStatus = e.target.checked
      ? "Completed"
      : "Active";
  
    this.props.updateTaskStatus(task.id, newStatus);
  };
 


    render(){
    return ( <div style={{display:"flex",flexDirection:"column",width:"75%"}}>
    <Navbar  />
    <section className="top d-flex align-items-center justify-content-between " style={{height:"90px",width:"95%",marginLeft:"15px"}}>
        <div><h1>All Tasks</h1><p>Manage and Organize All Tasks in one Place</p></div>
        <Link to="/AddForm"> <button className="btn btn-primary rounded" >Add Task +</button></Link>
        
    </section>
    <hr />
    <section className="filterBar">
    <div
      className="d-flex align-items-center gap-2 p-3  rounded-3 shadow-sm"
      style={{ border: "1px solid #E2E8F0" }}
    >
      {/* Search */}
      <div className="flex-grow-1">
        <div className="input-group">
          <span
            className="input-group-text bg-transparent "
            style={{ borderColor: "#E2E8F0" }}
          >
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#64748B" }}
            ></i>
          </span>

          <input
            type="text"
            className="form-control shadow-none bg-transparent"
            placeholder="Search tasks..."
            style={{ borderColor: "#E2E8F0",border:"2px solid #64748B " }}
          />
        </div>
      </div>

      {/* Filter */}
      <button
        className="btn   d-flex align-items-center gap-2"
        style={{
          border: "1px solid #E2E8F0",
          color: "#0F172A",
        }}
      >
        <i className="fa-solid fa-filter"></i>
        Filter
      </button>

      {/* Sort */}
      <button
        className="btn   d-flex align-items-center gap-2"
        style={{
          border: "1px solid #E2E8F0",
          color: "#0F172A",
        }}
      >
        <i className="fa-solid fa-arrow-down-wide-short"></i>
        Sort by
      </button>

      {/* More */}
      <button
        className="btn "
        style={{
          border: "1px solid #E2E8F0",
          color: "#64748B",
        }}
      >
        <i className="fa-solid fa-ellipsis"></i>
      </button>
    </div>
    </section>
    <section className="tasks" style={{width:"95%",marginLeft:"10px"}}>
    <div className="mt-4">

        {this.props.data.tasks.map((task) => (
          <div
            key={task.id}
            className="card border-0 shadow-sm rounded-3 mb-3"
          >
            <div className="card-body p-3">

              {/* Task Header */}
              <div className="d-flex justify-content-between align-items-start">

                <div className="d-flex gap-3">

                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="form-check-input mt-1"
                    
                     onClick={(e)=>{this.handleChange(e,task)}}
                    style={{
                      width: "18px",
                      height: "18px",
                    }}
                  />

                  <div>
                    <h5
                      className="fw-semibold mb-1"
                      style={{
                        color: "#0F172A",
                        textDecoration:
                          task.status === "Completed"
                            ? "line-through"
                            : "none",
                      }}
                    >
                      {task.title}
                    </h5>

                    <p
                      className="mb-0"
                      style={{
                        color: "#64748B",
                        fontSize: "14px",
                      }}
                    >
                      {task.description}
                    </p>
                  </div>

                </div>

                {/* Priority */}
                <span
                  className="badge rounded-pill"
                  style={{
                    backgroundColor:
                      task.priority === "High"
                        ? "#FEE2E2"
                        : task.priority === "Medium"
                        ? "#FFEDD5"
                        : "#DCFCE7",

                    color:
                      task.priority === "High"
                        ? "#DC2626"
                        : task.priority === "Medium"
                        ? "#EA580C"
                        : "#16A34A",
                  }}
                >
                  {task.priority}
                </span>

              </div>

              {/* Task Details */}
              <div
                className="d-flex align-items-center gap-4 mt-3 pt-3"
                style={{
                  borderTop: "1px solid #E2E8F0",
                }}
              >

                <small style={{ color: "#64748B" }}>
                  <i className="fa-solid fa-folder me-2"></i>
                  {task.category}
                </small>

                <small style={{ color: "#64748B" }}>
                  <i className="fa-regular fa-calendar me-2"></i>
                  {task.dueDate}
                </small>

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
                  }}
                >
                  {task.status}
                </span>

                {/* More button */}
                <button
                  className="btn btn-sm ms-auto"
                  style={{
                    border: "none",
                    color: "#64748B",
                  }}
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
    </div> );}
}
 
export default AllTasks;