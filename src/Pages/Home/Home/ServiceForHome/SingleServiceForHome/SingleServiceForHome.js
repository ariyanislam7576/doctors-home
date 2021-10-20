import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleServiceForHome = (props) => {
    console.log(props);
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
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleServiceForHome;