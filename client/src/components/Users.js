import React, { useEffect, useState} from 'react'
import User from './User';
import axios from 'axios'

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
        <div>
            <h1>All Users</h1>
            {renderUsers()}
        </div>
    )
}

export default Users;