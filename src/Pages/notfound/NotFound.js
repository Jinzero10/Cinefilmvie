import React from "react";
import "./notfound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <main className="notfound">
            <div className="container">
                <h1>404</h1>
                <h2>Sorry, Page Not Found</h2>
                <button onClick={() => navigate("/")}>Home</button>
            </div>
        </main>
    );
};

export default NotFound;
