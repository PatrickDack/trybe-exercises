import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const { poke } = this.props;
    return (
      <section className="container">
        {
          <Pokemon poke={poke}/>
        }
      </section>
    )
  }
}
// poke.map((poke) => <Pokemon key={poke.id} poke={poke}/>)
export default Pokedex;
