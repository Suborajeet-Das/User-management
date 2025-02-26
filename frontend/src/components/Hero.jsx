import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css"
import image from "../assets/images (1).jpeg"


const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <div className="hero-content">
              <h1>Effortless User Management</h1>
              <h2>Easily add, edit, and manage user profiles with a seamless experience.</h2>
              <p>Manage user profiles efficiently with our intuitive and streamlined interface. Add, edit, and organize user data seamlessly.</p>

              <div className="hero-buttons">
                <button className="edit-btn" onClick={() => navigate("/list")}>Edit User</button>
              </div>
            </div>
            <div className="hero-image">
                <img src={image} alt="User Management" />
            </div>
        </div>
    );
};

export default Hero;
