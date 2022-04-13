import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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
import Login from './components/LoginForm'
import Membership from './components/Membership';
import Signup from './components/SignupForm'

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (

    <ApolloProvider client={client}>
     
      <Router>
        
        <Navbar />
    
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/homepage" component={Home}/> 
        <Route exact path="/trainers" component={Trainers}/>
        <Route exact path="/reviews" component={Reviews}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/trainer1" component={Trainer1}/>
        <Route exact path="/runner1" component={Runner1}/>
        <Route exact path="/nutrition1" component={Nutrition1}/>
        <Route exact path="/manager1" component={Manager1}/>
        <Route exact path="/home" component={Login}/>
        <Route exact path="/membership/:username?" component={Membership}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        </Switch>
        
       
    </Router>
   
    
    </ApolloProvider>
  );
}

export default App;