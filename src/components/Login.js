import React from 'react'
function Login(props) {
    return (
        <>
            <div className="login-form-container">
                <span id="close-login-form" className="fas fa-times" onClick={()=>props.handler(false)} ></span>
                <form action="">
                    <h3>user login</h3>
                    <input type="email" placeholder="email" className="box" />
                    <input type="password" placeholder="password" className="box" />
                    <p> forget your password <a href="#">click here</a> </p>
                    <input type="submit" value="login" className="btn" />
                    <p>or login with</p>
                    <div className="buttons">
                        <a href="#" className="btn"> google </a>
                        <a href="#" className="btn"> facebook </a>
                    </div>
                    <p> don't have an account <a href="#">create one</a> </p>

                </form>

            </div>

        </>
    )
}

export default Login