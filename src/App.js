import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './About'
import Home from './Home'
import Contact from './Contact'

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />

        </Switch>
    </Router>
  );
}

export default App;
