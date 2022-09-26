import React, { Fragment, useState } from 'react'

function Register() {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value});
}

    const { name, email, password } = inputs;
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Register</h1>
                    <input type='text' name='name' placeholder='Enter your name' value={name} onChange={e => onChange()} />
                    <input type='email' name='email' placeholder='Enter your email' value={email} onChange={e => onChange()} />
                    <input type='password' name='password' placeholder='Enter your password' value={password} onChange={e => onChange()} />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register