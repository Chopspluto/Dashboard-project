import React, { Fragment } from 'react'

function Register() {
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Register</h1>
                    <input type='text' name='name' placeholder='Enter your name' />
                    <input type='email' name='email' placeholder='Enter your email' />
                    <input type='password' name='password' placeholder='Enter your password' />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register