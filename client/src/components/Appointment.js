import React from 'react'
import { Card } from 'semantic-ui-react';

const Appointment = ({appointment}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Patient: {appointment.user.name}</Card.Header>
                <Card.Meta>{appointment.date}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default Appointment;