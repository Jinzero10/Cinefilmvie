import React from "react";
import "./title.scss";

const Title = ({ mainTitle, title }) => {
    return (
        <>
            {title && (
                <section className="pageTitle">
                    <h1>{title}</h1>
                </section>
            )}
            {mainTitle && (
                <div className="title">
                    <h2 className="mainTitle">{mainTitle}</h2>
                </div>
            )}
        </>
    );
};

export default Title;
