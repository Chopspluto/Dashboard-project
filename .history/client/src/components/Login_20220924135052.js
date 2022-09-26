import React, { Fragment } from 'react'

function Login({setAuth}) {
    return (
        <>
            <div className='container'>
                <form>
                    <h1>Login</h1>
                    <input type='text' placeholder='Enter email' />
                    <input type='text' placeholder='Enter password' />
                    <button onClick={}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login