import React from "react";
import "./search.scss";
import Card from "../moviecard/Card";

const SearchResult = ({ movies }) => {
    return (
        <section className="searchResult">
            {movies.map((movie, index) => (
                <Card key={index} movie={movie} />
            ))}
        </section>
    );
};

export default SearchResult;
