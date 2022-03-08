import ServicesBox from "./ServicesBox"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';




// Create state

function Services() {
    const [services, setServices] = useState([{icon:"fas fa-car",service:"car selling"},{icon:"fas fa-tools",service:"parts repair"},{icon:"fas fa-car-crash",service:"car insurance"},{icon:"fas fa-car-battery",service:"battery replacement"},{icon:"fas fa-gas-pump",service:"oil change"},{icon:"fas fa-headset",service:"24/7 support"},]);
    
    return (
        <section className="services" id="services">

            <h1 className="heading"> our services </h1>

            <div className="box-container">
               {services.map(({icon,service},idx)=><ServicesBox icon ={icon} service = {service} key ={uuidv4()}/>) }
            </div>

        </section>
    )
}

export default Services