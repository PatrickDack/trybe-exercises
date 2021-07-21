import React from 'react';
import { render, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa a navegação entre as rotas', () => {

  it('navega para pagina Sobre e volta para Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i});
    const aboutLink = screen.getByRole('link', { name: /sobre/i });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const showText = screen.getByRole('heading', { name: /Sobre/i});
    expect(showText).toBeInTheDocument();
    userEvent.click(homeLink);
    const { pathname: home } = history.location;
    expect(home).toBe('/');
  });

  it('navega para pagina Projetos e volta para Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i});
    const projectLink = screen.getByRole('link', { name: /projetos/i });
    expect(projectLink).toBeInTheDocument();
    userEvent.click(projectLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/projects');
    const showText = screen.getByRole('heading', { name: /projetos/i });
    expect(showText).toBeInTheDocument();
    userEvent.click(homeLink);
    const { pathname: home } = history.location;
    expect(home).toBe('/');
  });

  it('navega para pagina Contato e volta para Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i});
    const contactLink = screen.getByRole('link', { name: /contato/i });
    expect(contactLink).toBeInTheDocument();
    userEvent.click(contactLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/contact');
    const showText = screen.getByRole('heading', { name: /contato/i });
    expect(showText).toBeInTheDocument();
    userEvent.click(homeLink);
    const { pathname: home } = history.location;
    expect(home).toBe('/');
  });
});
