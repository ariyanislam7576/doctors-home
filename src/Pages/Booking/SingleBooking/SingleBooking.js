import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBooking = (props) => {
    const {img, name, specialist ,fee,meetTime} = props.singleDoctor
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-start'>
                        <Card.Title>Name: {name}</Card.Title>
                        <h3>Specialist: {specialist}</h3>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <p>Fee: {fee}</p>
                        <p>Meet {meetTime}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleBooking;