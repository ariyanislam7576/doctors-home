import React from 'react';
import { useParams } from 'react-router';
import usePerson from '../../Hooks/usePerson';

const Booking = () => {
    const {serviceId} = useParams()
    console.log(serviceId);
    const [persons] =usePerson()
    return (
        <div>
            <h1>This is dynamic part {serviceId}</h1>
        </div>
    );
};

export default Booking;