import React from "react";
import SavedMovies from "../../Component/SavedMovies/SavedMovies";
import Title from "../../Component/title/Title";

export const MyList = () => {
    return (
        <main>
            <Title title="My List" />
            <section>
                <Title mainTitle="Saved Movies" />
                <SavedMovies />
            </section>
        </main>
    );
};
