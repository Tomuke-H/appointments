import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Appointment from '../components/Appointment';
import LoadingGraphic from '../components/LoadingGraphic';
import useAxiosOnMount from '../hooks/useAxiosOnMount';

const UserAppointments = (props) => {

    const [appointments, setAppointments] = useState([])
    const [appointmentLoading, setAppointmentLoading] = useState(true)

    const {data:user, error, loading } = useAxiosOnMount(`/api/users/${props.match.params.id}`)
    useEffect(()=>{
        getAppointments();
    }, [])

    const getAppointments = async () => {
        try{
            let res = await axios.get('/api/appointments')
            let filteredApps = res.data.filter(a => a.user.id == props.match.params.id)
            setAppointments(filteredApps)
        }catch (err){
            console.log(err)
        } finally {
            setAppointmentLoading(false)
        }
    }


    const renderApps = () => {
        if(appointmentLoading) return <LoadingGraphic />
        if(appointments.length < 1) return <p>No Appointments</p>
        return appointments.map(a => {
            return (
                <Appointment key={a.id} appointment={a} />
            )
        })
    }

    return (
        <div>
            <h1>Patient {user.name}'s Appointments</h1>
            {renderApps()}
        </div>
    )
}

export default UserAppointments;