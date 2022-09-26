import React, { Fragment } from 'react'

function Login({setAuth}) {
    return (
        <>
            <h1>Login</h1>
            <button onClick={setAuth()}>Login</button>
        </>
    )
}

export default Login