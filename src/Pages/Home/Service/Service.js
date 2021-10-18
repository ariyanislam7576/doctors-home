import React from 'react';
import {useState ,useEffect} from 'react'
const Service = () => {
    const [doctors,setDoctors] = useState()
    useEffect('./Service.json')
    .then(res => res.json())
    .then(data => console.log(data))
    return (
        <div>
            
        </div>
    );
};

export default Service;