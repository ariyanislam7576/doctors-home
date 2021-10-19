import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="conatainer">
                <div className="row">
                    <div className="col-md-5 m-5 text-start">
                        <h1>Docotor's Home</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quod deleniti quidem ad omnis saepe corrupti nesciunt praesentium aliquam non neque reiciendis doloremque tempora, voluptatem quos hic totam minus quibusdam.</p>
                    </div>
                    <div className="col-md-6">
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