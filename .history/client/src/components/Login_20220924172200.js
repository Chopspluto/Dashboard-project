import React, { Fragment } from 'react'

function Login({ setAuth }) {
    return (
        <>
            <div className='contamain_containeriner'>
                <form>
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