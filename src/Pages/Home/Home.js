import React from "react";
import "./home.scss";
import requests from "../../features/app/requests";
import Hero from "../../Component/hero/Hero";
import Carousel from "../../Component/moviecarousel/carousel";
import Title from "../../Component/title/Title";
import { useSearchContext } from "../../Context/handleSearch";
import SearchResult from "../../Component/search/SearchResult";

const Home = () => {
    const { searchResults } = useSearchContext();

    return (
        <main className="home">
            {searchResults.length > 0 ? (
                <SearchResult movies={searchResults} />
            ) : (
                <>
                    <section>
                        <Hero />
                    </section>
                    <section>
                        <Title mainTitle="NETFLIX ORIGINALS" />
                        <Carousel
                            rowId="1"
                            fetchURL={requests.requestOriginals}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Trending Now" />
                        <Carousel
                            rowId="2"
                            fetchURL={requests.requestTrending}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Top Rated" />
                        <Carousel
                            rowId="3"
                            fetchURL={requests.requestTopRated}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Action" />
                        <Carousel rowId="4" fetchURL={requests.requestAction} />
                    </section>
                    <section>
                        <Title mainTitle="Comedy" />
                        <Carousel rowId="5" fetchURL={requests.requestComedy} />
                    </section>
                    <section>
                        <Title mainTitle="Horror" />
                        <Carousel rowId="6" fetchURL={requests.requestHorror} />
                    </section>
                    <section>
                        <Title mainTitle="Romance" />
                        <Carousel
                            rowId="7"
                            fetchURL={requests.requestRomance}
                        />
                    </section>
                    <section>
                        <Title mainTitle="Documentaries" />
                        <Carousel
                            rowId="8"
                            fetchURL={requests.requestDocumentaries}
                        />
                    </section>
                </>
            )}
        </main>
    );
};

export default Home;
