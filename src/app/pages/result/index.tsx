import { Header, Page, Button } from '@rickandmemory/shared/ui';
import useRouteState from '../../useRouteState';
import { useContext, useEffect } from 'react';
import { PlayerStateContext } from '../../PlayerStateContext';
import { GameLogic } from '../../useGameLogic';

function Result() {
  const { playerState, handleRestart } = useContext(PlayerStateContext) as GameLogic;
  const { goToPlay, goToHome } = useRouteState();

  // Effect to set grid values
  useEffect(() => {
    if(!playerState.completed) {
      goToPlay();
    }
    
  }, [goToPlay, playerState]);
  return (
    <>
      <Header></Header>
      <Page>
        <output>
          <h2>¡Felicitaciones!</h2>
          <p>Terminaste el juego con {playerState.matches + playerState.mistakes} turnos</p>
          <span>
            <Button variant={'primary'} onClick={handleRestart}>Repetir</Button> <Button variant={'primary'} onClick={() => {
              handleRestart();
              goToHome();
            }}>Inicio</Button>
          </span>
        </output>
      </Page>
    </>
  )
}
  
export default Result;