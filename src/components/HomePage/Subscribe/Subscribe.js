import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './Subscribe.css';

const Subscribe = () => {
    return(
        <>
        <div className="container" style={{paddingTop:'30px', paddingLeft:'30px',paddingRight:'50px'}}>
            <div className="row">
                <div className="col-md-4">
                    <p className='subscribe'>Subscribe</p>
                    <p className='subscribe_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    <div>
                        <span><input className="input_address" placeholder='Enter your Email Address' /></span>
                        <span><button className='subscribe__button'>Subscribe Now <FontAwesomeIcon icon={faPlay} /></button></span>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src="/Maskgroup72.png" alt='subscribe' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Subscribe;
