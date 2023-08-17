import React from "react";
import "./landingpage.css";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

export const LandingPage = () => {
    const location = useLocation();
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    return !user ? (
        <div className="landing__page">
            <div className="landingpage__header">
                <h1
                    className="site__logo"
                    onClick={() => navigate("/landingpage")}
                >
                    NetFlix
                </h1>

                <div>
                    <button
                        className="landingpage__btn"
                        onClick={() => navigate("/landingpage/login")}
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <div>
                <div className="landingpage__face">
                    <div className="bg__overlay">
                        <Outlet />
                    </div>
                    <img
                        className="landingpage__bg"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/bec06d5f-b6ce-4e50-98c0-46eb1b260cba/PH-en-20230724-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                        alt="netflix bg"
                    />
                </div>
            </div>
        </div>
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
};
