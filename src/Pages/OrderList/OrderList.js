import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const OrderList = () => {
    const [order, setOrder] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        <Loading />
    }

    useEffect(() => {

        const getOrders = async () => {
            const url = `https://aualine-autocare113.herokuapp.com/order?email=${user.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setOrder(data);
            } catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/join');
                }
            }
        }
        getOrders();

    }, [])

    return (
        <div className='container'>
            <h2>this is order: {order.length}</h2>
        </div>
    );
};

export default OrderList;