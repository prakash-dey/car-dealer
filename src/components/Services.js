import ServicesBox from "./ServicesBox"
import { useState } from "react"



// Create state

function Services() {
    const [services, setServices] = useState([{icon:"fas fa-car",service:"car selling"},{icon:"fas fa-tools",service:"parts repair"},{icon:"fas fa-car-crash",service:"car insurance"},{icon:"fas fa-car-battery",service:"battery replacement"},{icon:"fas fa-gas-pump",service:"oil change"},{icon:"fas fa-headset",service:"24/7 support"},]);
    
    return (
        <section class="services" id="services">

            <h1 class="heading"> our services </h1>

            <div class="box-container">
               {services.map(({icon,service},idx)=><ServicesBox icon ={icon} service = {service} key ={idx}/>) }
            </div>

        </section>
    )
}

export default Services