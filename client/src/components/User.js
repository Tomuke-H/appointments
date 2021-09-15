import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const User = ({user}) => {
    return (
        <Card>
            <Card.Content>
                <p>{user.name}</p>
                <Link to={`/users/${user.id}/appointments`}>Appointments</Link>
            </Card.Content>
        </Card>
    )
};  

export default User;