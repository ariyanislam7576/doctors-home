import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { GoogleSignIn, handleEmail,handlePassword ,handleRegister} = useAuth()
    return (
        <div>
            <h1>Please  Register</h1>
            <div className='m-5'>
                <input type="text"  placeholder='Enter your name'/><br /> <br />
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter your email' /><br /><br />
                <input onBlur={handlePassword}  type="password" name="" id="" placeholder="Enter your password" /><br /><br />
                <input onClick={handleRegister} type="submit" value="Submit" />
            </div>
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
            <button onClick={GoogleSignIn} className="btn-primary m-3 rounded bg-white
                border-dark text-dark">Sign in with Google</button>
        </div>
    );
};

export default Register;