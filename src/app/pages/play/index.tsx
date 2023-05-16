import { Header, Card, Page, Grid } from '@rickandmemory/shared/ui';

function Play() {
  return (
    <>
      <Header></Header>
      <Page>
        <header><h2>Aciertos: 0</h2><h2>Turnos: 0</h2></header>
        <main>
          <Grid>
            {[1,1,2,2,3,3,4,4,5,5,6,6].map((id) => (
              <Card image={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} selected={true} id={''} index={0} disabled={false} value={''}></Card>
            ))}
          </Grid>
        </main>
      </Page>
    </>
  );
  }
  
export default Play;