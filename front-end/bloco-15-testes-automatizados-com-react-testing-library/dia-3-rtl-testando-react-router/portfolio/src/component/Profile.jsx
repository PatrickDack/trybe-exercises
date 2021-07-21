import React from 'react';
import src from '../images/novoPerfil.jpeg';

class Profile extends React.Component {
  render() {
    return(
      <section className="profile">
        <img
        className="img-profile"
        src={ src } alt="Foto de Patrick Dack"
        />
        <article className="profile-info">
          <h1 className="title-profile">Patrick Dack</h1>
          <h3 className="subtitle-profile">Brasileiro: Teófilo Otoni - MG</h3>
          <p className="about-profile">
            Posso listar Ensinar e Aprender como minhas principais Soft Skills. Desde muito cedo quando algo despertava o meu interesse eu procurava aprender sobre aquilo, aprendi a tocar varios instrumentos, uma Língua Estrangeira, Desenho e Ilustração, Designer Gráfico, na faculdade estudei e aprendi Matemática. No processo de aprender tantas coisas, aprendi a aprender, consigo reter informações com muita facilidade. Nessa caminhada de aprendizado, tive a oportunidade de ensinar vários desses conteúdos e receber feedbacks muito positivos dos meus alunos sobre como estavam realmente entedendo, ao ensinar busco explicar a mesma coisa de várias formas diferentes até que aquilo faça sentido, ou tento buscar analogias e exemplos de aplicação no mundo real.
          </p>
        </article>
      </section>
    );
  }
}

export default Profile;
