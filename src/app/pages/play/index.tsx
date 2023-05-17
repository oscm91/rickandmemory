// Importing necessary hooks and components from React and other modules
import { Header, Card, Page, Grid } from '@rickandmemory/shared/ui';
import { useContext, useEffect } from 'react';
import { PlayerStateContext } from '@rickandmemory/contexts';
import { useRouteState } from '@rickandmemory/contexts';
import { GameLogic } from '@rickandmemory/contexts';

// Defining the Play component
function Play() {
  // Using the useContext hook to get the game logic from the PlayerStateContext
  const { grid, gridKeys, playerState, handleClick, handleStart } = useContext(
    PlayerStateContext
  ) as GameLogic;
  // Using the useRouteState hook to get the navigation functions
  const { goToResult } = useRouteState();

  // Effect to shuffle grid keys
  useEffect(() => {
    if (!playerState.suffle) {
      handleStart();
    }
  }, [handleStart, playerState.suffle]);

  // Effect to set grid values
  useEffect(() => {
    if (playerState.completed) {
      goToResult();
    }
  }, [goToResult, playerState.completed]);

  // Calculating the number of turns
  const turns = playerState.matches + playerState.mistakes;

  return (
    <>
      <Header />
      <Page>
        <header>
          <h2>Aciertos: {playerState.matches}</h2>
          <h2>Turnos: {turns}</h2>
        </header>
        <main>
          <Grid>
            {gridKeys.map((id, i) => {
              const {
                image,
                value,
                disabled,
                selected,
                gender,
                name,
                species,
                status,
              } = grid[id];

              // For each grid key, rendering a Card component with the corresponding data
              return (
                <Card
                  onClick={handleClick}
                  key={`card-${i}`}
                  image={image}
                  selected={selected}
                  id={id}
                  index={0}
                  disabled={disabled}
                  value={value}
                  gender={gender}
                  name={name}
                  species={species}
                  status={status}
                />
              );
            })}
          </Grid>
        </main>
      </Page>
    </>
  );
}

export default Play;
