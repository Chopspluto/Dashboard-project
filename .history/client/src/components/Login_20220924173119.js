import React, { Fragment } from 'react'

function Login({ setAuth }) {
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Login</h1>
                    <input type='emai' placeholder='Enter email' />
                    <input type='text' placeholder='Enter password' />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login