import { test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PlayerStateContext } from '@rickandmemory/contexts';
import Play from './index';
import { MemoryRouter } from 'react-router-dom';

test('Play: should render correctly', () => {
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
    playerState: {
      matches: 0,
      mistakes: 0,
      suffle: false,
      completed: false,
    },
    handleClick: vi.fn(),
    handleStart: vi.fn(),
  };
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

  render(
    <Wrapper>
      <PlayerStateContext.Provider value={mockContext}>
        <Play />
      </PlayerStateContext.Provider>
    </Wrapper>
  );

  expect(screen.getByText('Aciertos: 0')).toBeTruthy();
  expect(screen.getByText('Turnos: 0')).toBeTruthy();
});
