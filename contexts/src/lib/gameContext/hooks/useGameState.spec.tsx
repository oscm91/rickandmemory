import { test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useGameState } from './useGameState';

test('useGameState: should return the initial state', () => {
  const { result } = renderHook(() => useGameState());
  expect(result.current.grid).toEqual({});
  expect(result.current.gridKeys).toEqual([]);
  expect(result.current.selection).toEqual([]);
  expect(result.current.playerState).toEqual({
    matches: 0,
    mistakes: 0,
    suffle: false,
    completed: false,
  });
});

test('useGameState: should handle restart game', () => {
  const { result } = renderHook(() => useGameState());

  act(() => {
    result.current.handleRestart();
  });

  expect(result.current.grid).toEqual({});
  expect(result.current.gridKeys).toEqual([]);
  expect(result.current.selection).toEqual([]);
  expect(result.current.playerState).toEqual({
    matches: 0,
    mistakes: 0,
    suffle: false,
    completed: false,
  });
});
