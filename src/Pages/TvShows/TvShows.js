import React from "react";
import requests from "../../features/app/requests";
import Carousel from "../../Component/moviecarousel/carousel";
import Title from "../../Component/title/Title";

export const TvShows = () => {
    return (
        <main>
            <Title title="TV Shows" />
            <section>
                <Title mainTitle="Trending" />
                <Carousel rowId="1" fetchURL={requests.requestTrendingTv} />
            </section>
            <section>
                <Title mainTitle="Top Rated" />
                <Carousel rowId="2" fetchURL={requests.requestTvTopRated} />
            </section>
            <section>
                <Title mainTitle="Airing Today" />
                <Carousel
                    rowId="3"
                    title="Airing Today"
                    fetchURL={requests.requestAiringToday}
                />
            </section>
            <section>
                <Title mainTitle="Action & Adventure" />
                <Carousel
                    rowId="4"
                    fetchURL={requests.requestActionAdventure}
                />
            </section>

            <section>
                <Title mainTitle="Kids" />
                <Carousel rowId="5" fetchURL={requests.requestKids} />
            </section>
            <section>
                <Title mainTitle="Reality" />
                <Carousel rowId="6" fetchURL={requests.requestReality} />
            </section>
            <section>
                <Title mainTitle="Saop" />
                <Carousel rowId="7" fetchURL={requests.requestSoap} />
            </section>
            <section>
                <Title mainTitle="War & Politics" />
                <Carousel rowId="8" fetchURL={requests.requestPolitics} />
            </section>
            <section>
                <Title mainTitle="Talk Shows" />
                <Carousel rowId="9" fetchURL={requests.requestTalk} />
            </section>
        </main>
    );
};
