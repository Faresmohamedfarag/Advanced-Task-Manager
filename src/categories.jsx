import { Component } from "react";
import Navbar from "./navbar";

class Categories extends Component {

 
  state = {
    selectedCategory: null
  };

  handleView = (categoryName) => {
    this.setState({
      selectedCategory: categoryName
    });
  };
   

  render() {

  
    const categoryTasks = this.props.data.tasks.filter(
      (task) => task.category === this.state.selectedCategory
    );

    const categories = [
      {
        name: "Programming",
        icon: "fa-solid fa-code",
        description: "Programming and development tasks",
      },
      {
        name: "Study",
        icon: "fa-solid fa-book",
        description: "Learning and study tasks",
      },
      {
        name: "Personal",
        icon: "fa-solid fa-user",
        description: "Personal tasks and activities",
      },
      {
        name: "Work",
        icon: "fa-solid fa-briefcase",
        description: "Work and professional tasks",
      }
    ];

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
          className="p-4 d-flex justify-content-between "
          style={{ borderBottom: "1px solid #E2E8F0" }}
        >
            <div>
          <h2
            className="fw-bold mb-1"
            style={{ color: "#0F172A" }}
          >
            Categories
          </h2>

          <p
            className="mb-0"
            style={{ color: "#64748B" }}
          >
            Organize your tasks by category.
          </p>
          </div>
          <button
  className="btn d-flex align-items-center gap-2 rounded-4 h-75"
  style={{
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    borderRadius: "8px",
  }}
>
  <i className="fa-solid fa-plus"></i>
  Add Category
</button>
        </section>
         
<hr></hr>
        {/* Categories */}
        <section className="p-4">

          <div className="row g-4">

            {categories.map((category) => (

              <div
                className="col-md-6"
                key={category.name}
              >

                <div
                  className="card border-0 shadow-sm rounded-3 h-100"
                >
                  <div className="card-body p-4">

                    <div className="d-flex align-items-center gap-3">

                      {/* Icon */}
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#EFF6FF",
                          color: "#2563EB"
                        }}
                      >
                        <i
                          className={category.icon}
                          style={{ fontSize: "20px" }}
                        ></i>
                      </div>

                      {/* Information */}
                      <div>
                        <h5
                          className="fw-semibold mb-1"
                          style={{ color: "#0F172A" }}
                        >
                          {category.name}
                        </h5>

                        <p
                          className="mb-0"
                          style={{
                            color: "#64748B",
                            fontSize: "14px"
                          }}
                        >
                          {category.description}
                        </p>

                      </div>

                    </div>
                    <button onClick={()=>{this.handleView(category.name)}}
  className="btn btn-primary mt-3 d-flex align-items-center gap-2"
>
  <i className="fa-solid fa-list-check"></i>
  View Tasks
</button>
                  </div>
                </div>

              </div>

            ))}

          </div>

        </section>
        {//categoried tasks
  }
        <section>
        {categoryTasks.map((task) => (
   <div className="card border-0 shadow-sm rounded-4 p-3 mb-3" key={task.id}>
   <div className="d-flex align-items-center">

     <input
       className="form-check-input me-3"
       type="checkbox"
     />

     <div className="flex-grow-1">

       <h5 className="fw-semibold mb-1">
         {task.title}
       </h5>

       <p className="text-muted small mb-2">
         {task.description}
       </p>

       <span className="badge bg-primary-subtle text-primary me-2">
         {task.category}
       </span>

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

     <div className="me-4">
       <span className="badge bg-primary-subtle text-primary">
         {task.status}
       </span>
     </div>

     <div className="text-end me-3">
       <small className="text-muted d-block">
         Due Date
       </small>

       <span className="fw-semibold">
         {task.dueDate}
       </span>
     </div>

     <button className="btn btn-light rounded-3 me-2">
       <i className="fa-solid fa-pen"></i>
     </button>

     <button className="btn btn-light text-danger rounded-3">
       <i className="fa-solid fa-trash"></i>
     </button>

   </div>
 </div>
))}
        </section>

      </div>
    );
  }
}

export default Categories;