import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const OurService = (props) => {
    const {ServiceName,ServiceImage,ServiceId,ServiceDes,ServiceCharge} = props.singleService
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={{height: '300px'}} variant="top" src={ServiceImage} />
                    <Card.Body>
                        <Card.Title>{ServiceName}</Card.Title>
                        <h4>Fee: {ServiceCharge}</h4>
                        <Card.Text>
                            {ServiceDes.slice(0,100)}
                        </Card.Text>
                        <NavLink to={`/singleservice/${ServiceId}`}>
                            <button className="btn-primary">Pursuse this service</button>
                            </NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default OurService;