import { Header, Card, Page, Grid } from '@rickandmemory/shared/ui';
import { useContext, useEffect } from 'react';
import { PlayerStateContext } from '@rickandmemory/contexts';
import { useRouteState } from '@rickandmemory/contexts';
import { GameLogic } from '@rickandmemory/contexts';

function Play() {
  const { grid, gridKeys, playerState, handleClick, handleStart } = useContext(PlayerStateContext) as GameLogic;
  const { goToResult } = useRouteState();
  
  console.log(gridKeys, playerState.suffle)

  // Effect to suffle grid keys
  useEffect(() => {
    if(!playerState.suffle) {
      handleStart();
    }
  }, [handleStart, playerState.suffle]);

  // Effect to set grid values
  useEffect(() => {
    if(playerState.completed) {
      goToResult();
    }
    
  }, [goToResult, playerState]);

  return (
    <>
      <Header></Header>
      <Page>
        <header><h2>Aciertos: {playerState.matches}</h2><h2>Turnos: {playerState.matches + playerState.mistakes}</h2></header>
        <main>
        <Grid>
            {gridKeys.map((id, i) => {
              const { image, value, disabled, selected } = grid[id];
              
              return <Card
                onClick={handleClick}
                key={`card-${i}`}
                image={image}
                selected={selected}
                id={id}
                index={0}
                disabled={disabled}
                value={value}
              ></Card>
            })}
          </Grid>
        </main>
      </Page>
    </>
  );
  }
  
export default Play;