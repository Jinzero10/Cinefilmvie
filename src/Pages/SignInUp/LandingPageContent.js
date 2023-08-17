import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const LandingPageContent = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="header__text">
                <h1>Unlimited movies, TV shows, and more</h1>
                <p className="watch">Watch anywhere. Cancel anytime.</p>
                <p className="ready">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </p>
                <div className="getstarted">
                    <input
                        className="header__input"
                        type="email"
                        placeholder="Email address"
                    />
                    <button
                        onClick={() => navigate("/landingpage/signup")}
                        className="header__btn"
                    >
                        Get Started
                        <IoIosArrowForward
                            className="get__arrow"
                            style={{ color: "white" }}
                            size={15}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};
