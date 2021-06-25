import React from 'react';

class Input extends React.Component {
  render() {
    const { nameInput, typeInput, valueInput, onChangeInput, maxInput } = this.props;
    return (

      <input
        name={nameInput}
        type={typeInput}
        value={valueInput}
        onChange={onChangeInput}
        maxLength={maxInput}
        required
      />
    );
  }
}

export default Input;
