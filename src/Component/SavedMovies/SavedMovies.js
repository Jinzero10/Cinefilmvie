import React, { useEffect, useState } from "react";
import "./savedmovies.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../features/app/api/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SavedMovies = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [movies, setMovies] = useState([]);
    const [mobile, setMobile] = useState(false);

    const img_url = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.myList);
        });
    }, [user?.email]);

    const movieRef = doc(db, "user", `${user.email}`);

    const deleteMovie = async (passedID) => {
        try {
            const result = movies.filter((movie) => movie.id !== passedID);
            await updateDoc(movieRef, {
                myList: result,
            });
        } catch (error) {
            console.log(error);
            toast.error(error);
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
    console.log(mobile);
    return (
        <div className="savedCard">
            {movies.map((movie) => (
                <div className="container" key={movie.id}>
                    <div className="imageContainer">
                        <img
                            src={`${img_url}${
                                mobile ? movie.img.poster : movie.img.backdrop
                            }`}
                            alt={movie.title}
                        />
                    </div>

                    <div className="textContainer">
                        <div
                            onClick={() => deleteMovie(movie.id)}
                            className="delete"
                        >
                            <AiOutlineClose size={20} />
                        </div>
                        <div className="wrapper">
                            <h2
                                onClick={() =>
                                    navigate("/viewmovie", {
                                        state: { movie: movies },
                                    })
                                }
                            >
                                {movie?.title}
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SavedMovies;
