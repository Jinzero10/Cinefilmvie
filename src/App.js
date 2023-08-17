import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Movies } from "./Pages/Movies/Movies";
import { MyList } from "./Pages/MyList/MyList";
import { TvShows } from "./Pages/TvShows/TvShows";
import { Account } from "./Pages/Account/Account";
import { LandingPage } from "./Pages/SignInUp/LandingPage";
import { login, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { SignUp } from "./Pages/SignInUp/SignUp";
import { Login } from "./Pages/SignInUp/Login";
import { LandingPageContent } from "./Pages/SignInUp/LandingPageContent";
import ProtectedRoute from "./Utility/ProtectedRoute";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
        return unSubscribe;
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route exact path="/landingpage" element={<LandingPage />}>
                    <Route index element={<LandingPageContent />} />
                    <Route path="/landingpage/login" element={<Login />} />
                    <Route path="/landingpage/signup" element={<SignUp />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/tvshows" element={<TvShows />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/mylist" element={<MyList />} />
                    <Route path="/account" element={<Account />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
