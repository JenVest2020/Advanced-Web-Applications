import React, { useState } from "react";
import axios from 'axios';

export default function Login(props) {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    // How can we log in? What do we need to do?
    const handleChanges = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log('handlechanges: login', login)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', login)
        .then(res => {
            console.log('from submit successful: res', res);
            localStorage.setItem('token', res.data.payload)
        })
    }

    return (
        <div>
            <h1>Welcome to the Safari App!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    label='username'
                    value={login.username}
                    onChange={handleChanges}
                    className='input' />

                <input
                    type='text'
                    name='password'
                    label='password'
                    value={login.password}
                    onChange={handleChanges}
                    className='input' />
                <button>Login</button>
            </form>
        </div>
    )
}