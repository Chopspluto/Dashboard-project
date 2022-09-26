import React, { Fragment } from 'react'

function Login({setAuth}) {
    return (
        <>
                <form>
                    <h1>Login</h1>
                    <input type='text' placeholder='Enter email' />
                    <input type='text' placeholder='Enter password' />
                    <button onClick={() => setAuth(true)}>Login</button>
                </form>
        </>
    )
}

export default Login