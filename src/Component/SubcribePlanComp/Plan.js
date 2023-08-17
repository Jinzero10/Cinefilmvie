import React from "react";
import "./plan.css";

const Plan = () => {
    return (
        <>
            <div className="billing__plans">
                <p className="billing__title">Basic</p>
                <p className="billing__paragh">
                    Watch on 1 screen at a time in standard Definition. Download
                    videos on 1 phone or tablet.
                </p>
                <button>Basic</button>
            </div>
            <hr />
            <div className="billing__plans">
                <p className="billing__title">Standard</p>
                <p className="billing__paragh">
                    Watch on 2 screenx at a time. Full HD 1080p available.
                    Download videos on 2 phone or tablet.
                </p>
                <button>Standard</button>
            </div>
            <hr />
            <div className="billing__plans">
                <p className="billing__title">Premium</p>
                <p className="billing__paragh">
                    Watch on 4 screenx at a time. Full HD 1080p and Ultra HD 4K
                    available. Download videos on 4 phone or tablet.
                </p>
                <button>Premium</button>
            </div>
        </>
    );
};

export default Plan;
