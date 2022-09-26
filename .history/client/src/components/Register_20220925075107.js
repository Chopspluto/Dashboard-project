import React, { Fragment, useState } from 'react'

function Register() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { name, email, password } = inputs;

    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        try {
            
        } catch (err) {
            console.error
        }
    }

    return (
        <>
            <div className='main_container'>
                <form>
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