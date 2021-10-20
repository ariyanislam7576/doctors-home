import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleServiceForHome = (props) => {
    const {ServiceImage,ServiceId,ServiceDes,ServiceName} = props.service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img style={{height: '300px'}} variant="top" src={ServiceImage} />
                    <Card.Body>
                        <Card.Title>{ServiceName}</Card.Title>
                        <Card.Text>
                            {ServiceDes.slice(0,100)}
                        </Card.Text>
                        <NavLink to={`/singleservice/${ServiceId}`}>
                        <button className="btn-primary px-3 rounded">Pursuse this Service</button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleServiceForHome;