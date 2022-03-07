import React, { useState } from 'react'


function Header(props) {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState(["", ""]);

  const toggleClass = () => {
    // It will activate deactivate the drawer
    setActive(!active);
    active ? setActiveClass(['fa-times', 'active']) : setActiveClass(['', '']);
  }
  return (
    <>
      <header class="header">

        <div id="menu-btn" class={`fas fa-bars ${activeClass[0]}`} onClick={toggleClass}></div>

        <a href="#" class="logo"> <span>Car</span>Dekho </a>

        <nav class={`navbar ${activeClass[1]}`}>
          <a href="#home">Home</a>
          <a href="#vehicles">Vehicles</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div id="login-btn" onClick={() => props.handler(true)}>
          <button class="btn" >login</button>
          <i class="far fa-user"></i>
        </div>

      </header>
    </>
  )
}

export default Header