import React from 'react';
import Input from './Input';
import states from '../states';

class Form extends React.Component {
  constructor(props) {
    super(props);

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
    console.log(target);
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email, cpf, adress, city, houseType } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
            <label>
              Nome:
              <Input
              nameInput='name'
              typeInput='text'
              valueInput={name.toUpperCase()}
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
            <label>
              CPF:
              <Input
              nameInput='cpf'
              typeInput='text'
              valueInput={cpf}
              onChangeInput={this.handleChange}
              maxInput='11'
              />
            </label>
            <label>
              Endereço:
              <Input
              nameInput='adress'
              typeInput='text'
              valueInput={adress.replace(/\W|_/g, ' ')}
              onChangeInput={this.handleChange}
              maxInput='200'
              />
            </label>
            <label>
              Cidade:
              <Input
              nameInput='city'
              typeInput='text'
              valueInput={city}
              onChangeInput={this.handleChange}
              maxInput='28'
              />
            </label>
            <label>
              <select>
                {
                  states.map((st) =>
                    <option key={st.sigla}>{st.nome}</option>
                  )
                }
              </select>
            </label>
            <label>
              Moradia:
              <Input
              nameInput="houseType"
              typeInput="radio"
              valueInput='Casa'
              onChangeInput={this.handleChange}
              />Casa
              <Input
              nameInput="houseType"
              typeInput="radio"
              valueInput="Apartamento"
              onChangeInput={this.handleChange}
              />Apartamento
            </label>
        </fieldset>
      </form>
    );
  }
}

export default Form;
