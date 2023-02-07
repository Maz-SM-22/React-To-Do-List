import React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import { UseAuthentication } from './AuthorizationContext';

type reqAuthChildren = {
    children: React.ReactElement
}

export const RequireAuth = ({ children }: reqAuthChildren) => {
    const result = UseAuthentication();
    const authData = result?.authData;
    const location = useLocation();

    if (!authData?.id) {
        // Add some kind of pop up to say that you must be logged in to view this page. 
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
