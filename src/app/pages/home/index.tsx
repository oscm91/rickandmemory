// Importing necessary hooks and components from React and other modules
import { useContext } from 'react';
import { Header, Card, Page, Button, Grid } from '@rickandmemory/shared/ui';
import { PlayerStateContext } from '@rickandmemory/contexts';
import { useRouteState } from '@rickandmemory/contexts';
import { GameLogic } from '@rickandmemory/contexts';

// Defining the Home component
function Home() {
  // Using the useContext hook to get the game logic from the PlayerStateContext
  const { grid, gridKeys } = useContext(PlayerStateContext) as GameLogic;
  // Using the useRouteState hook to get the navigation functions
  const { goToPlay } = useRouteState();

  return (
    <>
      <Header></Header>
      <Page>
        <header>
          <h2>Personajes</h2>
        </header>
        <main>
          <Grid>
            {gridKeys.map((id, i) => {
              const { image, value, gender, name, species, status } = grid[id];
              
              // For each grid key, rendering a Card component with the corresponding data
              return <Card
                key={`card-${i}`}
                image={image}
                selected={true}
                id={id}
                index={i}
                disabled={false}
                value={value}
                gender={gender}
                name={name}
                species={species}
                status={status}
              ></Card>
            })}
          </Grid>
        </main>
        <footer>
          <Button variant={'primary'} onClick={() => {
            // When the button is clicked, navigate to the play page and set up a new game
            goToPlay();
          }}>
            Jugar
          </Button>
        </footer>
      </Page>
    </>
  );
}

export default Home;
