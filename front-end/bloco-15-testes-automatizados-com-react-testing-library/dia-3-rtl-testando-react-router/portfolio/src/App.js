import './App.css';
import { Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavBar from './component/NavBar';

class App extends React.Component {
  render() {
    return (
      <>
        <Route component={ NavBar } />
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/projects" component={ Projects } />
      </>
    );
  }
}

export default App;
