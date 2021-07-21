import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return(
      <header className="header">
        <nav className="navigation">
          <Link to="/"><span>Home</span></Link>
          <Link to="/about"><span>Sobre</span></Link>
          <Link to="/projects"><span>Projetos</span></Link>
          <Link to="/contact"><span>Contatos</span></Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;