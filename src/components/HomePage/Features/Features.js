import React from 'react';
import './Features.css';

const Features = () => {
    return(
        <>
            <div className="container featuresContainer">
                <div className="row">
                    <div className="col-md-4 features__title">
                        Lorem ipsum
                    </div>
                    <div className="col-md-4 features__title">
                        Lorem ipsum
                    </div>
                    <div className="col-md-4 features__view">
                        View all <span className="view_all_icon"> &gt;</span>
                    </div>
                </div>
                <div className="container features__card__container">
                    <div className="row">
                        <div className="col-md-6" style={{ backgroundColor: '#FFFFFF' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 quote">
                                        <img src="/Group17193.png" alt="features" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="quote_title">Quote of the month</p>
                                        <p className='quote_details'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 quote">
                                        <img src="/reduce-new-hire-turnover-featured.png" alt="features" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="quote_title">Hiring this month</p>
                                        <p>
                                            <span><img style={{width:"100px"}} src="/Barclays.png" alt='barclays' /></span>
                                            <span><img style={{width:"100px"}} src="/Deloitte_Logo.png" alt='delloite' /></span>
                                        </p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 quote">
                                        <img src="/videp.png" alt="features" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="quote_title">Video of the month</p>
                                        <p className='quote_details'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container" style={{ backgroundColor: '#FFFFFF', marginLeft:'3px', marginBottom:'7px' }}>
                                <div className="row">
                                    <div className="col-md-4 quote">
                                        <img src="/date.png" alt="features" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="date_title">Lorem ipsum</p>
                                        <p className='date_details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
                                        <p className="register_date">07:00 - 10:00 (March 20, 2021)</p>
                                        <a href='#' className='register'>Register Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="container" style={{ backgroundColor: '#FFFFFF', marginLeft:'3px' }}>
                                <div className="row">
                                    <div className="col-md-4 quote">
                                        <img src="/date.png" alt="features" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="date_title">Lorem ipsum</p>
                                        <p className='date_details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
                                        <p className="register_date">07:00 - 10:00 (March 20, 2021)</p>
                                        <a href='#' className='register'>Register Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Features;