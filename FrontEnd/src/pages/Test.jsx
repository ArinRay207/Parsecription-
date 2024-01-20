import React from 'react'
import { useAuth } from '../context/auth'
import { GoogleLogin } from '@react-oauth/google';
import Navbar from '../components/Navbar';

const Test = () => {

    const [auth, setAuth] = useAuth();
  return (
    <>
      <Navbar />
      <h1>{JSON.stringify(auth, null, 4)}</h1>
      <GoogleLogin
          onSuccess={credentialResponse => {
              console.log(credentialResponse);
          }}
          onError={() => {
              console.log('Login Failed');
          }}
          useOneTap
          />
    </>
  )
}

export default Test