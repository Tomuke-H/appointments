import axios from 'axios';
import React, { useEffect, useState} from 'react'
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        getDoctors();
    }, [])

    const getDoctors = async () => {
        try {
            let res = await axios.get('/api/doctors')
            setDoctors(res.data)
        }catch (err){
            console.log(err)
        }
    }

    const renderDoctors = () => {
        return doctors.map(d => {
            return (
                <Doctor key={d.id} doctor={d}/>
            )
        })
    }

    return (
        <div>
            <h1>All Doctors</h1>
            {renderDoctors()}
        </div>
    )
}

export default Doctors;