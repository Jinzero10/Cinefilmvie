import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const location = useLocation();
    const user = useSelector(selectUser);

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/landingpage" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
/*
const ProtectedRoute = ({ auth, element: Element, ...rest }) => {
    const location = useLocation();
    const user = useSelector(selectUser);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth) return <Element {...props} />;
                if (!auth)
                    return (
                        <Navigate
                            to={{ path: "/", state: { form: props.location } }}
                        />
                    );
            }}
        />
    );
};
*/
