import React, { useState } from "react";
import { createUser } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/AddUser.css"

const AddUser = () => {
    const [user, setUser] = useState({ name: "", email: "", phone: "", address: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(user);
        navigate("/");
    };

    return (
        <div className="add-user-container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
