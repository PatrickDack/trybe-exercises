import React from 'react';
import FileInput from './fileInput';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      favoriteAnime: '',
      coments: '',
      isGoing: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <section>
        <h1>Formulário</h1>
        <form className="form">
          <fieldset>
            <legend>Informações Pessoais</legend>
            <label>
            Nome:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </label>
            <br />
            <label>
              E-mail:
              <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </label>
            <br />

            <label>
              Vai comparecer?
              <input type="checkbox" name="isGoing" value={this.state.willpresent} onChange={this.handleChange} />
            </label>
            <br />
          </fieldset>

          <fieldset>
            <legend>Preferêcias</legend>

            <label>
            Escolha seu anime favorito:
            <select name="favoriteAnime" value={this.state.favoriteAnime} onChange={this.handleChange}>
            <option value="naruto">Naruto</option>
            <option value="dragonball">Dragon Ball</option>
            <option value="onepiece">One Piece</option>
            <option value="beaststars">BeastStars</option>
            </select>
            </label>
            <br />

            <FileInput />

            <label>
              Deixe um Comentário:
              <textarea name="coments" value={this.state.coments} onChange={this.handleChange}></textarea>
            </label>

          </fieldset>
        </form>
      </section>
    );
  }
}

export default Form;
