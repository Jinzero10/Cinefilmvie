import React, { useEffect, useState } from "react";
import "./carousel.scss";
import axios from "../../features/app/api/axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "../moviecard/Card";

const Carousel = ({ fetchURL, rowId }) => {
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
        <div className="carousel">
            <div className="arrow" id="left" onClick={slideLeft}>
                <MdChevronLeft />
            </div>
            <div className="arrow" id="right" onClick={slideRight}>
                <MdChevronRight />
            </div>
            <div id={"slider" + rowId} className="posters">
                {movies.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
