import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import usePerson from '../../Hooks/usePerson';
import SingleBooking from './SingleBooking/SingleBooking';

const Booking = () => {
    const [persons] = usePerson()
    const { serviceId } = useParams({})
    const doctor = []
    if (persons?.length) {
        const findPerson = persons.find(person => person.id === parseInt(serviceId))
        doctor.push(findPerson)
    }
    return (
        <div className='container'>
            <Row xs={1} md={1} className="g-4 mx-auto m-5">

            {
                doctor.map(singleDoctor => <SingleBooking key={singleDoctor.id}
                singleDoctor={singleDoctor}></SingleBooking>)
            }
            </Row>
        </div>
    );
};

export default Booking;