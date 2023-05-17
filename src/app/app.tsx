import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import Result from './pages/result';

import './app.module.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/play" element={<Play />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
}

export default App;
