import React from 'react';
import './QuickLink.css';

const QuickLink = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 quickLink__first">
                    <p className="first_link__heading">Quick Links &gt;</p>
                    <p className="first_link__subheading">Lorem ipsum</p>
                    <div className="first_link__levelmain">
                        <span className="first_link__level">Level 1</span>
                        <span className="first_link__level">Level 2</span>
                        <div className='enquiry_level'>
                            <span className="first_link__level">Level 3</span>
                            <span className="first_link__level">Enquiry</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 quickLink__second">
                <p className="first_link__heading"></p>
                    <p className="first_link__subheading">Lorem ipsum</p>
                    <div className="first_link__levelmain">
                        <span className="first_link__level">Lorem ipsum</span>
                        <span className="first_link__level">Lorem ipsum</span>
                        <div className='enquiry_level'>
                            <span className="first_link__level">Lorem ipsum</span>
                            <span className="first_link__level">Lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 quickLink__third">
                    <p className="first_link__heading"></p>
                    <p className="first_link__subheading">Lorem ipsum</p>
                    <div className="first_link__levelmain">
                        <span className="first_link__level">Lorem ipsum</span>
                        <span className="first_link__level">Lorem ipsum</span>
                        <div className='enquiry_level'>
                            <span className="first_link__level">Lorem ipsum</span>
                            <span className="first_link__level">Lorem ipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickLink;
