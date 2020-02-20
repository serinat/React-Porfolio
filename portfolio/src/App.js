// App.jsx

import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './pages/About.js/index.js';
import Portfolio from './pages/Portfolio.js/index.js';
import Contact from './pages/Contact.js/index.js';
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />

        <div className="navbar">
          <div className="navbar-sub">

            <Link to="/" className="item">About</Link>
            <Link to="/portfolio" className="item">Portfolio</Link>
            <Link to="/contact" className="item">Contact</Link>

          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
