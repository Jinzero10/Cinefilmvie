import React from "react";
import requests from "../../features/app/requests";
import Title from "../../Component/title/Title";
import Carousel from "../../Component/moviecarousel/carousel";
import { useSearchContext } from "../../Context/handleSearch";
import SearchResult from "../../Component/search/SearchResult";

export const Movies = () => {
    const { searchResults } = useSearchContext();

    return (
        <main className="movies">
            {searchResults.length > 0 ? (
                <SearchResult movies={searchResults} />
            ) : (
                <>
                    <Title title="Movies" />
                    <section>
                        <Title mainTitle="Popular" />
                        <Carousel
                            rowId="1"
                            fetchURL={requests.requestPopular}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Upcoming" />
                        <Carousel
                            rowId="2"
                            fetchURL={requests.requestUpcoming}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Animation" />
                        <Carousel
                            rowId="3"
                            fetchURL={requests.requestAnimation}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Adventure" />
                        <Carousel
                            rowId="4"
                            fetchURL={requests.requestAdventure}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Crime" />
                        <Carousel rowId="5" fetchURL={requests.requestCrime} />
                    </section>
                    <section>
                        <Title mainTitle="War" />
                        <Carousel rowId="6" fetchURL={requests.requestWar} />
                    </section>
                    <section>
                        <Title mainTitle="Mystery" />
                        <Carousel
                            rowId="7"
                            fetchURL={requests.requestMystery}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Fantasy" />
                        <Carousel
                            rowId="8"
                            fetchURL={requests.requestFantasy}
                        />
                    </section>
                </>
            )}
        </main>
    );
};
