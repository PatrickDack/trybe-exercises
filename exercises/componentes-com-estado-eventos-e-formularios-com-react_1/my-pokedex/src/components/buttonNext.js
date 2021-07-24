import React from 'react';

class ButtonNext extends React.Component {
  render() {
    return <button className="next-btn" onClick={this.props.func} type={this.props.type}>{this.props.content}</button>
  }
}

export default ButtonNext;
