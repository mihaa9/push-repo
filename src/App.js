import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Prva from './components/Prva.js';
import Druga from './components/Druga.js';
import Treca from './components/Treca.js';
import Cetvrta from './components/Cetvrta.js';
import Peta from './components/Peta.js';


function App() {
  return (
    <div className="App">
      <Header></Header>

        <Router>

          <Route exact path="/" component={Prva}></Route>
          <Route exact path="/Druga" component={Druga}></Route>
          <Route exact path="/Treca" component={Treca}></Route>
          <Route exact path="/Cetvrta" component={Cetvrta}></Route>
          <Route exact path="/Peta" component={Peta}></Route>

        </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
