import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useService from '../../Hooks/useService';
import SingleServiceBooking from './SingleServiceBooking/SingleServiceBooking';

const ServiceBooking = () => {
    const [services] = useService()
    const { userId } = useParams({})
    const Service = []
    if (services?.length) {
        const findService = services.find(myService => myService.ServiceId === parseInt(userId))
        Service.push(findService)
    }
    return (
        <div className='container'>
            <Row xs={1} md={2} className="g-4 mx-auto m-5">

            {
                Service.map(BookingService => <SingleServiceBooking
                key={BookingService.ServiceId}
                BookingService={BookingService}></SingleServiceBooking>)
            }
            </Row>
        </div>
    );
};

export default ServiceBooking;