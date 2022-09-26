import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register({ setAuth }) {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });
    // 
    const { name, email, password } = inputs;
    // 
    const onChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    // 
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, email, password };

            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            if (parseResponse.token) {
                localStorage.setItem("token", parseResponse.token);
                setAuth(true);
                toast.success("Registered Success! 😄")
            }
            else{
                setAuth(false);
                toast.error(parseResponse + "😟")
            }


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
                    <button type='submit'>Register</button>
                </form>
                <Link className='py-8' to='/login'>Already have an account? <strong>Click here to Login</strong></Link>
            </div>
        </>
    )
}

export default Register