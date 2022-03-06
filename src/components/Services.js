import ServicesBox from "./ServicesBox"

function Services(props) {
    return (
        <section class="services" id="services">

            <h1 class="heading"> our <span>services</span> </h1>

            <div class="box-container">
               {props.services.map(({icon,service})=><ServicesBox icon ={icon} service = {service}/>) }
            </div>

        </section>
    )
}

export default Services