import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../../axios";
import requests from "../../../requests";
import { BiSolidRightArrow } from "react-icons/bi";
import { ImPlus, ImStarFull } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.requestOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num - 1) + "...";
        } else {
            return str;
        }
    }

    return (
        <header className="banner">
            <div className="banner__container">
                <div className="overlay"></div>
                <img
                    className="banner"
                    src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
                    alt={movies?.title}
                />
                <div className="movie__details">
                    <p className="rating">
                        <ImStarFull
                            style={{ color: "yellow", fontSize: "20px" }}
                        />
                        {movies?.vote_average}
                    </p>
                    <h1>
                        {movies?.title || movies?.name || movies?.original_name}
                    </h1>
                    <div className="btn">
                        <button className="desc__btn1">
                            <BiSolidRightArrow /> Play
                        </button>
                        <button
                            className="desc__btn2"
                            onClick={() => navigate("/mylist")}
                        >
                            <ImPlus /> My List
                        </button>
                    </div>
                    <div className="movie__description">
                        <p className="release__date">
                            Released:
                            {movies?.release_date || movies?.first_air_date}
                        </p>
                        <p className="overveiw">
                            {truncateString(movies?.overview, 150)}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
