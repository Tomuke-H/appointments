import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Things from './components/Things';
import Doctors from './components/Doctors';
import Users from './components/Users';
import DoctorAppointments from './components/DoctorAppointments';
import UserAppointments from './components/UserAppointments';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/doctors' component={Doctors}/>
          <Route exact path='/doctors/:id/appointments' component={DoctorAppointments} />
          <Route exact path='/users' component={Users}/>
          <Route exact path='/users/:id/appointments' component={UserAppointments}/>
          <Route component={()=><p>react 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
