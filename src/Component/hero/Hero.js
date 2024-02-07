import React, { useEffect, useState } from "react";
import "./hero.scss";
import axios from "../../features/app/api/axios";
import requests from "../../features/app/requests";
import { BiSolidRightArrow } from "react-icons/bi";
import { ImStarFull } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { db } from "../../features/app/api/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Hero = () => {
    const user = useSelector(selectUser);
    const [movies, setMovies] = useState([]);
    const [changeBackDrop, setChangeBackDrop] = useState(false);
    const navigate = useNavigate();
    const movieId = doc(db, "user", `${user.email}`);

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
    const savedMovies = async () => {
        if (user?.email) {
            await updateDoc(movieId, {
                myList: arrayUnion({
                    id: movies.id,
                    title: movies.title || movies.name,
                    img: {
                        backdrop: movies.backdrop_path || null,
                        poster: movies.poster_path || null,
                    },
                }),
            });
            toast.success("Movie has been added to list.");
        } else {
            toast.error("Please log in to save a movie");
        }
    };
    function truncateString(str, num) {
        if (str?.length > num) {
            return str.slice(0, num - 1) + "...";
        } else {
            return str;
        }
    }
    const handleHeroImage = () => {
        if (window.innerWidth <= 400) {
            setChangeBackDrop(true);
        } else {
            setChangeBackDrop(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleHeroImage);
        return () => window.removeEventListener("resize", handleHeroImage);
    }, []);
    return (
        <div className="hero">
            <div className="container">
                <div className="textContainer">
                    <p className="rating">
                        <ImStarFull
                            style={{ color: "yellow", fontSize: "20px" }}
                        />
                        {movies?.vote_average}
                    </p>
                    <h1>
                        {movies?.title || movies?.name || movies?.original_name}
                    </h1>

                    <div className="description">
                        <p className="released">
                            Released:
                            {movies?.release_date || movies?.first_air_date}
                        </p>
                        <p className="overview">
                            {truncateString(movies?.overview, 150)}
                        </p>
                    </div>
                    <div className="heroBtn">
                        <button
                            onClick={() =>
                                navigate("/viewmovie", {
                                    state: { movie: movies },
                                })
                            }
                        >
                            <BiSolidRightArrow /> Play
                        </button>
                        <button onClick={savedMovies}>
                            <FaHeart /> My List
                        </button>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                {changeBackDrop ? (
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
                        alt={movies?.title}
                    />
                ) : (
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
                        alt={movies?.title}
                    />
                )}
            </div>
        </div>
    );
};

export default Hero;
