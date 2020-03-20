import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import * as Actions from '../redux/game-actions';

export default function(key) {
    const dispatch = useDispatch();
    const values = [
        'KeyR',
        'KeyA',
        'KeyN',
        'KeyK',
        'KeyH',
        'KeyD',
        'KeyS',
        'KeyC',
        'Digit1',
        'Digit2',
        'Digit3',
        'Digit4',
        'Digit5',
        'Digit6',
        'Digit7',
    ];

    useEffect(() => {
        function keyUpHandler({key, code}) {
            if (values.includes(code)) {
                dispatch(Actions.addCommandChar(key.toLowerCase()));
            }
            else if (code === 'Backspace' || code === 'Delete') {
                dispatch(Actions.commandBackspace());
            }
            else if (code === 'Enter') {
                dispatch(Actions.executeCommand());
            }
        }

        window.addEventListener('keyup', keyUpHandler);
        return () => {
            window.removeEventListener('keyup', keyUpHandler);
        };
    }, [dispatch, values])
}
