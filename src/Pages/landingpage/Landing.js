import React, { useEffect, useState } from "react";
import "./landing.scss";
import axios from "../../features/app/api/axios";
import requests from "../../features/app/requests";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
    const [bg, setBg] = useState([]);
    const [changeBg, setChangeBg] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.requestOriginals);
            setBg(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);
    const handleHeroImage = () => {
        if (window.innerWidth <= 400) {
            setChangeBg(true);
        } else {
            setChangeBg(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleHeroImage);
        return () => window.removeEventListener("resize", handleHeroImage);
    }, []);
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/">Cenifilmvie</Link>
                </div>
                <div className="links">
                    <p onClick={() => navigate("/login")}>Login</p>
                    <p onClick={() => navigate("/signup")}>Sign Up</p>
                </div>
            </nav>

            <main className="landing">
                <section>
                    <div className="textContainer">
                        <h1>Unlimited Entertainment, Just for You</h1>
                        <p>
                            Explore a world of movies, TV shows, and exclusive
                            content.
                        </p>
                        <p>
                            Anywhere, Anytime, immerse yourself in the ultimate
                            streaming experience.
                        </p>
                    </div>

                    <div className="imageContainer">
                        {changeBg ? (
                            <img
                                src={`https://image.tmdb.org/t/p/original/${bg?.poster_path}`}
                                alt={bg?.title}
                            />
                        ) : (
                            <img
                                src={`https://image.tmdb.org/t/p/original/${bg?.backdrop_path}`}
                                alt={bg?.title}
                            />
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Landing;
