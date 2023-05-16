import { Header, Page, Button } from '@rickandmemory/shared/ui';

function Result() {
  return (
    <>
      <Header></Header>
      <Page>
        <output>
          <h2>¡Felicitaciones!</h2>
          <p>Terminaste el juego con 15 turnos</p>
          <span>
            <Button variant={'primary'}>Repetir</Button> <Button variant={'primary'}>Inicio</Button>
          </span>
        </output>
      </Page>
    </>
  )
}
  
export default Result;