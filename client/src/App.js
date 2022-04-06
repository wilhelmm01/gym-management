import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Signup from './pages/Signup';
import Trainers from './pages/Trainers';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/reviews" component={Reviews}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/trainers" component={Trainers}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
