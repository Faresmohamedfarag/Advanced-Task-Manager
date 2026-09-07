import { Component } from "react";
 


class AddTask extends Component {
   
    state = {
        title: "",
        description: "",
        priority: "",
        category: "",
        dueDate: ""
      };


      handleChange = (e) => {
     
        this.setState({
          [e.target.name]: e.target.value
        });
    
      };

   handleSubmit = () => {
   
    const newTask = {
      id: Date.now().toString(),
      title: this.state.title,
      description: this.state.description,
      status: "Active",
      priority: this.state.priority,
      category: this.state.category,
      dueDate: this.state.dueDate,
      createdDate: new Date().toLocaleDateString()
    
    };
    if(this.state.title !== ""){
    console.log("submited")
    this.props.addTask(newTask);
}
  };

render(){
  return (
    <div className="p-4">

      {/* Header */}
      <div className="mb-4">
        <h2
          className="fw-bold mb-1"
          style={{ color: "#0F172A" }}
        >
          Add New Task
        </h2>

        <p style={{ color: "#64748B" }}>
          Create a new task and keep your work organized.
        </p>
      </div>

      {/* Form Card */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-4">

          {/* Task Title */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Task Title
            </label>

            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Enter task title"
              name="title"
  value={this.state.title}
  onChange={ this.handleChange}
              style={{ borderColor: "#CBD5E1" }}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Description
            </label>

            <textarea
              className="form-control shadow-none"
              rows="4"
              name="description"
  value={this.state.description}
  onChange={this.handleChange}
              placeholder="Describe your task..."
              style={{ borderColor: "#CBD5E1" }}
            ></textarea>
          </div>

          {/* Priority + Category */}
          <div className="row">

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Priority
              </label>

              <select
               name="priority"
               value={this.state.priority}
               onChange={this.handleChange}
                className="form-select shadow-none"
                style={{ borderColor: "#CBD5E1" }}
              >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Category
              </label>

              <select
               name="category"
               value={this.state.category}
               onChange={this.handleChange}
                className="form-select shadow-none"
                style={{ borderColor: "#CBD5E1" }}
              >
                <option value="">Select category</option>
                <option value="Programming">Programming</option>
                <option value="Study">Study</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
              </select>
            </div>

          </div>

          {/* Due Date */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Due Date
            </label>

            <input
             name="dueDate"
             value={this.state.dueDate}
             onChange={this.handleChange}
              type="date"
              className="form-control shadow-none"
              style={{ borderColor: "#CBD5E1" }}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-2 pt-2">

            <button
              type="button"
              className="btn"
              style={{
                border: "1px solid #CBD5E1",
                color: "#475569",
              }}
            >
              Cancel
            </button>

            <button
             onClick={this.handleSubmit}
              type="button"
              className="btn d-flex align-items-center gap-2"
              style={{
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                borderRadius: "8px",
              }}
            >
              <i className="fa-solid fa-plus"></i>
              Add Task
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};}

export default AddTask;