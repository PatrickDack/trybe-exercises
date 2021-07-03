import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.mountAplication = this.mountAplication.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      user: undefined,
      users: [],
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
        user: response.results[0],
        nextUser: response.results[0],
      });
    });
  }

  handleClick() {
    this.setState(({ user, users }) => ({
      users: [...users, user]
    }))
    this.fetchUser();
  }

  mountAplication() {
    const { users } = this.state;
    return (
      <div className="users">
        {
          users.map(({ id, picture, name, gender, email, dob: { age} }) => <div key={ email }>
          <img src={ picture.large } alt={ id.value } />
          <p>{ name.first } { name.last }</p>
          <p>{ gender === 'male' ? 'Masculino' : 'Feminino' }</p>
          <p>{ email }</p>
          <p>{ age } Anos</p>
        </div>)
        }
      </div>
    )
  }

  componentDidMount() {
    this.fetchUser();
  }

  // shouldComponentUpdate(prevProps, prevState) {
  //   const maxAge = 50;
  //   return prevState.user && prevState.user.dob.age <= maxAge;
  // }

  render() {
    const loadindElement = <span>Loading...</span>
    const { loading } = this.state;
    return (
      <div>
        <h1>Random User</h1>
        {
          loading ? loadindElement : this.mountAplication()
        }
      <div>
        <button type="button" onClick={ this.handleClick }>Adicionar</button>
      </div>
      </div>
    )
  }
}

export default App;
