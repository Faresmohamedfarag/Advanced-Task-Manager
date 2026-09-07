import React from 'react';
 

const Navbar = (props) => {
    return ( <>
    <nav style={{height:'55px',display:"flex",alignItems:"center" }} className=' w-100  bg-white ml-1 rounded'>
    <div className="container-fluid d-flex align-items-center ms-3 d-flex justify-content-between">
    <a className="navbar-brand fw-bold fs-5" href="#" style={{ color: "#222937", textDecoration: "none" }}>{ window.location.pathname.replace("/", "") === "" ? "dashboard" : window.location.pathname.replace("/","")}</a>
    <ul className="navbar-nav flex-row ms-3 d-flex  align-items-center  gap-3"   style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }} >
        <li className="nav-item">
           <form className="form-inline my-2 my-lg-0 d-flex ">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
    </form> 
        </li>
        <i style={{cursor:"pointer"}} class="fa-solid fa-bell fs-5 "></i>
        <i style={{cursor:"pointer"}} class="fa-regular fa-circle-user fs-5  "></i>
        </ul>
    </div>
    </nav>
    </> );
}
 
export default Navbar;