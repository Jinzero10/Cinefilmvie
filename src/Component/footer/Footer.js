import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="textContainer">
                    <h3>
                        <Link to="/">CenifilmVie</Link>
                    </h3>
                    <p>
                        Discover the latest movies, TV shows, and more on our
                        platform. Join our community of movie enthusiasts!
                    </p>
                </div>
                <div className="footerNav">
                    <h3>Quick Links</h3>
                    <div className="link">
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/tvshows">TV Shows</Link>
                        <Link to="/mylist">My List</Link>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>&copy; 2024 Cenifilmvie. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
