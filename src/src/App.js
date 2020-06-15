import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Naslovna from './Components/Naslovna.js';
import Povijest from './Components/Povijest';
import Hiperveza from './Components/Hiperveza';
import Header from './Header';


function App() {
  return (
    <div>

      <Header></Header>

      <Router>
        <Route exact path = "/" component = {Naslovna}></Route>
        <Route path = "/Povijest" component = {Povijest}></Route>
        <Route path = "/Hiperveza" component = {Hiperveza}></Route>
      </Router>
      
    </div>
  );
}

export default App;
