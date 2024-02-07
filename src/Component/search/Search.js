import React, { useEffect, useState } from "react";
import "./search.scss";
import { useSearchContext } from "../../Context/handleSearch";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Search = ({ display, setDisplay }) => {
    const [query, setQuery] = useState("");
    const { handleSearch } = useSearchContext();

    useEffect(() => {
        handleSearch(query);
        // eslint-disable-next-line
    }, [query]);

    useEffect(() => {
        if (!display) {
            setQuery("");
        }
        // eslint-disable-next-line
    }, [display]);

    return (
        <div className={`search ${display ? "display" : undefined}`}>
            <FaSearch className="icon" />
            <input
                type="text"
                placeholder="Search..."
                aria-label="Search"
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
                required
            />
            <IoCloseOutline
                className="iconX"
                onClick={() => setDisplay((prev) => !prev)}
            />
        </div>
    );
};

export default Search;
