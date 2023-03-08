import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const AdminAuth = ({ children, admin }) => {
    const location = useLocation();
    if (!admin)
        return <Navigate to="/home" state={{ from: location }} replace />
    else
        return children;
};

export default AdminAuth;