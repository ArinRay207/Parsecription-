import React, { useEffect, useState } from 'react'
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, Area } from "recharts";
import Button from './Button';
import axios from 'axios';
import { useAuth } from '../context/auth'
import styles from './Graph.module.css'
import AddButton from './AddButton';

const Graph = ({data, n, children, title, height, width, onSubmit}) => {
    const [isOpen, setIsOpen] = useState();

    const showForm = () => {
        if (isOpen) {
            onSubmit();
        }
        setIsOpen(isOpen => !isOpen);
    }

  return (
    <div className={styles['graph-page-container']} style={{height: height, width: width}}>
        <div className={styles['graph-container']}>
            <div className={styles['graph']}>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        // height={100}
                        // width={100}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="createdAt" />

                        <ul>
                            {Array.from(Array(n), (e, i) => {
                                return <YAxis dataKey={`val${i}`} type='number' domain={[0, 'dataMax + 10']} allowDataOverflow={true} />
                            })}
                        </ul>
                        
                        <Tooltip />
                        {/* <Legend /> */}

                        {Array.from(Array(n), (e, i) => {
                                return <Line 
                                    dataKey={`val${i}`}
                                    stroke={i ? "red" : "green"}
                                    strokeWidth={"2px"}
                                    activeDot={{ r: 8 }}
                                />
                        })}
                        
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
        <div className={`${styles['form-container']} ${isOpen ? `${styles['opened']}` : `${styles['closed']}`}`}>
            <div className={`${styles['form-field-container']} ${isOpen ? `${styles['opened']}` : `${styles['closed']}`}`}>
                {children}
            </div>
            {/* <input type='text' placeholder='systolic' />
            <input type='text' placeholder='diastolic' /> */}
            
            <div className={styles['title-container']}>
                <AddButton classname={`${styles.button} ${isOpen ? `${styles['opened']}` : `${styles['closed']}` }`} bgColor={'white'} color={'black'} handleClick={showForm} size={(Number(width.substring(0, width.length - 2)) * 0.1) + "px"} />
                <h1 className={`${styles['title']} ${isOpen ? `${styles['opened']}` : `${styles['closed']}`}`} style={{fontSize: (Number(width.substring(0, width.length - 2)) * 0.075) + "px"}}>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default Graph