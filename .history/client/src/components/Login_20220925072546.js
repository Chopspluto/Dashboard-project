import React, { Fragment } from 'react'

function Login() {
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Login</h1>
                    <input type='email' placeholder='Enter email' />
                    <input type='password' placeholder='Enter password' />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login