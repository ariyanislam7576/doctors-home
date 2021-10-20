import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OurService = (props) => {
    const {ServiceName,ServiceImage,ServiceId,ServiceDes,} = props.singleService
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
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default OurService;