import React, { useEffect, useState } from 'react'
import Graph from '../components/Graph'
import { useAuth } from '../context/auth';
import axios from 'axios';
import styles from './Dashboard.module.css'
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const [bpData, setBPData] = useState([]);
    const [sbp, setSBp] = useState('');
    const [dbp, setDBp] = useState('');

    const [spO2Data, setSPO2Data] = useState([]);
    const [spO2, setSPO2] = useState('');

    const [pulseData, setPulseData] = useState([]);
    const [pulse, setPulse] = useState('');

    const [bsData, setBsData] = useState([]);
    const [pp, setPp] = useState('');
    const [fasting, setFasting] = useState('');

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

    const getAllBSData = async () => {
      try {
          const { data } = await axios.get(`http://172.18.2.48:8080/bs/get-bs-data`);
          setBsData(data.bsData);
          console.log(data.bsData)
      } catch(error) {
          console.log(error);
      }
    };
    
    useEffect(async () => {
        await getAllBPData();
        await getAllBSData();
    }, []);    
    
    const handleClickBP = async () => {
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

    const handleClickSPO2 = async () => {
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

    const handleClickPulseRate = async () => {
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
   
  const handleClickBloodSugar = async () => {
    try {
        console.log(auth.user)
        const res = await axios.post(`http://172.18.2.48:8080/bs/add-bs-data`, {
            pp: pp,
            fasting: fasting
        })

        
        if (res && res.data.success) {
            getAllBSData();
        } else {
        }
    } catch (error) {
        console.log(error);
    }
  }

  
  return (
    <>

      <Navbar />
    <div className={styles['container']}>
        <Graph data={bpData} n={2} height={"400px"} width={"400px"} title={"BLOOD PRESSURE"} onSubmit={handleClickBP} >
          <input type='text' width={"120px"} className={styles['form-field']} placeholder='systolic' value={sbp} onChange={(e) => setSBp(e.target.value)} />
          <input type='text' width={"120px"} className={styles['form-field']} placeholder='diastolic' value={dbp} onChange={(e) => setDBp(e.target.value)} />
        </Graph>

        <Graph data={bsData} n={2} height={"400px"} width={"400px"} title={"BLOOD SUGAR"} onSubmit={handleClickBloodSugar} >
          <input type='text' width={"120px"} className={styles['form-field']} placeholder='pp' value={pp} onChange={(e) => setPp(e.target.value)} />
          <input type='text' width={"120px"} className={styles['form-field']} placeholder='fasting' value={fasting} onChange={(e) => setFasting(e.target.value)} />
        </Graph>
    </div>
    </>

  )
}

export default Dashboard