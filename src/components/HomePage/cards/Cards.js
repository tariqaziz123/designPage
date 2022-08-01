import React from 'react';
import './cards.css';

const Cards = () =>{
    return(
        <div className="cardMain">
            <div class="cardGroup">
                <div class="cardContainer">
                    <p className="card-title">Lorem ipsum</p>
                    <p className="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    <p className="know__More">Know More <span className='know__More__icon'>&gt;</span></p>
                </div>
                <div class="cardContainer">
                    <p className="card-title">Lorem ipsum</p>
                    <p className="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    <p className="know__More">Know More <span className='know__More__icon'>&gt;</span></p>
                </div>
                <div class="cardContainer">
                    <p className="card-title">Lorem ipsum</p>
                    <p className="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    <p className="know__More">Know More <span className='know__More__icon'>&gt;</span></p>
                </div>
                <div class="cardContainer">
                    <p className="card-title">Lorem ipsum</p>
                    <p className="card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
                    <p className="know__More">Know More <span className='know__More__icon'>&gt;</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cards;