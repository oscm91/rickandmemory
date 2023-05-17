import { test } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import { PlayerStateContext, PlayerStateProvider } from './gameContext';
import { useContext } from 'react';

test('PlayerStateProvider: should render children', () => {
  render(
    <PlayerStateProvider>
      <div>Test child</div>
    </PlayerStateProvider>
  );

  expect(screen.getByText('Test child')).toBeTruthy();
});

test('PlayerStateProvider: should provide context', () => {
  const wrapper = ({ children }) => (
    <PlayerStateProvider>{children}</PlayerStateProvider>
  );
  const { result } = renderHook(() => useContext(PlayerStateContext), {
    wrapper,
  });

  expect(result.current).not.toBeNull();
  expect(result.current).toHaveProperty('grid');
  expect(result.current).toHaveProperty('gridKeys');
  expect(result.current).toHaveProperty('playerState');
  expect(result.current).toHaveProperty('playerDispatch');
  expect(result.current).toHaveProperty('handleClick');
  expect(result.current).toHaveProperty('handleStart');
  expect(result.current).toHaveProperty('handleRestart');
  expect(result.current).toHaveProperty('selection');
});
