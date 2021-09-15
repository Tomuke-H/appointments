import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Appointment from './Appointment';

const DoctorAppointments = (props) => {

    const [appointments, setAppointments] = useState([])
    const [doctor, setDoctor] = useState('')

    useEffect(()=>{
        getDoctor();
        getAppointments();
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
            {appointments.length > 0 ? renderApps() : (<h1>{`${doctor.name} has no appointments`}</h1>)}
        </div>
    )
}

export default DoctorAppointments;