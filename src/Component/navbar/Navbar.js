import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../features/app/api/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Search from "../search/Search";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    const user = useSelector(selectUser);

    const [show, setShow] = useState();
    const [display, setDisplay] = useState(false);
    const [dropList, setDropList] = useState(false);
    const navigate = useNavigate();

    const userEmail = user?.email;

    const handleNavBarTransition = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNavBarTransition);
        return () =>
            window.removeEventListener("scroll", handleNavBarTransition);
    }, []);

    function checkName(email) {
        const maxLength = 7;

        if (email?.includes("@")) {
            let name = email.split("@")[0];

            if (name.length > maxLength) {
                return name?.substring(0, maxLength) + "...";
            } else {
                return name;
            }
        } else {
            return email?.substring(0, maxLength) + "...";
        }
    }
    let navRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!navRef?.current?.contains(event.target)) {
                setDropList(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
    return (
        <nav className={`navbar ${show && "bg__navbar"}`}>
            <div className="siteLogo">
                <Link to="/">Cenifilmvie</Link>
            </div>
            <div
                className="hamburger__menu"
                onClick={() => setDropList(!dropList)}
            >
                <GiHamburgerMenu />
            </div>
            <div
                ref={navRef}
                className={`linksContainer ${display ? "hidden" : undefined}`}
                id={dropList ? "hidden" : undefined}
            >
                <div
                    className="closeMenu"
                    onClick={() => setDropList(!dropList)}
                >
                    <AiOutlineClose />
                </div>
                <NavLink to="/" onClick={() => setDropList((prev) => !prev)}>
                    Home
                </NavLink>
                <NavLink
                    to="/tvshows"
                    onClick={() => setDropList((prev) => !prev)}
                >
                    TV Shows
                </NavLink>
                <NavLink
                    to="/movies"
                    onClick={() => setDropList((prev) => !prev)}
                >
                    Movies
                </NavLink>
                <NavLink
                    to="/mylist"
                    onClick={() => setDropList((prev) => !prev)}
                >
                    My List
                </NavLink>
                <div className="mobileExtra">
                    <Link
                        to="/profile"
                        onClick={() => setDropList((prev) => !prev)}
                    >
                        Account
                    </Link>
                    <p onClick={() => auth.signOut(navigate("/welcome"))}>
                        Logout
                    </p>
                </div>
            </div>
            <Search display={display} setDisplay={setDisplay} />
            <div
                className="searchWrapper"
                onClick={() => setDisplay((prev) => !prev)}
            >
                {display ? (
                    <IoCloseOutline className="iconX" />
                ) : (
                    <FaSearch className="icon" />
                )}
            </div>
            <div className="onlineContainer">
                <p onClick={() => navigate("/profile")}>
                    {checkName(userEmail)}
                </p>
                <button onClick={() => auth.signOut(navigate("/welcome"))}>
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
