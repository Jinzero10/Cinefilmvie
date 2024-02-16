import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";
import { useSearchContext } from "../Context/handleSearch";
import SearchResult from "../Component/search/SearchResult";

const LayOut = () => {
    const { searchResults } = useSearchContext();
    const location = useLocation();
    const currentPath = location.pathname;

    const pathNotAllowed = ["/welcome", "/login", "/signup"];

    return (
        <>
            {!pathNotAllowed?.includes(currentPath) ? <Navbar /> : undefined}
            {searchResults.length > 0 ? (
                <SearchResult movies={searchResults} />
            ) : (
                <Outlet />
            )}

            <Footer />
        </>
    );
};

export default LayOut;
