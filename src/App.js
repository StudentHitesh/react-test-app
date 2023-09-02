import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import { Route, BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
