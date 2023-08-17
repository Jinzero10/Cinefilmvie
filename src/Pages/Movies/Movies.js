import React from "react";
import MovieRow from "../../Component/Movies/MovieRow";
import requests from "../../requests";
import Navbar from "../../Component/Navbar";

export const Movies = () => {
    return (
        <>
            <Navbar />
            <MovieRow
                rowId="1"
                title="Movies"
                fetchURL={requests.requestMovies}
                isLargeRow
            />
            <MovieRow
                rowId="2"
                title="Popular"
                fetchURL={requests.requestPopular}
            />
            <MovieRow
                rowId="3"
                title="Upcoming"
                fetchURL={requests.requestUpcoming}
            />
            <MovieRow
                rowId="4"
                title="Animation"
                fetchURL={requests.requestAnimation}
            />

            <MovieRow
                rowId="5"
                title="Adventure"
                fetchURL={requests.requestAdventure}
            />
            <MovieRow
                rowId="6"
                title="Crime"
                fetchURL={requests.requestCrime}
            />
            <MovieRow rowId="7" title="War" fetchURL={requests.requestWar} />
            <MovieRow
                rowId="8"
                title="Mystery"
                fetchURL={requests.requestMystery}
            />
            <MovieRow
                rowId="9"
                title="Fantasy"
                fetchURL={requests.requestFantasy}
            />
        </>
    );
};
