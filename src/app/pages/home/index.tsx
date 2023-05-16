import { Header, Card, Page, Button, Grid } from '@rickandmemory/shared/ui';

function Home() {
    return (
      <>
        <Header></Header>
        <Page>
          <header><h2>Personajes</h2></header>
          <main>
            <Grid>
              {[1,1,2,2,3,3,4,4,5,5,6,6].map((id) => (
                <Card image={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} selected={true} id={''} index={0} disabled={false} value={''}></Card>
              ))}
            </Grid>
          </main>
          <footer><Button variant={'primary'}>Jugar</Button></footer>  
        </Page>
      </>
    );
  }
  
export default Home;