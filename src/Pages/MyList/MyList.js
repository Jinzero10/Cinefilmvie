import React from "react";
import SavedMovies from "../../Component/SavedMovies/SavedMovies";
import "./mylist.css";
import Navbar from "../../Component/Navbar";

export const MyList = () => {
    return (
        <>
            <Navbar />
            <div className="mylist">
                <div className="mylist__header">
                    <h1>My List</h1>
                </div>
                <div className="movies">
                    <SavedMovies />
                </div>
            </div>
        </>
    );
};
