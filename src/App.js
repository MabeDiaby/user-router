// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Greet from './component/Greet';
import Users from './component/Users';
import NewUser from './component/NewUser';
import Nav from './component/Nav';
import { Route, Link } from 'react-router';
import { useState } from 'react';

function App() {
  const {greet, setGreet} = useState();

  return (
    <div className="App">
      {/* <h1>Ello</h1> */}
      {/* <Home /> */}
      <div>
      <Nav />
      </div>
      <Route 
      exact path="/" 
      component={Home} 
      />
      <Route 
      exact path="/Users" 
      component={Users} 
      />
      <Route 
      exact path="/users/new" 
      component={NewUser} 
      />
      <Route
      path="/greet/:param"
      render={(routerProps) => 
      <Greet match={routerProps.match}
      />}
      />
    </div>
  );
}

export default App;
