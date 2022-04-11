import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './pages/Login';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
// import Signup from './pages/Signup';
import Trainers from './components/Trainers';
import Navbar from './components/Navbar';
import Home from "./components/HomePage";
import Trainer1 from './components/Trainer1';
import Runner1 from './components/Runner1';
import Nutrition1 from './components/Nutrition1';
import Manager1 from './components/Manager1';
import Login from './components/Home'
import Membership from './components/Membership';
function App() {
  return (
    <div>
  
   <Router>
   <Navbar />
   {/* <HomePage /> */}
   
        <Switch>
        <Route exact path="/homepage" component={Home}/> 
        <Route exact path="/trainers" component={Trainers}/>
        <Route exact path="/reviews" component={Reviews}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/trainer1" component={Trainer1}/>
        <Route exact path="/runner1" component={Runner1}/>
        <Route exact path="/nutrition1" component={Nutrition1}/>
        <Route exact path="/manager1" component={Manager1}/>
        <Route exact path="/home" component={Login}/>
        <Route exact path="/membership" component={Membership}/>

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
