import React from 'react';
import {Provider} from 'react-redux';
import {StoreManager} from 'sagamatic';

import {loadWasm} from './wasm/wasm-utils';
import GameReducer from './redux/game-reducer';
import * as Actions from './redux/game-actions';
import GameLayout from './components/game-layout';

import './App.css';
import 'typeface-roboto';

function App() {
  const isDev = process.env.NODE_ENV === 'development';

  const storeManager = new StoreManager({devToolsEnabled: isDev});
  storeManager.addAsyncFunc({
    action: Actions.LOAD_GAME,
    asyncFunc: loadWasm,
    validTarget: Actions.LOAD_GAME_SUCCESS,
    errTarget: Actions.LOAD_GAME_FAILURE,
  })
  const store = storeManager.createStore(GameReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <GameLayout />
      </Provider>
    </div>
  );
}

export default App;
