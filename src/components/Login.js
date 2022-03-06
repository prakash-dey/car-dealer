import React from 'react'

function Login() {
    return (
        <>
            <div class="login-form-container">
                <span id="close-login-form" class="fas fa-times"></span>
                <form action="">
                    <h3>user login</h3>
                    <input type="email" placeholder="email" class="box" />
                    <input type="password" placeholder="password" class="box" />
                    <p> forget your password <a href="#">click here</a> </p>
                    <input type="submit" value="login" class="btn" />
                    <p>or login with</p>
                    <div class="buttons">
                        <a href="#" class="btn"> google </a>
                        <a href="#" class="btn"> facebook </a>
                    </div>
                    <p> don't have an account <a href="#">create one</a> </p>

                </form>

            </div>

        </>
    )
}

export default Login