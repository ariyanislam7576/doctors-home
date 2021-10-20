import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleServiceBooking = (props) => {
    const {ServiceName,ServiceImage,ServiceCharge,ServiceDes} = props.BookingService
    return (
        <div>
             <Col>
                <Card>
                    <Card.Img variant="top" src={ServiceImage} />
                    <Card.Body className='text-start'>
                        <Card.Title>{ServiceName}</Card.Title>
                        <h3>{ServiceCharge}</h3>
                        <Card.Text>
                            {ServiceDes}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <h3 className='text-infoku'>Thanks for choseing our service <br /> we will contact You soon</h3>
        </div>
    );
};

export default SingleServiceBooking;