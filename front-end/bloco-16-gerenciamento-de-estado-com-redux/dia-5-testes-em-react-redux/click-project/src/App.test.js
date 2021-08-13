import React from 'react'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';

describe('testing clicks', () => {
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRouterAndRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRouterAndRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks nature', () => {
    const { queryByText } = renderWithRouterAndRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
