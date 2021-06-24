import React from 'react';
import Pokedex from './components/pokedex';
import Title from './components/Title';
import data from './components/data'
import './index.css';
import './App.css';

class App extends React.Component{
  render () {
    return (
      <main>
        <header><Title /></header>
        <Pokedex poke={data}/>
      </main>
    );
  }
}

export default App;
