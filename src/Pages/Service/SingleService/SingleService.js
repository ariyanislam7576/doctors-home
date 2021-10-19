import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Booking from '../../Booking/Booking';

const SingleService = (props) => {
    const {img,meetTime,specialist,fee,name ,id} = props.person
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <h3>Specialist: {specialist}</h3>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Link to={`/singleservice/${id}`}><button className="btn-primary">Book</button></Link>
                        
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;