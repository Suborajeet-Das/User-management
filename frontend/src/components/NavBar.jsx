import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"

const Navbar = () => {
    return (
        <nav>
            <h2>User Profile Management</h2>
            <div className="nav-link">
                <Link to="/" >Home</Link>
                <Link to="/list">List User</Link>
                <Link to="/add" >Add User</Link>
            </div>
        </nav>
    );
};


export default Navbar;
