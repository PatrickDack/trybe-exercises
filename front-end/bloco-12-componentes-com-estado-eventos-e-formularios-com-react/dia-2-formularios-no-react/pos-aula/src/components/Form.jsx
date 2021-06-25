import React from 'react';
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      houseType: '',
      reume: '',
      job: '',
      jobDescription: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
            <label>
              Nome:
              <Input
              nameInput='name'
              typeInput='text'
              valueInput={name}
              onChangeInput={this.handleChange}
              maxInput='40'
              />
            </label>

            <label>
              E-mail:
              <Input
              nameInput='email'
              typeInput='email'
              valueInput={email}
              onChangeInput={this.handleChange}
              maxInput='50'
              />
            </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
