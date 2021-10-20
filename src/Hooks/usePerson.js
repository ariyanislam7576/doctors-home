import{ useEffect, useState } from 'react';

const usePerson = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ariyanislam7576/json-file/main/service.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
return [persons]
};

export default usePerson;