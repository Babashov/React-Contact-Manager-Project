import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    const brandName = 'Babashov Company';
    return (
      <Provider>
      <div className="App">
        <Header 
        brandName = {brandName}
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
