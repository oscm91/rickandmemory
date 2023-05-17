// Importing necessary hooks and components from React and other modules
import { Header, Page, Button } from '@rickandmemory/shared/ui';
import { useContext, useEffect } from 'react';
import { PlayerStateContext } from '@rickandmemory/contexts';
import { useRouteState } from '@rickandmemory/contexts';
import { GameState } from '@rickandmemory/contexts';

// Defining the Result component
function Result() {
  // Using the useContext hook to get the game logic from the PlayerStateContext
  const { playerState, handleRestart } = useContext(
    PlayerStateContext
  ) as GameState;
  // Using the useRouteState hook to get the navigation functions
  const { goToPlay, goToHome } = useRouteState();

  // Calculating the total number of turns
  const totalTurns = playerState.matches + playerState.mistakes;

  // Effect to set grid values
  useEffect(() => {
    if (!playerState.completed) {
      goToPlay();
    }
  }, [goToPlay, playerState.completed]);

  // Defining a function to reset the game and go to the play page
  const handleGameReplay = () => {
    handleRestart();
    goToPlay();
  };

  // Defining a function to reset the game and go to the home page
  const handleGameReset = () => {
    handleRestart();
    goToHome();
  };

  return (
    <>
      <Header />
      <Page>
        <output>
          <h2>¡Felicitaciones!</h2>
          <p>Terminaste el juego con {totalTurns} turnos</p>
          <span>
            <Button variant="primary" onClick={handleGameReplay}>
              Repetir
            </Button>
            <Button variant="secondary" onClick={handleGameReset}>
              Inicio
            </Button>
          </span>
        </output>
      </Page>
    </>
  );
}

export default Result;
