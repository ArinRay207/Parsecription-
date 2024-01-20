import React from 'react'
import "./Button.css"

const Button = ({onClick, color, height, width, textColor, children}) => {
    const style = {
        backgroundColor: color,
        color: textColor,
        height: height,
        width: width,
        borderRadius: height
    }

    return (
        <div className='btn' style={style} onClick={onClick}>{children}</div>
    )
}

export default Button