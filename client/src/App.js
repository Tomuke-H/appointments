import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import DoctorAppointments from './pages/DoctorAppointments';
import UserAppointments from './pages/UserAppointments';
import Users from './pages/Users';

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
