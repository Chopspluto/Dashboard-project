import React, { Fragment } from 'react'

function Login() {
    return (
        <>
            <div className='container'>
                <form className='border-double'>
                    <h1>Login</h1>
                    <input type='text' placeholder='Enter email' />
                    <input type='text' placeholder='Enter password' />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login