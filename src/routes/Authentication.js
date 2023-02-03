import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Authentication = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();

    if(!user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }

    return children;
};
export default Authentication;