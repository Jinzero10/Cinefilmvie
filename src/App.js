import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LayOut from "./Pages/LayOut";
import Home from "./Pages/home/Home";
import { Movies } from "./Pages/Movies/Movies";
import { MyList } from "./Pages/mylist/MyList";
import { TvShows } from "./Pages/TvShows/TvShows";
import { Profile } from "./features/user/Profile/Profile";

import Landing from "./Pages/landingpage/Landing";
import Login from "./features/authentication/Login";
import SignUp from "./features/authentication/SignUp";
import NotFound from "./Pages/notfound/NotFound";

import { auth } from "./features/app/api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, selectUser } from "./features/user/userSlice";
import ProtectedRoute from "./Utility/ProtectedRoute";
import ViewMovie from "./Pages/view/ViewMovie";

function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

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
    const RequireAuth = ({ children }) => {
        return user ? <Navigate to="/" /> : children;
    };
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnFocusLoss={false}
                draggable
                limit={2}
                pauseOnHover={false}
            />
            <Routes>
                <Route path="/" element={<LayOut />}>
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<Home />} />
                        <Route path="tvshows" element={<TvShows />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="mylist" element={<MyList />} />
                        <Route path="viewmovie" element={<ViewMovie />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="welcome" element={<Landing />} />
                    <Route
                        path="login"
                        element={
                            <RequireAuth>
                                <Login />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="signup"
                        element={
                            <RequireAuth>
                                <SignUp />
                            </RequireAuth>
                        }
                    />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
