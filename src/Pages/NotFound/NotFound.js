import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>page not found</h1>
            <img src="https://image.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" /><br />
            <Link to='/home'><button className="btn-primary p-2 rounded">Go To Home</button></Link>
            
        </div>
    );
};

export default NotFound;