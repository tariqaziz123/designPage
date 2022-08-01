import React from 'react';
import './Contact.css';

const Contact = () => {
    return(
        <div className="container-fluid contact-container">
            <div className="row">
                <div className="col-md-4 contactUs">
                    <p className="contact-title">Contact us</p>
                    <p className='contact-description'>Address: amet, consetetur sadipscing elitr, sed diam Email id: eirmod tempor invidunt ut labore et dolore Phone no: 123456789</p>
                </div>
                <div className="col-md-4 contactUs">
                    <p className="follow-title">Follow us</p>
                    <div>
                        <span><img className="social_media" src="/Icon-awesome-facebook-f.png" /></span>
                        <span><img className="social_media" src="/linkedin.png" /></span>
                        <span><img className="social_media" src="/instagram.png" /></span>
                        <span><img className="social_media" src="/twitter.png" /></span>
                        <span><img className="social_media" src="/youtube.png" /></span>
                        <span><img className="social_media" src="/quora.png" /></span>
                    </div>
                </div>
                <div className="col-md-4 contactUs">
                    <p className="follow-title">Head Office</p>
                    <p className="address"><span><img src="/location.png" /></span><span className='address_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span></p>
                    <p className="address"><span><img src="/Group17190.png" /></span><span className='address_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span></p>
                    <p className="address"><span><img src="/Group17191.png" /></span><span className='address_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span></p>
                    <p className="address"><span><img src="/Group17156.png" /></span><span className='address_desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;