import React from 'react'
import User from '../components/User';
import { Container, Grid, Segment } from 'semantic-ui-react';
import useAxiosOnMount from '../hooks/useAxiosOnMount';
import LoadingGraphic from '../components/LoadingGraphic';
import ErrorMessage from '../components/ErrorMessage';

const Users = () => {
   const { data:users, error, loading} = useAxiosOnMount('/api/users')

    const renderUsers = () => {
        if(loading) return <LoadingGraphic />
        if(error) return <ErrorMessage header={"Loading Error"} error={error} />
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