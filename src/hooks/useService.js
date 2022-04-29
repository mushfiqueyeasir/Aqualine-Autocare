import { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aualine-autocare113.herokuapp.com/service')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return services;
};

export default useService;