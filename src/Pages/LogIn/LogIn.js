import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const {GoogleSignIn , handleEmail ,handlePassword ,handleRegister} = useAuth()
    
    return (
        <div>
            <h1>Please Log In</h1>
            <div className='m-5'>
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter your email' /><br /><br />
                <input onBlur={handlePassword} type="password" name="" id="" placeholder="Enter your password" /><br /><br />
                <input onClick={handleRegister} type="submit" value="Submit" />
            </div>
            <p>New to Doctor's Home? <Link to='/register'>Create acount</Link></p>
            <button className="btn-primary m-3 rounded bg-white
                border-dark text-dark" onClick={GoogleSignIn}>Sign in with Google</button>
            <button className="btn-primary m-3 rounded border-dark bg-white text-dark">Sign in with Github</button>

        </div>
    );
};

export default LogIn;