import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Trip from './components/trip.component';

function App() {
  return (

    <Router>
    <div className="container">
      <Route path="/" component={Trip} />
    </div>
  </Router>
  );
}

export default App;
