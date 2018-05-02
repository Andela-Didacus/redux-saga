import React, { Component } from 'react';
import { Provider } from "react-redux";
import logo from '../logo.svg';
import './App.css';

import Store from '../store'

import ReduxActions from "../ReduxActions";

class App extends Component {
  render() {
    return (
        <Provider store={ Store }>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-intro">
                <ReduxActions />
            </div>
          </div>
        </Provider>
    );
  }
}

export default App;
