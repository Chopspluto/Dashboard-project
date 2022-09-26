import React, { Fragment } from 'react'

function Login() {

    const[input, setInput] = useSta
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