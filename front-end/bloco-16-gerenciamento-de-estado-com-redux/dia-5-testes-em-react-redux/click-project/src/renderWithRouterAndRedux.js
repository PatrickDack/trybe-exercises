
import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// renderWithRouterAndRedux(<App/> , config)
const renderWithRouterAndRedux = (component, {
  initialState = {},
  store = createStore(
    rootReducer,
    initialState,
  ),
  initialEntries = ['/'],
} = {}) => {
  const history = createMemoryHistory({ initialEntries });
  return {
    ...render(
      <Router history={ history }>
        <Provider store={ store }>
          {component}
        </Provider>
      </Router>,
    ),
    history,
    store,
  };
};

export default renderWithRouterAndRedux;
