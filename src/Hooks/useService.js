import{ useEffect, useState } from 'react';

const useService = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ariyanislam7576/service-json/main/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
return [services]
};

export default useService;