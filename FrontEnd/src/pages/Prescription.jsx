import React from 'react'
import styles from './Prescription.module.css'
import FileUpload from '../components/FileUpload'
import Navbar from '../components/Navbar'

const Prescription = () => {
  return (
    <>
        <Navbar />
        <div className={styles['pres']}>
            <FileUpload />
        </div>
    </>
  )
}

export default Prescription