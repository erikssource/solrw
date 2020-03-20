import React, {useEffect, useState} from 'react';

export const GameContext = React.createContext();

export const GameContextProvider = ({children}) => {
    const [game, setGame] = useState(null);

    useEffect(() => {
        async function loadWasm() {
          try {
            const wasm = await import('solgame');
            const newSolGame = wasm.Solgame.new();
            setGame({
              wasm: wasm,
              solGame: newSolGame,
              command: '',
            });
          }
          catch(err) {
            console.error(`Unexepcted error loading wasm. [Message: ${err.message}]`);
          }
        }
        loadWasm();
      }, []);

    if (game === null) {
        return (
            <div>
                loading...
            </div>
        );
    }

    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    );
}
