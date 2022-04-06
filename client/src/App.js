import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          {/* <Route exact path='/' component={SearchBooks} /> */}
          {/* <Route exact path='/saved' component={SavedBooks} /> */}
          <Route exact path="/login" component={Login}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/reviews" component={Reviews}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/trainers" component={Trainers}/>
          {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
