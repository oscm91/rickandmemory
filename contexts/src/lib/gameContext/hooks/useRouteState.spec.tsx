import { test } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';
import { MemoryRouter } from 'react-router-dom';
import { useRouteState } from './useRouteState';

test('useRouteState: should return the initial state', () => {
  const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  const { result } = renderHook(() => useRouteState(), { wrapper });
  expect(result.current.page).toEqual('HOME');
});

test('useRouteState: should handle goToHome', () => {
  const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  const { result } = renderHook(() => useRouteState(), { wrapper });

  act(() => {
    result.current.goToHome();
  });

  expect(result.current.page).toBe('HOME');
});

test('useRouteState: should handle goToPlay', () => {
  const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  const { result } = renderHook(() => useRouteState(), { wrapper });

  act(() => {
    result.current.goToPlay();
  });

  expect(result.current.page).toBe('PLAY');
});

test('useRouteState: should handle goToResult', () => {
  const wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;
  const { result } = renderHook(() => useRouteState(), { wrapper });

  act(() => {
    result.current.goToResult();
  });

  expect(result.current.page).toBe('RESULT');
});
