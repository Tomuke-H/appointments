import React from 'react'
import { Container } from 'semantic-ui-react';
import Doctor from '../components/Doctor';
import ErrorMessage from '../components/ErrorMessage';
import LoadingGraphic from '../components/LoadingGraphic';
import useAxiosOnMount from '../hooks/useAxiosOnMount';

const Doctors = () => {
    const {data:doctors, loading, error} = useAxiosOnMount('/api/doctors')

    const renderDoctors = () => {
        if(loading) return <LoadingGraphic />
        if(error) return <ErrorMessage error={error} header={'Loading Error'} />
        return doctors.map(d => {
            return (
                <Doctor key={d.id} doctor={d}/>
            )
        })
    }

    return (
        <Container>
            <h1>All Doctors</h1>
            {renderDoctors()}
        </Container>
    )
}

export default Doctors;