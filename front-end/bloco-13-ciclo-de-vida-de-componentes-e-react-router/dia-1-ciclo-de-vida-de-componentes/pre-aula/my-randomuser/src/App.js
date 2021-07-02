import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.mountAplication = this.mountAplication.bind(this);

    this.state = {
      api: '',
      loading: true,
    }
  }

  async fetchUser() {
    this.setState(
      { loading: true },
      async () => {
      const requestReturn = await fetch('https://api.randomuser.me/');
      const response = await requestReturn.json();
      this.setState({
        loading: false,
        api: response.results[0],
      });
    });
  }

  mountAplication() {
    const { picture, email, dob: { age }, name } = this.state.api;
    return (
      <div>
        <h1>Random User</h1>
        <div>
          <img src={ picture.large } />
          <p>Nome: { name.first } { name.last }</p>
          <p>E-mail: { email }</p>
          <p>Idade: { age }</p>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const loadindElement = <span>Loading...</span>
    const { loading } = this.state;
    return (
      <div>
        <p>
          {
            loading ? loadindElement : this.mountAplication()
          }
        </p>
      </div>
    )
  }
}

export default App;
