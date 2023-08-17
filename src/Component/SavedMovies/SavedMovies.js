import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const SavedMovies = () => {
    const user = useSelector(selectUser);
    const [movies, setMovies] = useState([]);

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
        }
    };

    return (
        <>
            <h2 className="saved__title">Saved Shows</h2>
            <div className="saved__posters">
                {movies.map((movie) => (
                    <div className="saved__moviedetails" key={movie.id}>
                        <img
                            className="saved__poster"
                            src={`${img_url}${movie?.img}`}
                            alt={movie.title}
                        />
                        <div className="saved__desc">
                            <p
                                onClick={() => deleteMovie(movie.id)}
                                className="delete__saved"
                            >
                                <AiOutlineClose size={20} />
                            </p>
                            <h1 className="saved__movietitle">
                                {movie?.title}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SavedMovies;
