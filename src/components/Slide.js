import React from 'react'

function Slide(props) {
    console.log(typeof props.img);
    return (

        <div class="swiper-slide box">
            <img src={props.img} alt=""/>
            <div class="content">
                <h3>Premium Model</h3>
                <div class="price"> <span>price : </span> $100,000/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2022
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span>250mph
                </p>
                <a href="#" class="btn">check out</a>
            </div>
        </div>
    )
}

export default Slide