import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    const name = 'Babashov';
    return (
      <Provider>
      <div className="App">
        <Header 
          brandname = {name}
          branding="Company" 
        />
        <div className="container">
        <Contacts />

        </div>
      </div>

      </Provider>
    );
  }
}

export default App;
