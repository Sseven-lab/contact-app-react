import React from "react";
import logo from './logo.svg';
import './App.css';
import "./components/Contact.js";
import Contact from "./components/Contact.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Contact />
        </p>
      </header>

    </div>
  );
}

export default App;
