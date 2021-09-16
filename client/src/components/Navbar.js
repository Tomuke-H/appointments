import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class Navbar extends React.Component {
    render(){
        // const { location } = props
        const { location } = this.props
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname === '/'} >
                    Home
                  </Menu.Item >
                </Link>
                <Link to='/doctors'>
                  <Menu.Item active={location.pathname === '/doctors'} >
                    Doctors
                 </Menu.Item >
                </Link>
                <Link to='/users'>
                  <Menu.Item active={location.pathname === '/users'} >
                    Patients
                 </Menu.Item >
                </Link>
            </Menu>
        )

    }
}

export default withRouter(Navbar)