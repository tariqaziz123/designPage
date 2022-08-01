import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return(
        <div className="container about_us">
            <div className="row">
                <div className="col-md-4 team_work">
                    <div className="teamwork_image">
                        <p className="teamwork_title">Lorem ipsum</p>
                    </div>
                    <div className="teamwork_description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </div>
                    <div className='aboutus_knowmore'>
                     Know More
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="profile_image">
                        <p className="teamwork_title">Lorem ipsum</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </div>
                    <div>
                     Know More
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="points_image">
                        <p className="teamwork_title">Lorem ipsum</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </div>
                    <div>
                     Know More
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;