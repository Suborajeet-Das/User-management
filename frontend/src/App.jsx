import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UserList from "./components/UserList"

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<UserList />} />
                <Route path="/add" element={<AddUser />} />
                {/* id is a route parameter */}
                <Route path="/edit/:id" element={<EditUser />} /> 
            </Routes>
        </Router>
    );
};

export default App;
