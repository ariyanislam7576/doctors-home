import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../../../Hooks/useService';
import SingleServiceForHome from './SingleServiceForHome/SingleServiceForHome';

const ServiceForHome = () => {
    const [services] = useService()
    return (
        <div className='container my-5'>
            <Row xs={1} md={4} className="g-4">
                {
                    services.slice(2,6).map(service => <SingleServiceForHome
                    key={service.id}
                    service={service}></SingleServiceForHome>)
                }
            </Row>
        </div>
    );
};

export default ServiceForHome;
