import React, { useState } from "react"; 
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Fill in all fields");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userFound = users.find(user => 
            user.email.trim() === email.trim() && user.password.trim() === password.trim()
        );

        if (userFound) {
            localStorage.setItem("username", userFound.username); // Store the registered username
            setTimeout(() => {
                navigate("/"); // Redirect to homepage
            }, 1200);
        } else {
            alert("Wrong email or password");
        }
    };

    return (
        <div>
            <Navbar />

            <div className="text-center mt-4 container">
                <h1>Login</h1>
                <hr className="mt-4" />

                <div className="text-start col-xl-4 col-md-4 col-sm-8 m-auto mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <h5>Email Address</h5>
                            <input 
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
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

                        <h5>New Here? <Link to="/register">Register</Link></h5>

                        <button type="submit" className="btn btn-secondary mt-4 d-block mx-auto px-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
