import React, { createContext, useContext, useState } from "react";
import requests from "../features/app/requests";
import axios from "../features/app/api/axios";

const SearchContext = createContext();

export const useSearchContext = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        if (query) {
            const request = await axios.get(
                `${requests.requestSearch}${query}`
            );

            setSearchResults(request.data.results);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <SearchContext.Provider value={{ searchResults, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
