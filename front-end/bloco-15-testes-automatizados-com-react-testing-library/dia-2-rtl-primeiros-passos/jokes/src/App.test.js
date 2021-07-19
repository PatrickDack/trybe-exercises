// App.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  render(<App />);
});

it('alterando o valor dos campos e testando o valor guardado', () => {
  const inputNome = screen.getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  userEvent.type(inputNome, 'Estudante da Trybe');
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = screen.getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'patrickdack89@gmail.com');
  expect(inputEmail).toHaveValue('patrickdack89@gmail.com');
});