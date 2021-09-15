import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Things from './components/Things';
import Doctors from './components/Doctors';
import Users from './components/Users';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/doctors' component={Doctors}/>
          <Route exact path='/users' component={Users}/>
          <Route component={()=><p>react 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
