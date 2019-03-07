import React, { Component } from 'react';
import ButtonAppBar from './components/menu/ButtonAppBar'
import PlusSign from './components/floatingActionButtons/PlusSign'
import Lista from './components/lista/Lista'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
        <Lista/>
        <PlusSign/>
      </div>
    );
  }
}

export default App;
