import React from 'react'
import Icons from './Icons'

function Home() {
    const data = [{icon:"fas fa-home", num:"150+", topic:"Branches"},{icon :"fas fa-car", num :"4770+", topic:"cars sold"},{icon:"fas fa-users", num : "320+", topic: "Happy clients"},{icon: "fas fa-car", num :"1500+",topic:"news cars"}]
    return (<>
            <section className="home" id="home">

                <img    src={require("../image/rolls.webp")} alt=""/>

                <a  href="#" className="btn explore">explore cars</a>

            </section>

    <section class="icons-container">
        {data.map(({icon,num,topic})=> <Icons icon = {icon} num ={num} topic= {topic}/>)}
    </section>
            </>
            
    )
}

export default Home