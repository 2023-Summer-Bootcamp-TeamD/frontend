import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './index';
import { describe } from 'node:test';
import { MemoryRouter } from 'react-router-dom';

describe('<Main />', () => {
  it('Main Page render', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
  });
});
