import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((result) => result.json())
      .then((data) => setServices(data));
  }, []);
  return services;
};

export default useService;
