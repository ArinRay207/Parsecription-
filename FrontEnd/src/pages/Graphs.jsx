import React, { useEffect, useState } from 'react'
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, Area } from "recharts";
import styles from './Graphs.module.css'
import Button from '../components/Button';
import axios from 'axios';
import { useAuth } from '../context/auth'
import Graph from '../components/Graph';

const Graphs = ({title}) => {
    
    const [bpData, setBPData] = useState([]);
    const [sbp, setSBp] = useState('');
    const [dbp, setDBp] = useState('');
    const [auth, setAuth] = useAuth();

    const getAllBPData = async () => {
        try {
            const { data } = await axios.get(`http://172.18.2.48:8080/bp/get-bp-data`);
            setBPData(data.bpData);
            console.log(data.bpData)
        } catch(error) {
            console.log(error);
        }
    };
    
    useEffect(async () => {
        await getAllBPData();
    }, []);    
    
    const handleClick = async () => {
        try {
            console.log(auth.user)
            const res = await axios.post(`http://172.18.2.48:8080/bp/add-bp-data`, {
                systolic: sbp,
                diastolic: dbp
            })
    
            
            if (res && res.data.success) {
                getAllBPData();
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    return (
        <div className={styles['graph-container']}>
            <Graph data={bpData} n={2} height={"500px"} width={"800px"} title={"BLOOD PRESSURE"} onSubmit={handleClick} >
                <input type='text' className={styles['form-field']} placeholder='systolic' value={sbp} onChange={(e) => setSBp(e.target.value)} />
                <input type='text' className={styles['form-field']} placeholder='diastolic' value={dbp} onChange={(e) => setDBp(e.target.value)} />
            </Graph>
        </div>
    );
}

export default Graphs