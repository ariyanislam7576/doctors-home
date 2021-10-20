import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import OurService from './OurService/OurService';

const OurServices = () => {
    const [services] = useService()
    return (
        <div className='container my-5'>
            <h1 className='text-info'>Our Services</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(singleService => <OurService key={singleService.id} singleService={singleService}></OurService>)
                }
            </Row>
        </div>
    );
};

export default OurServices;