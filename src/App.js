import React, { Component } from 'react';

import './App.css';

import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import Nav from "./nav/nav"

class App extends Component {
  

  
    render() {

      return (
            <BrowserRouter>
                <div className="App">
                  <Nav />
                </div>
            </BrowserRouter>

      );

    
    }
    
    



}

export default App;
