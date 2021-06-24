import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render() {
    const { name, type, image, averageWeight } = this.props.poke;
    return(
      <div className="poke-container">
        <div className="poke-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage Weigth: {averageWeight.value}
          {averageWeight.measurementUnit}</p>
        </div>
        <div className="poke-image">
          <img src={image} alt={name}/>
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
