import { createContext } from 'react';
import { useGameLogic, GameLogic } from './hooks/useGameState';

export const PlayerStateContext = createContext<GameLogic | null>(null);

interface PlayerStateProviderProps {
  children: React.ReactNode;
}

export function PlayerStateProvider(props: PlayerStateProviderProps) {
  const gameLogic = useGameLogic();

  return (
    <PlayerStateContext.Provider value={gameLogic}>
      {props.children}
    </PlayerStateContext.Provider>
  );
}

export default PlayerStateProvider;
