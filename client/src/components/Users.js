import React, { useEffect, useState} from 'react'
import User from './User';
import axios from 'axios'
import { Container, Grid, Segment } from 'semantic-ui-react';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try {
            let res = await axios.get('/api/users')
            setUsers(res.data)
        }catch (err){
            console.log(err)
        }
    }

    const renderUsers = () => {
        return users.map(u => {
            return (
                <User key={u.id} user={u}/>
            )
        })
    }

    return (
        <Container>
            <h1>All Patients</h1>
            {renderUsers()}
        </Container>
    )
}

export default Users;