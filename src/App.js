import React from 'react';
import './App.css';

import {GameContextProvider} from './context/game-context';
import GameLayout from './components/game-layout';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <GameLayout />
      </GameContextProvider>
    </div>
  );
}

export default App;
