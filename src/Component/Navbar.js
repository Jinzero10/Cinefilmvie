import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const user = useSelector(selectUser);
    const [show, setShow] = useState();
    const [drop, setDrop] = useState(false);
    const [display, setDisplay] = useState(false);
    const [dropList, setDropList] = useState(false);
    const navigate = useNavigate();

    const userEmail = user.email;

    const handleNavBarTransition = () => {
        if (window.scrollY > 100) {
            setShow(true);
            setDisplay(false);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNavBarTransition);
        return () =>
            window.removeEventListener("scroll", handleNavBarTransition);
    }, []);

    return (
        <div className={`navbar ${show && "bg__navbar"}`}>
            <div
                className="hamburger__menu"
                onClick={() => setDropList(!dropList)}
            >
                <GiHamburgerMenu />
            </div>
            <Link className="site__Logo" to="/">
                NetFlix
            </Link>
            <div className="links__container" id={dropList ? "hidden" : ""}>
                <div className="links">
                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/tvshows"> TV Shows </NavLink>
                    <NavLink to="/movies"> Movies </NavLink>
                    <NavLink to="/mylist"> My List </NavLink>
                    <div className="link__acc">
                        <Link to="/account">Account</Link>
                        <button
                            onClick={() =>
                                auth.signOut(navigate("/landingpage"))
                            }
                            className="dropdown__btn logout_btn"
                        >
                            LogOut
                        </button>
                    </div>
                </div>
                <div className="nav__btn" onClick={() => setDisplay(!display)}>
                    <div
                        className="profile__container"
                        onClick={() => setDrop((prevCheck) => !prevCheck)}
                    >
                        <p className="user__email">{userEmail}</p>
                        <img
                            className="account__image"
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                            alt=""
                        />
                        <p className="dropdown__icon">
                            {drop ? (
                                <BsCaretUpFill
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "14px",
                                    }}
                                />
                            ) : (
                                <BsCaretDownFill
                                    style={{
                                        color: "#FFFFFF",
                                        fontSize: "14px",
                                    }}
                                />
                            )}
                        </p>
                    </div>
                    <div
                        className="close__icon"
                        onClick={() => setDropList(!dropList)}
                    >
                        <AiOutlineClose />
                    </div>
                    <div
                        className="dropdownlist"
                        style={{ display: display ? "block" : "none" }}
                    >
                        <button
                            onClick={() => navigate("/account")}
                            className="dropdown__btn"
                        >
                            Account
                        </button>
                        <button
                            onClick={() =>
                                auth.signOut(navigate("/landingpage"))
                            }
                            className="dropdown__btn logout_btn"
                        >
                            LogOut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
