import SideMenu from "./sidemenu";
import Dashboard from "./Dashboard";
import AllTasks from "./AllTasks";
import AddTask from "./AddForm";
import { Outlet } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Categories from './categories';
import CompletedTasks from "./completedTasks";
import Pending from "./activeTasks";
import Settings from './settings';

import {


   
    Route,
 
  } from "react-router-dom";


  class RouteLayout extends Component {
   
    

    render(){
    return (
      <div style={{ display: "flex" }}>
        <SideMenu />
          <Outlet />
      
      </div>
    );}
  };

 

class Container extends Component {
    
   
    state = {
        high:0,
        completed:0,
        pending:0,
        total:1,
        tasks:[
        {title:"create react app",description:"make an advanced task manager",status:"active",priority: "medium",createdDate:"5/9/2026",category:"Programming",dueDate:"12/9/2026",id: 1}
        ]
    }
    addTask = (newTask) => {
        
      const taskWithId = {
        ...newTask,
        id: this.state.tasks.length + 1
      };

        this.setState(
          {
            tasks: [...this.state.tasks, newTask]
          },
          () => {
            console.log("UPDATED TASKS:", this.state.tasks);
          }
        );

        this.setState(prevState => ({
          tasks: [...prevState.tasks, taskWithId],
          total: prevState.total + 1
        }));

         if(newTask.priority === "High"){
      
        this.setState(prevState => ({
          high: prevState.high + 1
        }));
      }
      //completed

      };


      updateTaskStatus = (id, status) => {
        this.setState({
          tasks: this.state.tasks.map((task) =>
            task.id === id
              ? { ...task, status: status }
              : task
          )
        });
        console.log(status)
      };

  
    render(){
    
 

    

    return (  
        <BrowserRouter>

        <Routes>

          <Route element={<RouteLayout />}>

            <Route
              path="/"
              element={<Dashboard data={this.state} />}
            />

            <Route
              path="/alltasks"
              element={<AllTasks data={this.state}   updateTaskStatus={this.updateTaskStatus} />}
            />

            <Route
              path="/AddForm"
              element={<AddTask addTask={this.addTask} data={this.state} />}
            />

           <Route
              path="/categories"
              element={<Categories data={this.state} />}
            />

          <Route
              path="/completedtasks"
              element={<CompletedTasks data={this.state} addTask = {this.addTask} />}
            />

          <Route
              path="/pendingtasks"
              element={<Pending data={this.state} />}
            />

          <Route
              path="/settings"
              element={<Settings data={this.state} />}
            />

          </Route>

        

          

        </Routes>

      </BrowserRouter>
    
    
    );}
}
 
  
  export default Container;