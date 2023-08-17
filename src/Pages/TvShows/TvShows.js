import React from "react";
import { TvShowRow } from "../../Component/TvShow/TvShowRow";
import requests from "../../requests";
import Navbar from "../../Component/Navbar";

export const TvShows = () => {
    return (
        <>
            <Navbar />
            <TvShowRow
                rowId="1"
                title="Tv Shows"
                fetchURL={requests.requestTv}
                isLargeRow
            />
            <TvShowRow
                rowId="2"
                title="Tv Trending"
                fetchURL={requests.requestTrendingTv}
            />
            <TvShowRow
                rowId="3"
                title="Tv TopRated"
                fetchURL={requests.requestTvTopRated}
            />
            <TvShowRow
                rowId="4"
                title="Airing Today"
                fetchURL={requests.requestAiringToday}
            />
            <TvShowRow
                rowId="5"
                title="Action & Adventure"
                fetchURL={requests.requestActionAdventure}
            />

            <TvShowRow
                rowId="6"
                title="Tv Kids"
                fetchURL={requests.requestKids}
            />
            <TvShowRow
                rowId="7"
                title="Tv Reality"
                fetchURL={requests.requestReality}
            />
            <TvShowRow
                rowId="8"
                title="Tv Soap"
                fetchURL={requests.requestSoap}
            />
            <TvShowRow
                rowId="9"
                title="War & Politics"
                fetchURL={requests.requestPolitics}
            />
            <TvShowRow
                rowId="10"
                title="Tv Talk"
                fetchURL={requests.requestTalk}
            />
        </>
    );
};
