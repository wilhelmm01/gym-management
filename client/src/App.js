import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './pages/Login';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
// import Signup from './pages/Signup';
 import Trainers from './components/Trainers';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
  
   <Router>
   <Navbar />
   
        <Switch>

        <Route exact path="/trainers" component={Trainers}/>
        <Route exact path="/reviews" component={Reviews}/>
        <Route exact path="/contact" component={Contact}/>
        </Switch>
        {/* <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/reviews" component={Reviews}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/trainers" component={Trainers}/>
        </Switch> */}
   
    </Router>
    </div>
  );
}

export default App;
