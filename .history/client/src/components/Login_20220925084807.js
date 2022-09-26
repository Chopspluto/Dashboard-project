import React, { Fragment, useState } from 'react'

function Login() {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const { email, password } = input;

    const onChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        try {
            const body = {email, password}
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <div className='main_container'>
                <form onSubmit={onSubmitForm}>
                    <h1>Login</h1>
                    <input type='email' name='email' placeholder='Enter email' value={email} onChange={e => onChange(e)} />
                    <input type='password' name='password' placeholder='Enter password' value={password} onChange={e => onChange(e)} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login