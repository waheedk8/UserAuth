import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className="home">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="banner_info">
                            <h1>Welcome to MERN Auth Application</h1>
                            <p>
                                A perfected user authentication application
                                using the MERN Stack + Redux.Hit the button and
                                enjoy it.
                            </p>
                            {user ? (
                                <>
                                    <Link to="/me">Dashboard</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/register">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner_img">
                            <img
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
