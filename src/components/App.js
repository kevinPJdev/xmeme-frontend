import React, { Component } from 'react';

import DisplayBoard from './DisplayBoard.js';
import Navbar from './Navbar.js';
import '../css/app.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <DisplayBoard />
      </div>
    )
  }
}

export default App
