import React, { Fragment, useState } from 'react'

function Register({setAuth}) {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { name, email, password } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = {name, email, password};

            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();
            
            localStorage.setItem("token", parseResponse.token);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className='main_container'>
                <form onSubmit={onSubmitForm}>
                    <h1>Register</h1>
                    <input type='text' name='name' placeholder='Enter your name' value={name} onChange={e => onChange(e)} />
                    <input type='email' name='email' placeholder='Enter your email' value={email} onChange={e => onChange(e)} />
                    <input type='password' name='password' placeholder='Enter your password' value={password} onChange={e => onChange(e)} />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register