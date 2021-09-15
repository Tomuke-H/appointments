import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const Doctor = ({doctor}) => {
    return (
        <Card>
            <Card.Content>
                <p>{doctor.name}</p>
                <Link to={`/doctors/${doctor.id}/appointments`}>Appointments</Link>
            </Card.Content>
        </Card>
    )
}

export default Doctor;