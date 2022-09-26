import React, { Fragment } from 'react'

function Login() {
    return (
        <>
            <div className='container'>
                <form>
                    <h1>Login</h1>
                    <input type='text' placeholder='Enter your name' />
                    <input type='text' placeholder='Enter your email' />
                    <input type='text' placeholder='Enter your password' />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Login