import React from 'react';
import Pokedex from './components/pokedex';
import ButtonNext from './components/buttonNext';
import Title from './components/Title';
import data from './components/data'
import './index.css';
import './App.css';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentPokemon: 0,
      pokemonType: 'fire',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previous, _props) => ({
      currentPokemon: previous.currentPokemon + 1,
    }));
    if(this.state.currentPokemon === 8) {
      this.setState({ currentPokemon: 0 });
    }
  }

  changeType(e) {
    data.forEach((poke) => e.target.innerText === poke.type);
  }

  render () {
    return (
      <main>
        <header><Title /></header>
        <Pokedex poke={data[this.state.currentPokemon]}/>
        <div className="button-container">
          <ButtonNext type="button" content="Fire" func={this.changeType}/>
          <ButtonNext type="button" content="Psychic" func={() => console.log('xablau')}/>
        </div>
        <ButtonNext type="button" content="Próximo Pokemon" func={this.handleClick}/>
      </main>
    );
  }
}

export default App;
