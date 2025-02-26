import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ name: "", email: "", phone: "", address: "" });
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await getUserById(id);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, user);
            navigate("/");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="add-user-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={user.name} onChange={handleChange} required />
                <input type="email" name="email" value={user.email} onChange={handleChange} required />
                <input type="text" name="phone" value={user.phone} onChange={handleChange} required />
                <input type="text" name="address" value={user.address} onChange={handleChange} required />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default EditUser;
