import React from 'react'
import { Card } from 'semantic-ui-react';

const Appointment = ({appointment}) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{appointment.date}</Card.Header>
            </Card.Content>
            <Card.Content>
                <Card.Meta>Patient: {appointment.user.name}</Card.Meta>
                <Card.Meta>Doctor: {appointment.doctor.name}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default Appointment;