import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const location = useLocation();
    const user = useSelector(selectUser);

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
