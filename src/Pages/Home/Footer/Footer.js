import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="conatainer">
                <div className="row bg-dark">
                    <div className="col-md-4 m-5 text-start text-light">
                        <h1>Docotor's Home</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quod deleniti quidem ad omnis saepe corrupti nesciunt praesentium aliquam non neque reiciendis doloremque tempora, voluptatem quos hic totam minus quibusdam.</p>
                    </div>
                    <div className="col-md-2 my-5 text-light">
                        <NavLink className='m-3 text-decoration-none' to="/home">Home</NavLink><br /> <br />
                        <NavLink className='m-3 text-decoration-none' to="/about">About</NavLink> <br /><br />
                        <NavLink className='m-3 text-decoration-none' to="/service">Service</NavLink> <br /> <br />
                        <NavLink className='m-3 text-decoration-none' to="/login">Log In</NavLink> <br />
                    </div>
                    <div className="col-md-4 text-light">
                        <h2 className='m-3'>Contact us</h2>
                        <form className='m-5'>
                            <input type="email" name="" id="" placeholder='Enter your email' /><br /><br />
                            <input type="password" name="" id="" placeholder="Enter your password" /><br /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;