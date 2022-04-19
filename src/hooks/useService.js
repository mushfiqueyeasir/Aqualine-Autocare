import { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return services;
};

export default useService;