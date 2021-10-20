import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctorsd from './Doctors/Doctorsd';

const Main = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ariyanislam7576/json-file/main/service.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='container my-5'>
            <Row xs={1} md={2} className="g-4">
                {
                    doctors.slice(2,6).map(doctor => <Doctorsd key={doctor.id}
                    doctor={doctor}
                    ></Doctorsd>)
                }
            </Row>
        </div>
    );
};

export default Main;