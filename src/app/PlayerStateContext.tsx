import { createContext } from 'react';
import { useGameLogic, GameLogic } from './useGameLogic';

export const PlayerStateContext = createContext<GameLogic | null>(null);

interface PlayerStateProviderProps {
  children: React.ReactNode;
}

function PlayerStateProvider(props: PlayerStateProviderProps) {
  const gameLogic = useGameLogic();

  return (
    <PlayerStateContext.Provider value={gameLogic}>
      {props.children}
    </PlayerStateContext.Provider>
  );
}

export default PlayerStateProvider;
