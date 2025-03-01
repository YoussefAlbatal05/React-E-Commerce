import React, { useState } from "react"; 
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Fill in all fields");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        let existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("Email already registered. Please use another email.");
            return;
        }

        let newUser = { 
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
        };

        let updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setTimeout(() => {
            navigate("/login"); // Redirect to login page
        }, 1500);
    };

    return (
        <div>
            <Navbar />

            <div className="text-center mt-4 container">
                <h1>Register</h1>
                <hr className="mt-4" />

                <div className="text-start col-xl-4 col-md-4 col-sm-8 m-auto mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <h5>Full Name</h5>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <h5>Email Address</h5>
                            <input 
                                type="email"
                                className="form-control"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <h5>Password</h5>
                            <input 
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <h5>Already have an account? <Link to="/login">Login</Link></h5>

                        <button type="submit" className="btn btn-secondary mt-4 d-block mx-auto px-3">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
