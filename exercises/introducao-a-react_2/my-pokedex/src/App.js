import React from 'react';
import Pokemon from './components/pokemon';
import Title from './components/Title';
import data from './components/data'
import './index.css';
import './App.css';

class App extends React.Component{
  render () {
    return (
      <main>
        <header><Title /></header>
        <section className="container">
        {
          data.map(poke => <Pokemon key={poke.id} poke={poke}/>)
        }
      </section>
      </main>
    );
  }
}

export default App;
