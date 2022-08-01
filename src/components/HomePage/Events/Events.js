import React from 'react';
import './Events.css';

const Events = () => {
    return(
        <>
            <div className='container-fluid events-container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <p className='events__date'>January 20, 2011</p>
                        <p className='events__desc'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='events__date'>April 31, 2015</p>
                        <p className='events__desc'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='events__date'>December 21, 2010</p>
                        <p className='events__desc'>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className='col-md-3'>
                        <p className='events__date'><span style={{backgroundColor: '#FFFFFF',fontSize:'30px',color:'#000000',padding:'5px 17px',borderRadius: '10px'}}>&lt;</span >&nbsp;<span style={{backgroundColor: '#FFFFFF',fontSize:'30px',color:'#000000',padding:'5px 17px',borderRadius: '10px'}}>&gt;</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events;