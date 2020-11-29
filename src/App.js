import React from 'react'
import './App.css';

// importing bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

//import switch and route for use from react dom
import { Switch, Route, Redirect } from 'react-router-dom';

//importing all NavBar components
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

//import Navbar 
import Navbar from './Navbar';

// import footer for copyright
import Footer from './Footer';

function App() {
  return (
    <div className="header_container">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      <Footer />    
    </div>
  );
}

export default App;
