import React from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import alert from './components/alert';
import {
 // BrowserRouter as Router,
  Switch,
  Route,
  Link
} //from "react-router-dom";





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    //</header>// </Route>
       //   <Route path="/">
         //   <Home />
         // </Route>
      //  </Switch>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with suhaib
          
        </a>
      </header>
    </div>
  );
}

export default App;
