import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {img,specialist,name ,id} = props.person
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
                        <Link to={`/doctor/${id}`}><button className="btn-primary px-4 rounded">Book</button></Link>
                        
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;