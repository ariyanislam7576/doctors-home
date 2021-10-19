import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import SingleService from './SingleService/SingleService';


const Service = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <div className='container my-5'>
            <Row xs={1} md={3} className="g-4">
                {
                    persons.map(person => <SingleService key={person.id}
                        person={person}
                    ></SingleService>)
                }
            </Row>
        </div>
    );
};

export default Service;