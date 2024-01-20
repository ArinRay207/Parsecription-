import React from 'react';
import { IoIosAdd } from "react-icons/io";
import styles from './AddButton.module.css'

const AddButton = ({classname, bgColor, handleClick, color, size}) => {
    const style = {
        backgroundColor: bgColor,
        color: color,
        border: "solid",
        borderWidth: "1%",
        borderColor: "#091334",
        height: size,
        width: size
    }    
  return (
    <div className={`${styles['add-btn']} ${classname}`} style={style} onClick={handleClick} >
        <IoIosAdd className={`${styles['add-sign']} ${classname}`} />
    </div>
  )
}

export default AddButton