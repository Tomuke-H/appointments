import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Appointment from './Appointment';

const UserAppointments = (props) => {

    const [appointments, setAppointments] = useState([])
    const [user, setUser] = useState('')

    useEffect(()=>{
        getUser();
        getAppointments();
    }, [])

    const getUser = async () => {
        try {
            let res= await axios.get(`/api/users/${props.match.params.id}`)
            setUser(res.data)
        }catch (err){
            console.log(err)
        }
    }

    const getAppointments = async () => {
        try{
            let res = await axios.get('/api/appointments')
            let filteredApps = res.data.filter(a => a.user.id == props.match.params.id)
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
            <h1>Patient {user.name}'s Appointments</h1>
            {appointments.length > 0 ? renderApps() : (<h1>{`${user.name} has no appointments`}</h1>)}
        </div>
    )
}

export default UserAppointments;