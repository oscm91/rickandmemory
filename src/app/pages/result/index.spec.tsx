import { test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayerStateContext } from '@rickandmemory/contexts';
import Result from './index';
import { MemoryRouter } from 'react-router-dom';

test('Result: should render correctly', () => {
  const mockContext = {
    playerState: {
      matches: 0,
      mistakes: 0,
      suffle: false,
      completed: true,
    },
    handleRestart: vi.fn(),
  };
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

  render(
    <Wrapper>
      <PlayerStateContext.Provider value={mockContext}>
        <Result />
      </PlayerStateContext.Provider>
    </Wrapper>
  );

  expect(screen.getByText('¡Felicitaciones!')).toBeTruthy();
  expect(screen.getByText('Terminaste el juego con 0 turnos')).toBeTruthy();
  expect(screen.getByText('Repetir')).toBeTruthy();
  expect(screen.getByText('Inicio')).toBeTruthy();
});

test('Result: should handle click events', () => {
  const mockHandleRestart = vi.fn();
  const mockContext = {
    playerState: {
      matches: 0,
      mistakes: 0,
      suffle: false,
      completed: true,
    },
    handleRestart: mockHandleRestart,
  };
  const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

  render(
    <Wrapper>
      <PlayerStateContext.Provider value={mockContext}>
        <Result />
      </PlayerStateContext.Provider>
    </Wrapper>
  );

  fireEvent.click(screen.getByText('Repetir'));
  fireEvent.click(screen.getByText('Inicio'));

  expect(mockHandleRestart).toHaveBeenCalledTimes(2);
});
