import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index.jsx';
import { expect } from 'vitest';

describe('IndexPage', () => {
  it('renders page', () => {
    render(
      <IndexPage />
    );

    expect(screen.getByRole('heading').textContent).toBe('Welcome to Gasket!');
  });
});

