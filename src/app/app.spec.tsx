import { test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';
import { PlayerStateContext } from '@rickandmemory/contexts';

test('App: should render Home component for default route', () => {
  const mockContext = {
    grid: {},
    gridKeys: [],
    playerState: {
      matches: 0,
      mistakes: 0,
      suffle: false,
      completed: false,
    },
    handleClick: vi.fn(),
    handleStart: vi.fn(),
    handleRestart: vi.fn(),
    selection: [],
  };

  render(
    <MemoryRouter initialEntries={['/']}>
      <PlayerStateContext.Provider value={mockContext}>
        <App />
      </PlayerStateContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText('Personajes')).toBeTruthy();
  expect(screen.getByText('Jugar')).toBeTruthy();
});

test('App: should render Play component for /play route', () => {
  const mockContext = {
    grid: {},
    gridKeys: [],
    playerState: {
      matches: 0,
      mistakes: 0,
      suffle: false,
      completed: false,
    },
    handleClick: vi.fn(),
    handleStart: vi.fn(),
    handleRestart: vi.fn(),
    selection: [],
  };

  render(
    <MemoryRouter initialEntries={['/play']}>
      <PlayerStateContext.Provider value={mockContext}>
        <App />
      </PlayerStateContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText('Aciertos: 0')).toBeTruthy();
  expect(screen.getByText('Turnos: 0')).toBeTruthy();
});

test('App: should render Result component for /result route', () => {
  const mockContext = {
    grid: {},
    gridKeys: [],
    playerState: {
      matches: 0,
      mistakes: 0,
      suffle: false,
      completed: true,
    },
    handleClick: vi.fn(),
    handleStart: vi.fn(),
    handleRestart: vi.fn(),
    selection: [],
  };

  render(
    <MemoryRouter initialEntries={['/result']}>
      <PlayerStateContext.Provider value={mockContext}>
        <App />
      </PlayerStateContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText('¡Felicitaciones!')).toBeTruthy();
  expect(screen.getByText('Terminaste el juego con 0 turnos')).toBeTruthy();
  expect(screen.getByText('Repetir')).toBeTruthy();
  expect(screen.getByText('Inicio')).toBeTruthy();
});
