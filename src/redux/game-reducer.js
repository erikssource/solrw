import * as Actions from './game-actions';

const initialState = {
    wasm: null,
    solGame: null,
    command: '',
    display: '',
    status: {
        type: 'none',
        msg: null,
    }
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case Actions.ADD_COMMAND_CHAR: {
            if (state.command.length < 2) {
                return {
                    ...state,
                    command: state.command += payload.newChar,
                };
            }
            return state;
        }
        case Actions.COMMAND_BACKSPACE: {
            if (state.command.length > 0) {
                return {
                    ...state,
                    command: state.command.substring(0, state.command.length - 1),
                };
            }
            return state;
        }
        case Actions.LOAD_GAME: {
            return {
                ...state,
                status: { type: 'info', msg: 'Loading...'},
            }
        }
        case Actions.EXECUTE_COMMAND: {
            let display = state.display;
            let status = state.status;
            const result = state.solGame.cmd(state.command);
            if (result === 'retire') {
                status = { type: 'warning', msg: 'Previous Game Retired'};
                display = state.solGame.display();
            }
            else if (result === 'valid') {
                status = { type: 'success', msg: `Valid Move: ${state.command}`};
                display = state.solGame.display();
            }
            else if (result === 'victory') {
                status = { type: 'success', msg: `Victory!!!`};
                display = state.solGame.display();
            }
            else if (result === 'bad_move') {
                status = { type: 'error', msg: `Invalid Move: ${state.command}`};
            }
            else if (result === 'invalid_command') {
                status = { type: 'error', msg: `Invalid Command: ${state.command}`};
            }
            return {
                ...state,
                display: display,
                command: '',
                status: status,
            };
        }
        case Actions.LOAD_GAME_SUCCESS: {
            return {
                ...state,
                wasm: payload.wasm,
                solGame: payload.solGame,
                display: payload.solGame.display(),
                status: { type: 'success', msg: 'Game Loaded'},
            };
        }
        case Actions.LOAD_GAME_FAILURE: {
            return {
                ...state,
                status: { type: 'error', msg: 'Game Loading Failure'},
            }
        }
        default: {
            return state;
        }
    }
}

