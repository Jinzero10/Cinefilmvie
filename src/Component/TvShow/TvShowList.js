import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const TvShowList = ({ movie, isLargeRow = false }) => {
    const user = useSelector(selectUser);
    const [heart, setHeart] = useState(false);
    const [saveMovie, setSaveMovie] = useState(false);

    const movieId = doc(db, "user", `${user.email}`);

    const base_url = "https://image.tmdb.org/t/p/original/";

    const savedMovies = async () => {
        if (user?.email) {
            setHeart(!heart);
            setSaveMovie(true);
            await updateDoc(movieId, {
                myList: arrayUnion({
                    id: movie.id,
                    title: movie.title || movie.name,
                    img: movie.backdrop_path || movie.poster_path,
                }),
            });
        } else {
            alert("Please log in to save a movie");
        }
    };

    return (
        <>
            {" "}
            {((isLargeRow && movie?.poster_path) ||
                (!isLargeRow && movie?.backdrop_path)) && (
                <div className="row__moviedetails">
                    <img
                        className={`row__poster ${
                            isLargeRow && "row__posterlarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow
                                ? movie?.poster_path
                                : movie?.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                    <div className="card__desc">
                        <p onClick={savedMovies}>
                            {heart ? <FaHeart /> : <FaRegHeart />}
                        </p>
                        <div>
                            <h1 className="card__movietitle">
                                {movie?.title || movie?.name}
                            </h1>
                            <p className="card__realeasedate">
                                Released:
                                {movie?.release_date || movie?.first_air_date}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TvShowList;
