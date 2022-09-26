import React, { Fragment } from 'react'

function Register() {
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Register</h1>
                    <input type='text' placeholder='Enter your name' />
                    <input type='email' placeholder='Enter your email' />
                    <input type='password' placeholder='Enter your password' />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register