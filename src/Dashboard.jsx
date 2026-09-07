import React, { Component } from 'react';
import Navbar from './navbar';
import Statistics from './statistic/statistics';
import TaskCompletion from './statistic/TaskComplete';
import ProductivityChart from './statistic/productivityChart';
import UpcomingDeadlines from './statistic/upcomingDeadLine';
import RecentTasks from './statistic/recentTasks';

class Dashboard extends Component  {
    state = {
        totalTasks: this.props.data.total,
        completed : this.props.data.completed,
        pending: this.props.data.pending,
        highPeriority: this.props.data.high,
        weekDaysCompleted : {
            sunday:"4",
            monday:"3",
            tuesday:"4",
            wensday:"1",
            thursday:"2",
            friday:"6",
            saturday:"0"
        }
    }
    
    render(){
    return (<div style={{width:"74%",display:'flex',flexDirection:"column",gap:"20px",marginLeft:"10px",overflowX:"hidden"}}>
    <Navbar  />
    <Statistics data = {this.state} />
    <div style={{display:"flex",height:"250px",gap:"35px"}}>
    <TaskCompletion data = {this.state} />
    <ProductivityChart data = {this.state} />
    </div>
    <div style={{display:"flex",height:"330px",width:"100%",gap:"35px",}}>
        <UpcomingDeadlines />
        <RecentTasks recent = {this.props.data} />
    </div>
    </div>  );}
}
 
export default Dashboard;