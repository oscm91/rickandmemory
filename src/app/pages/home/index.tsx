import { useContext } from 'react';
import { Header, Card, Page, Button, Grid } from '@rickandmemory/shared/ui';
import { PlayerStateContext } from '@rickandmemory/contexts';
import { useRouteState } from '@rickandmemory/contexts';
import { GameLogic } from '@rickandmemory/contexts';

function Home() {
  const { grid, gridKeys, setNewGame } = useContext(PlayerStateContext) as GameLogic;
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
              
              return <Card
                key={`card-${i}`}
                image={image}
                selected={true}
                id={id}
                index={0}
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
            goToPlay();
            setNewGame();
          }}>
            Jugar
          </Button>
        </footer>
      </Page>
    </>
  );
}

export default Home;
