import { test } from 'vitest';
import {
  PlayerReducer,
  PlayerStateTypes,
  initialPlayerState,
} from './gameReducer';

test('PlayerReducer: should handle suffle action', () => {
  const state = PlayerReducer(initialPlayerState, {
    type: PlayerStateTypes.suffle,
  });
  expect(state.suffle).toBe(true);
});

test('PlayerReducer: should handle matches action', () => {
  const state = PlayerReducer(initialPlayerState, {
    type: PlayerStateTypes.matches,
  });
  expect(state.matches).toBe(1);
});

test('PlayerReducer: should handle mistakes action', () => {
  const state = PlayerReducer(initialPlayerState, {
    type: PlayerStateTypes.mistakes,
  });
  expect(state.mistakes).toBe(1);
});

test('PlayerReducer: should handle completed action', () => {
  const state = PlayerReducer(initialPlayerState, {
    type: PlayerStateTypes.completed,
    completedPayload: true,
  });
  expect(state.completed).toBe(true);
});

test('PlayerReducer: should handle resetGame action', () => {
  const state = PlayerReducer(initialPlayerState, {
    type: PlayerStateTypes.resetGame,
  });
  expect(state).toEqual(initialPlayerState);
});

test('PlayerReducer: should handle default case', () => {
  const state = PlayerReducer(initialPlayerState, {
    type: 'UNKNOWN_ACTION' as PlayerStateTypes,
  });
  expect(state).toEqual(initialPlayerState);
});
