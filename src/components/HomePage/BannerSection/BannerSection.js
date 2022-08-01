import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './banner.css';

const BannerSection =() => {
    return(
        <div className="banner container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="banner_heading">Lorem ipsum</div>
                    <p className="banner__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                    <button className='banner__button'>Know More &nbsp;<FontAwesomeIcon icon={faPlay} /></button>
                </div>
                <div className="col-md-6">
                    <img className="banner_image" src="MaskBanner.svg" alt="MaskBanner" />
                </div>
            </div>
        </div>
    )
}

export default BannerSection;