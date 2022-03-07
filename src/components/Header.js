import React from 'react'

function Header(props) {
  const toggleClass=()=>{
    document.querySelector("#menu-btn").classList.toggle('fa-times');
    document.querySelector(".navbar").classList.toggle('active');
  }
  return (
    <> 
    <header class="header">

            <div id="menu-btn" class="fas fa-bars" onClick={toggleClass}></div>

            <a href="#" class="logo"> <span>Car</span>Dekho </a>

            <nav class="navbar">
                <a href="#home">Home</a>
                <a href="#vehicles">Vehicles</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>

            <div id="login-btn" onClick={()=>props.handler(true)}>
                <button class="btn" >login</button>
                <i class="far fa-user"></i>
            </div>

    </header>
    </>
  )
}

export default Header