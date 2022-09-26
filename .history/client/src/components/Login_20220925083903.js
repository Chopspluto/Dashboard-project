import React, { Fragment, useState } from 'react'

function Login() {

    const[input, setInput] = useState();

    const {email, password} = input;

    const onChange = e => {
        try
    }
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Login</h1>
                    <input type='email' name='email' placeholder='Enter email' />
                    <input type='password' name='password' placeholder='Enter password' />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login