import React, { useState } from 'react'
import './Form.css'
import Button from './Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('Gender');
    const navigate = useNavigate(); 
    // const handleClick = async (e) => {
    //     console.log(name)
    //     console.log(age)
    //     console.log(gender)
    //     console.log(email)
    //     console.log(phone)
    //     console.log(password)

        
    // }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://172.18.2.48:8080/auth/signup`, {
                name, email, phone, gender, age, password
            })

            if (res.data.success) {
                // toast.success(res.data.message);
                navigate("/login");
            } else {
                // toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            // toast.error("Something went wrong");
        } 
    }

  return (
    <div className='form'>
        <h2 className='title'>SIGNUP</h2>
        <div className='form-field-container'>
            <input height='1rem' placeholder={'Name'} className='form-name form-field' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <div className='form-row'>
                <input height='1rem' placeholder={'Age'} className='form-age form-field' type='number' value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
                <select name="gender" className='form-field form-gender' value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                    <option disabled hidden value="Gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <input height='1rem' placeholder={'Email'} className='form-field' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input height='1rem' placeholder={'Phone'} className='form-field' type='text' value={phone} onChange={(e)=>{setPhone(e.target.value)}}></input>
            <input height='1rem' placeholder={'Password'} className='form-field' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>

        <Button height={"7vh"} color={"#0F5C7D"} width={"10vw"} textColor={"white"} onClick={handleClick}> SIGNUP </Button>
    </div>
  )
}

export default SignupForm