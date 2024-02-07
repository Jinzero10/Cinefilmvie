import React, { useRef } from "react";
import "./authentication.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../app/api/firebase";
import { toast } from "react-toastify";
import errorHandler from "../../Utility/errorHandler";

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const login = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then(() => {
                navigate("/");
                toast.success("Login successfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                errorHandler(errorCode, errorMessage);
            });
    };
    return (
        <div className="authentication ">
            <div className="wrapper login">
                <h1>Login</h1>
                <button className="back" onClick={() => navigate(-1)}>
                    X
                </button>
                <form onSubmit={login}>
                    <div className="inputWrapper">
                        <FaUser className="icon" />
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="inputWrapper">
                        <FaLock className="icon" />
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button type="submit">Login</button>
                    <div className="rememberMe">
                        <div className="check">
                            <input type="checkbox" />
                            Remember me
                        </div>
                        <p>Need Help?</p>
                    </div>
                    <div className="link">
                        <p>
                            Don't have an account?
                            <span onClick={() => navigate("/signup")}>
                                Sign Up
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
