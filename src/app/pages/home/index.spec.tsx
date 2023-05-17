import { test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PlayerStateContext } from '@rickandmemory/contexts';
import Home from './index';
import { MemoryRouter } from 'react-router-dom';

test('Home: should render correctly', () => {
  const mockContext = {
    grid: {
      'grid-0': {
        image: 'url1',
        value: '1',
        gender: 'Male',
        name: 'Rick',
        species: 'Human',
        status: 'Alive',
        selected: true,
        disabled: false,
      },
    },
    gridKeys: ['grid-0'],
  };
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

  render(
    <Wrapper>
      <PlayerStateContext.Provider value={mockContext}>
        <Home />
      </PlayerStateContext.Provider>
    </Wrapper>
  );

  expect(screen.getByText('Personajes')).toBeTruthy();
  expect(screen.getByText('Jugar')).toBeTruthy();
});
