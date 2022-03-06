import React from 'react'

function Section(props) {
  return (
    <section class="services" id="services">
            <h1 class="heading"> our <span>services</span> </h1>
            {props.componet}
        </section>
  )
}

export default Section