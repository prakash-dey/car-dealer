import React from 'react'

function Slide(props) {
    console.log(typeof props.img);
    return (

        <div className="swiper-slide box">
            <img src={props.img} alt=""/>
            <div className="content">
                <h3>Premium Model</h3>
                <div className="price"> <span>price : </span> $100,000/- </div>
                <p>
                    new
                    <span className="fas fa-circle"></span> 2022
                    <span className="fas fa-circle"></span> automatic
                    <span className="fas fa-circle"></span> petrol
                    <span className="fas fa-circle"></span>250mph
                </p>
                <a href="#" className="btn">check out</a>
            </div>
        </div>
    )
}

export default Slide