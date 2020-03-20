import React from 'react';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import * as Actions from '../redux/game-actions';

const InputBox = () => {
    const dispatch = useDispatch();

    function addFunc(val) {
        return () => dispatch(Actions.addCommandChar(val));
    };

    function backFunc() {
        return () => dispatch(Actions.commandBackspace());
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Button onClick={addFunc('r')} variant="contained" size="large">r - Retire</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('a')} variant="contained" size="large">a - Auto</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('n')} variant="contained" size="large">n - Draw</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('k')} variant="contained" size="large">k - Waste</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('h')} variant="contained" size="large">h - Hearts</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('d')} variant="contained" size="large">d - Diamonds</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('s')} variant="contained" size="large">s - Spades</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('c')} variant="contained" size="large">c - Clubs</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('1')} variant="contained" size="large">1 - Pile 1</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('2')} variant="contained" size="large">2 - Pile 2</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('3')} variant="contained" size="large">3 - Pile 3</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('4')} variant="contained" size="large">4 - Pile 4</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('5')} variant="contained" size="large">5 - Pile 5</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('6')} variant="contained" size="large">6 - Pile 6</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={addFunc('7')} variant="contained" size="large">7 - Pile 7</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={backFunc()} variant="contained" size="large">Backspace</Button>
            </Grid>
        </Grid>
    );
}

export default InputBox;
