import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { PlayerStateProvider } from '@rickandmemory/contexts';

const basename = import.meta.env.VITE_APP_BASENAME;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <PlayerStateProvider>
        <App />
      </PlayerStateProvider>
    </BrowserRouter>
  </StrictMode>
);
