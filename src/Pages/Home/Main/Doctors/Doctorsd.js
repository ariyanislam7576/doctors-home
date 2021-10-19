import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctorsd = (props) => {
    const {name,img,specialist} = props.doctor
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className='text-start'>
                        <Card.Title>Name: {name}</Card.Title>
                        <h2>Specialist: {specialist}</h2>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <button className="btn-primary px-3 rounded">Book now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctorsd;