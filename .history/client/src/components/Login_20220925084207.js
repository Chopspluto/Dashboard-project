import React, { Fragment, useState } from 'react'

function Login() {

    const[input, setInput] = useState();

    const {email, password} = input;

    const onChange = e => {
        setInput({...input, [e.target.name] : e.target.value});
    }
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Login</h1>
                    <input type='email' name='email' placeholder='Enter email' value={email} onChange={e => onChange(e)} />
                    <input type='password' name='password' placeholder='Enter password' value={password}  onChange={e => onChange(e)} />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login