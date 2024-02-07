import React, { useEffect, useRef, useState } from "react";
import "./card.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../features/app/api/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
    const navigate = useNavigate();
    const imgRef = useRef();
    const user = useSelector(selectUser);
    const [mobile, setMobile] = useState(false);
    const [inView, setInView] = useState(false);

    const [saveMovie, setSaveMovie] = useState(false);
    const movieId = doc(db, "user", `${user.email}`);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
            const favorites = doc.data()?.myList;
            const idArray = favorites.map((item) => item.id);

            if (idArray.includes(movie.id)) {
                setSaveMovie(true);
            } else {
                setSaveMovie(false);
            }
        });
        // eslint-disable-next-line
    }, [user?.email]);

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
    };

    useEffect(() => {
        let observer = new IntersectionObserver(callback);
        if (imgRef?.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const savedMovies = async () => {
        if (user?.email) {
            setSaveMovie(true);
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
        <>
            {movie?.poster_path && movie?.backdrop_path && (
                <div className="card">
                    <div
                        className="imageContainer"
                        onClick={() =>
                            navigate("/viewmovie", {
                                state: { movie: movie },
                            })
                        }
                    >
                        {inView ? (
                            <img
                                src={`${base_url}${
                                    mobile
                                        ? movie?.poster_path
                                        : movie?.backdrop_path
                                }`}
                                alt={movie.name}
                            />
                        ) : (
                            <img ref={imgRef} alt={movie.name} />
                        )}
                    </div>
                    <div className="textContainer">
                        <div className="favorites" onClick={savedMovies}>
                            {saveMovie ? <FaHeart /> : <FaRegHeart />}
                        </div>
                        <div className="wrapper">
                            <h2
                                onClick={() =>
                                    navigate("/viewmovie", {
                                        state: { movie: movie },
                                    })
                                }
                            >
                                {movie?.title ||
                                    movie?.original_name ||
                                    movie?.name}
                            </h2>
                            <p className="released">
                                Released:
                                {movie?.release_date || movie?.first_air_date}
                            </p>
                            <p className="overview">{movie?.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
