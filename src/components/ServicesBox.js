import React from 'react'

function ServicesBox(props) {
    return (
        <div className="box">
            <i className={props.icon}></i>
            <h3>{props.service}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
            <a href="#" className="btn"> read more</a>
        </div>
    )
}

export default ServicesBox