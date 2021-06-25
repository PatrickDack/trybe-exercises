import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      favoriteAnime: '',
      coments: '',
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
          <label>
            Nome:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>

          <label>
            E-mail:
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
          </label>

          <label>
            Escolha seu anime favorito:
            <select name="favoriteAnime" value={this.state.favoriteAnime} onChange={this.handleChange}>
            <option value="naruto">Naruto</option>
            <option value="dragonball">Dragon Ball</option>
            <option value="onepiece">One Piece</option>
            <option value="beaststars">BeastStars</option>
            </select>
          </label>

          <label>
            Deixe um Comentário:
            <textarea name="coments" value={this.state.coments} onChange={this.handleChange}></textarea>
          </label>

        </form>
      </section>
    );
  }
}

export default Form;
