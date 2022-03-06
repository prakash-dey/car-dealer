import React from 'react'

function Header() {
  return (
    <> 
    <header class="header">

            <div id="menu-btn" class="fas fa-bars"></div>

            <a href="#" class="logo"> <span>max</span>wheels </a>

            <nav class="navbar">
                <a href="#home">home</a>
                <a href="#vehicles">vehicles</a>
                <a href="#services">services</a>
                <a href="#featured">featured</a>
                <a href="#reviews">reviews</a>
                <a href="#contact">contact</a>
            </nav>

            <div id="login-btn">
                <button class="btn">login</button>
                <i class="far fa-user"></i>
            </div>

    </header>
    </>
  )
}

export default Header