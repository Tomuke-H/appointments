import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Appointment from './Appointment';

const Appointments = (props) => {

    const [appointments, setAppointments] = useState([])
    const [doctor, setDoctor] = useState('')

    useEffect(()=>{
        getAppointments();
        getDoctor();
    }, [])

    const getDoctor = async () => {
        try {
            let res= await axios.get(`/api/doctors/${props.match.params.id}`)
            setDoctor(res.data)
        }catch (err){
            console.log(err)
        }
    }

    const getAppointments = async () => {
        try{
            let res = await axios.get('/api/appointments')
            let filteredApps = res.data.filter(a => a.doctor.id == props.match.params.id)
            setAppointments(filteredApps)
        }catch (err){
            console.log(err)
        }
    }

    const renderApps = () => {
        return appointments.map(a => {
            return (
                    <Appointment key={a.id} appointment={a} />
            )
        })
    }

    return (
        <div>
            <h1>Doctor {doctor.name}'s Appointments</h1>
            {renderApps()}
        </div>
    )
}

export default Appointments;