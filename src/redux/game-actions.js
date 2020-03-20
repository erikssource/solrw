export const ADD_COMMAND_CHAR = "ADD_COMMAND_CHAR";
export const COMMAND_BACKSPACE = "COMMAND_BACKSPACE";
export const LOAD_GAME = "LOAD_GAME";
export const LOAD_GAME_SUCCESS = "LOAD_GAME_SUCCESS";
export const LOAD_GAME_FAILURE = "LOAD_GAME_FAILURE";
export const EXECUTE_COMMAND = "EXECUTE_COMMAND";

export function addCommandChar(newChar) {
    return {type: ADD_COMMAND_CHAR, payload: {newChar}};
}

export function commandBackspace() {
    return {type: COMMAND_BACKSPACE};
}

export function loadGame() {
    return {type: LOAD_GAME};
}

export function executeCommand() {
    return {type: EXECUTE_COMMAND};
}
