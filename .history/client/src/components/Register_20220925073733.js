import React, { Fragment, useState } from 'react'

function Register() {

    const[inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const {name, email, password} = inputs;
    return (
        <>
            <div className='main_container'>
                <form>
                    <h1>Register</h1>
                    <input type='text' name='name' placeholder='Enter your name' value={name} />
                    <input type='email' name='email' placeholder='Enter your email' />
                    <input type='password' name='password' placeholder='Enter your password' />
                    <button>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register