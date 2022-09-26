import React, { Fragment, useState } from 'react'

function Login({setAuth}) {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const { email, password } = input;

    const onChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();

        try {
            const body = {email, password}

            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            
            localStorage.setItem("token", parseResponse.token);
            setAuth(true)

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