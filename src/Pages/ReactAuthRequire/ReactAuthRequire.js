import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';

const ReactAuthRequire = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/join" state={{ from: location }} replace />;
    } else {
        return children;
    }
};

export default ReactAuthRequire;