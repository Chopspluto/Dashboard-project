import React, { Fragment } from 'react'

function Register() {
    return (
        <>
            <div className='container'>
                <form>
                    <h1>Register</h1>
                    <input type='text' placeholder='Enter your name' />
                    <input type='text' placeholder='Enter your email' />
                    <input type='text' placeholder='Enter your password' />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register