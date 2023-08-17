import React, { useState } from "react";
import "./loginsignupcard.css";

import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Login } from "./Login";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [signUpEmail, setsignUpEmail] = useState("");
    const [signUpPassword, setsignUpPassword] = useState("");
    const [signIn, setSignIn] = useState(false);
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then(() => {
                setDoc(doc(db, "user", signUpEmail), {
                    myList: [],
                });
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <>
            {signIn ? (
                <Login />
            ) : (
                <div className="sign__card">
                    <h1 className="sign__header">Sign Up</h1>
                    <form onSubmit={signUp} className="sign__form">
                        <input
                            onChange={(e) => setsignUpEmail(e.target.value)}
                            type="email"
                            className="sign__input"
                            placeholder="Email"
                        />
                        <input
                            onChange={(e) => setsignUpPassword(e.target.value)}
                            type="password"
                            className="sign__input"
                            placeholder="Password"
                        />
                        <button type="submit" className="sign__btn">
                            Sign Up
                        </button>
                        <div className="signform__footer">
                            <p>
                                <input type="checkbox" />
                                Remember me
                            </p>
                            <p>Need Help?</p>
                        </div>
                        <p className="subcribe">
                            <span>Already Subscribe to Netflix?</span>
                            <span
                                className="subcribe__link"
                                onClick={() => setSignIn(true)}
                            >
                                Sign In
                            </span>
                        </p>
                    </form>
                </div>
            )}
        </>
    );
};
