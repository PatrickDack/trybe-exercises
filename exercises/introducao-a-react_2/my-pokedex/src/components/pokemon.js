import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render() {
    const poke = this.props.poke;
    const { averageWeight } = poke;
    return(
      <div className="poke-container">
        <div className="poke-info">
          <p>{poke.name}</p>
          <p>{poke.type}</p>
          <p>Avarage Weigth: {averageWeight.value}
          {averageWeight.measurementUnit}</p>
        </div>
        <div className="poke-image">
          <img src={poke.image} alt={poke.name}/>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.object,
  })
}

export default Pokemon;
