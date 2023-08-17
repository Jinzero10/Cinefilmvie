import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowMovie from "./RowMovieComp/RowMovie";

const Row = ({ title, fetchURL, rowId, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);

    const slideLeft = () => {
        let slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById("slider" + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>

            <div id={"slider" + rowId} className="row__posters">
                <MdChevronLeft onClick={slideLeft} className="left" size={50} />
                {movies.map((movie, id) => (
                    <RowMovie key={id} movie={movie} isLargeRow={isLargeRow} />
                ))}
                <MdChevronRight
                    onClick={slideRight}
                    className="right"
                    size={50}
                />
            </div>
        </div>
    );
};

export default Row;
