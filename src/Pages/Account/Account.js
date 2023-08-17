import React from "react";
import "./account.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Plan from "../../Component/SubcribePlanComp/Plan";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar";

export const Account = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="account__container">
                <div className="account__overlay"></div>
                <div className="account">
                    <h1>My Account</h1>
                    <hr />
                    <div className="user__info">
                        <div className="user__profile">
                            <img
                                className="user__image"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                                alt=""
                            />
                        </div>
                        <div className="membership__details">
                            <p>Email: {user.email}</p>
                            <p>Password: {user.password}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="plan__details">
                        <h3>Plans Details</h3>
                        <Plan />
                    </div>
                    <div className="logout__btn">
                        <button
                            onClick={() =>
                                auth.signOut(navigate("/landingpage"))
                            }
                            className="logout__btn"
                        >
                            LogOut
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

/*
<div className="membership__billing">
                        <h2>Membership & Billing</h2>
                        <button>Cancel Membership</button>
                    </div>


*/
