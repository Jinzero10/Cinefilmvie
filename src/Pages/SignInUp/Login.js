import React, { useRef, useState } from "react";
import "./loginsignupcard.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [error, setError] = useState("");
    const signInEmailRef = useRef(null);
    const signInPasswordRef = useRef(null);
    const [signUp, setSignUp] = useState(false);
    const navigate = useNavigate();

    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            signInEmailRef.current.value,
            signInPasswordRef.current.value
        )
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <>
            {signUp ? (
                <SignUp />
            ) : (
                <div className="sign__card">
                    <h1 className="sign__header">Sign In</h1>
                    {error ? <p className="error">{error}</p> : null}
                    <form className="sign__form">
                        <input
                            ref={signInEmailRef}
                            type="email"
                            className="sign__input"
                            placeholder="Email"
                        />
                        <input
                            ref={signInPasswordRef}
                            type="password"
                            className="sign__input"
                            placeholder="Password"
                        />
                        <button
                            type="submit"
                            className="sign__btn"
                            onClick={logIn}
                        >
                            Sign In
                        </button>
                        <div className="signform__footer">
                            <p>
                                <input type="checkbox" />
                                Remember me
                            </p>
                            <p>Need Help?</p>
                        </div>
                        <p className="subcribe">
                            <span>New to Netflix?</span>
                            <span
                                className="subcribe__link"
                                onClick={() => setSignUp(true)}
                            >
                                Sign Up now
                            </span>
                        </p>
                    </form>
                </div>
            )}
        </>
    );
};
