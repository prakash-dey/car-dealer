import React from 'react'
import Icons from './Icons'

function Home(props) {
    console.log(props.data);
    return (<>
        <section className="home" id="home">

            <img src={require("../image/rolls.webp")} alt="" />

            <a href="#" className="btn explore">explore cars</a>

        </section>

        <section class="icons-container">
            {props.data.map(({ icon, num, topic }) => <Icons icon={icon} num={num} topic={topic} />)}
        </section>
        <section class="vehicles" id="vehicles">

            <h1 class="heading"> popular <span>vehicles</span> </h1>

            <div class="swiper vehicles-slider">
                <div class="swiper-pagination"></div>
            </div>

        </section>
    </>

    )
}

export default Home