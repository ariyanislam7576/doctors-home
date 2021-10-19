import{ useEffect, useState } from 'react';

const usePerson = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
return [persons]
};

export default usePerson;