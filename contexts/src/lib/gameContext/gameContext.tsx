// Importing necessary hooks and functions from React
import { createContext } from 'react';
import { useGameState, GameState } from './hooks/useGameState';

// Creating a context for the game logic
export const PlayerStateContext = createContext<GameState | null>(null);

// Defining the props for the PlayerStateProvider component
interface PlayerStateProviderProps {
  children: React.ReactNode;
}

// Defining the PlayerStateProvider component
export function PlayerStateProvider(props: PlayerStateProviderProps) {
  // Using the useGameState hook to get the game logic
  const gameState = useGameState();

  // Returning a context provider with the game logic as the value
  return (
    <PlayerStateContext.Provider value={gameState}>
      {props.children}
    </PlayerStateContext.Provider>
  );
}

export default PlayerStateProvider;
