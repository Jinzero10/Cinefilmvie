import React, { useState } from "react";
import "./authentication.scss";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../app/api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import errorHandler from "../../Utility/errorHandler";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setDoc(doc(db, "user", email), {
                    myList: [],
                });
                navigate("/");
                toast.success("Account has been created.");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                errorHandler(errorCode, errorMessage);
            });
    };

    return (
        <div className="authentication">
            <div className="wrapper signup">
                <h1>Sign Up</h1>
                <button className="back" onClick={() => navigate(-1)}>
                    X
                </button>
                <form onSubmit={signUp}>
                    <div className="inputWrapper">
                        <FaUser className="icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputWrapper">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={6}
                            maxLength={24}
                            required
                        />
                    </div>

                    <button type="submit">Sign Up</button>
                    <div className="rememberMe">
                        <div className="check">
                            <input type="checkbox" />
                            Remember me
                        </div>
                        <p>Need Help?</p>
                    </div>
                    <div className="link">
                        <p>
                            Already have an account?
                            <span onClick={() => navigate("/login")}>
                                Login
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
