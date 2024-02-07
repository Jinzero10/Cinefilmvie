import React from "react";
import SavedMovies from "../../Component/SavedMovies/SavedMovies";
import Title from "../../Component/title/Title";
import { useSearchContext } from "../../Context/handleSearch";
import SearchResult from "../../Component/search/SearchResult";

export const MyList = () => {
    const { searchResults } = useSearchContext();
    return (
        <main>
            {searchResults.length > 0 ? (
                <SearchResult movies={searchResults} />
            ) : (
                <>
                    <Title title="My List" />
                    <section>
                        <Title mainTitle="Saved Movies" />
                        <SavedMovies />
                    </section>
                </>
            )}
        </main>
    );
};
