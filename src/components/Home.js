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
    </>

    )
}

export default Home