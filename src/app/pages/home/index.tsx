import { Header, Card, Page, Button, Grid } from '@rickandmemory/shared/ui';

function Home() {
    return (
      <>
        <Header></Header>
        <Page>
          <header><h2>Personajes</h2><h2>Personajes</h2></header>
          <main>
            <Grid>
              {[...Array(12).keys()].map(() => (
                <Card image='https://rickandmortyapi.com/api/character/avatar/1.jpeg' selected={true} id={''} index={0} disabled={false} value={''}></Card>
              ))}
            </Grid>
          </main>
          <footer><Button variant={'primary'}>Jugar</Button></footer>  
        </Page>
      </>
    );
  }
  
export default Home;