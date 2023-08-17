import React from "react";
import Banner from "../../Component/HomeComp/Banner/Banner";
import requests from "../../requests";
import Row from "../../Component/HomeComp/Row/Row";
import Navbar from "../../Component/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Row
                rowId="1"
                title="NETFLIX ORIGINALS"
                fetchURL={requests.requestOriginals}
                isLargeRow
            />
            <Row
                rowId="2"
                title="Trending Now"
                fetchURL={requests.requestTrending}
            />
            <Row
                rowId="3"
                title="Top Rated"
                fetchURL={requests.requestTopRated}
            />
            <Row
                rowId="4"
                title="Action Movies"
                fetchURL={requests.requestAction}
            />

            <Row
                rowId="5"
                title="Comedy Movies"
                fetchURL={requests.requestComedy}
            />
            <Row
                rowId="6"
                title="Horror Movies"
                fetchURL={requests.requestHorror}
            />
            <Row
                rowId="7"
                title="Romance Movies"
                fetchURL={requests.requestRomance}
            />
            <Row
                rowId="8"
                title="Documentaries Movies"
                fetchURL={requests.requestDocumentaries}
            />
        </>
    );
};

export default Home;
