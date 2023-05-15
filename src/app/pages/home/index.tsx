import styles from './index.module.scss';

import { Header, Card } from '@rickandmemory/shared/ui';

function Home() {
    return (
      <>
        <div>
          <Header></Header>
        </div>
        <div>
          <p>Personajes</p>
          <Card image='https://rickandmortyapi.com/api/character/avatar/1.jpeg' selected={true} id={''} index={0} disabled={false} value={''}></Card>
        </div>
      </>
    );
  }
  
export default Home;