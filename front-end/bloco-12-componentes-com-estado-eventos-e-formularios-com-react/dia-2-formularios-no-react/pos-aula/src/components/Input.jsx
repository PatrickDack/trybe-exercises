import React from 'react';

class Input extends React.Component {
  render() {
    const { nameInput, typeInput, valueInput, onChangeInput, maxInput, checkedInput } = this.props;
    return (

      <input
        name={nameInput}
        type={typeInput}
        value={valueInput}
        onChange={onChangeInput}
        maxLength={maxInput}
        checked={checkedInput}
        required
      />
    );
  }
}

export default Input;
