import React from "react";
import { Link } from "react-router-dom"; 
import { NavLink } from "react-router-dom";
import "./sidemenu.css";

const SideMenu = () => {
 

  return (
    <aside
      className=" border-end p-3 w-25"
      style={{
        width: "250px",
        minHeight: "100vh",
        borderColor: "#E2E8F0",
        backgroundColor:'#19253d',
        color:'#616c80',
      }}
    >
    

      {/* Main Menu */}
      <ul className="list-unstyled m-0">

        {/* Dashboard */}
        <li className="mb-2">
          <NavLink
            to ="/"
            style={{textDecoration: "none",color:"#737e8e"}}
            
            className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 rounded-3 ${
              isActive ? "active-link" : ""
            }`
          }
            
          
          >
            <i className="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* All Tasks */}
        <li className="mb-2">
          <NavLink 
             to="/alltasks"
             className={({ isActive }) =>
             `d-flex align-items-center gap-2 p-2 rounded-3 ${
               isActive ? "active-link" : ""
             }`
           }
            style={{ color: "#737e8e" ,textDecoration: "none"}}
          >
            <i className="fa-solid fa-list-check"></i>
            <span>All Tasks</span>
          </NavLink>
        </li>

        {/* Completed */}
        
        <li className="mb-2">
          <NavLink to="/completedtasks"   className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 rounded-3 ${
              isActive ? "active-link" : ""
            }`
          }
            style={{ color: "#737e8e",textDecoration: "none" }}>
        
            <i className="fa-solid fa-circle-check"></i>
            <span>Completed</span>
           
          </NavLink>
        </li>

        {/* Active */}
        <li className="mb-2">
          <NavLink to="/pendingtasks"   className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 rounded-3 ${
              isActive ? "active-link" : ""
            }`
          }
            style={{ color: "#737e8e" ,textDecoration: "none"}} >
           
            <i className="fa-solid fa-clock"></i>
            <span>Active</span>
           
          </NavLink>
        </li>

        {/* Categories */}
        <li className="mb-2">
          <NavLink  to="/categories"
             className={({ isActive }) =>
             `d-flex align-items-center gap-2 p-2 rounded-3 ${
               isActive ? "active-link" : ""
             }`
           }
            style={{ color: "#737e8e" ,textDecoration: "none"}}>
          
            <i className="fa-solid fa-folder"></i>
            <span>Categories</span>
        
          </NavLink>
        </li>

      </ul>

      <hr style={{ borderColor: "#E2E8F0" }} />

      {/* Settings */}
      <ul className="list-unstyled m-0">
        <li>
          <NavLink
            to="settings"
            className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 rounded-3 ${
              isActive ? "active-link" : ""
            }`
          }
            style={{ color: "#737e8e" }}
          >
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </NavLink>
        </li>
  
      </ul>
              {/* Add Task Button */}
              <Link to="/AddForm" style={{textDecoration:"none"}}> 
              <button
        className="btn w-100 mb-4 d-flex align-items-center justify-content-center gap-1 "
        style={{
          backgroundColor: "white",
        color:"#19253d",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
        }}
      >
        
        Add Task
      </button>
      </Link>
    </aside>
  );
};

export default SideMenu; 