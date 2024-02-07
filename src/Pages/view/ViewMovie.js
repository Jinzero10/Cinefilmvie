import React, { useEffect, useState } from "react";
import "./viewmovie.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { db } from "../../features/app/api/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ViewMovie = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const { state } = useLocation();
    const movie = state?.movie;
    const [mobile, setMobile] = useState(false);
    const movieId = doc(db, "user", `${user.email}`);

    const img_url = "https://image.tmdb.org/t/p/w500/";

    const savedMovies = async () => {
        if (user?.email) {
            await updateDoc(movieId, {
                myList: arrayUnion({
                    id: movie.id,
                    title: movie.title || movie.name,
                    img: {
                        backdrop: movie.backdrop_path || null,
                        poster: movie.poster_path || null,
                    },
                }),
            });
            toast.success("Movie has been added to list.");
        } else {
            toast.error("Please log in to save a movie");
        }
    };

    useEffect(() => {
        const handlePosters = () => {
            if (window.innerWidth <= 800) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        handlePosters();

        window.addEventListener("resize", handlePosters);

        return () => window.removeEventListener("resize", handlePosters);
    }, []);

    return (
        <main className="viewMovie">
            <div className="container">
                <button className="back" onClick={() => navigate(-1)}>
                    Back
                </button>
                <div className="imageContainer">
                    {movie?.poster_path ? (
                        <img
                            src={`${img_url}${
                                !mobile
                                    ? movie?.poster_path
                                    : movie?.backdrop_path
                            }`}
                            alt={
                                movie?.title ||
                                movie?.original_name ||
                                movie?.name
                            }
                        />
                    ) : (
                        <img
                            src={`${img_url}${movie?.backdrop_path}`}
                            alt={
                                movie?.title ||
                                movie?.original_name ||
                                movie?.name
                            }
                        />
                    )}
                </div>
                <div className="textContainer">
                    <p className="rating">
                        <ImStarFull
                            style={{ color: "yellow", fontSize: "20px" }}
                        />
                        {movie?.vote_average}
                    </p>
                    <h1>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>

                    <div className="description">
                        <p className="released">
                            Released:
                            {movie?.release_date || movie?.first_air_date}
                        </p>
                        <p className="overview">{movie?.overview}</p>
                    </div>
                    <div>
                        <button onClick={savedMovies}>
                            <FaHeart /> My List
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ViewMovie;
