import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react'
import Button from './Button'
import './Form.css'
// import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [auth, setAuth] = useAuth();

    const handleClick = async (e) => {
        console.log(name)
        console.log(email)
        console.log(password)
        e.preventDefault();
        try {
            const res = await axios.post(`http://172.18.2.48:8080/auth/login`, {
                email, password
            })
            if (res && res.data.success) {
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate("/");
            } else {
            }
        } catch (error) {
            console.log(error);
        } 
    }

  return (
    <div className='form'>
        <h2 className='title'>LOGIN</h2>
        <div className='form-field-container'>
            <input height='1rem' placeholder={'Name'} className='form-name form-field' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input height='1rem' placeholder={'Email'} className='form-field' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input height='1rem' placeholder={'Password'} className='form-field' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>

        {/* <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(jwtDecode(credentialResponse.credential))
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        useOneTap
        /> */}
        <Button height={"7vh"} color={"#0F5C7D"} width={"10vw"} textColor={"white"} onClick={handleClick}> LOGIN </Button>
    </div>
  )
}

export default LoginForm