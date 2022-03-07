import ServicesBox from "./ServicesBox"
const services = [{icon:"fas fa-car",service:"car selling"},{icon:"fas fa-tools",service:"parts repair"},{icon:"fas fa-car-crash",service:"car insurance"},{icon:"fas fa-car-battery",service:"battery replacement"},{icon:"fas fa-gas-pump",service:"oil change"},{icon:"fas fa-headset",service:"24/7 support"},]

function Services() {
    return (
        <section class="services" id="services">

            <h1 class="heading"> our <span>services</span> </h1>

            <div class="box-container">
               {services.map(({icon,service})=><ServicesBox icon ={icon} service = {service}/>) }
            </div>

        </section>
    )
}

export default Services