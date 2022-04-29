import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const JoinAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);


    const location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (user) {
        const email = user.email;
        const token = async () => {
            console.log(email);
            const { data } = await axios.post('https://aualine-autocare113.herokuapp.com/login', { email })
            localStorage.setItem('accessToken', data.accessToken)
        }
        token();

        return <Navigate to="/home" state={{ from: location }} replace />
    }

    else
        return children;
};

export default JoinAuth;