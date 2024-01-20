import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/doctor.json';
import styles from './Signup.module.css'
import Button from '../components/Button';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const Signup = ({type}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

  return (
    <div className={`${styles.signup} ${styles['page']}`}>
        <div className={`${styles.col} ${styles['left-column']}`}>
            <h1 className={`${styles.title}`}>PARSECRIPTION</h1>
            <div className={styles.animation}>
                <Lottie
                    height={"80vh"}
                    width={"38vw"}
                    options={defaultOptions}
                />
            </div>
        </div>
        <div className={`${styles.col} ${styles['right-column']}`}>
            {type === "signup" ? <SignupForm /> : <LoginForm />}
        </div>
    </div>
  )
}

export default Signup