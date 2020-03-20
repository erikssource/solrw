import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import * as Actions from '../redux/game-actions';
import AlertBar from './alert-bar';
import CommandBar from './command-bar';
import InputBox from './input-box';
import useKeyChar from '../hook/use-key-char';

const useStyles = makeStyles(theme => ({
    game: {
        flexGrow: 1,
        backgroundColor: '#aaaaaa',
        height: '100vh',
        padding: '2em',
    },
    console: {
        backgroundColor: '#000000',
        color: '#00aa00',
        padding: '1em',
        border: '2px solid #4444dd',
        borderRadius: '10px',
    },
}));

const GameLayout = () => {
    useKeyChar();
    const dispatch = useDispatch();
    const wasm = useSelector((state) => state.wasm);
    const display = useSelector((state) => state.display);
    const classes = useStyles();

    useEffect(() => {
        dispatch(Actions.loadGame());
    }, [dispatch]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.game}>
                    <Grid container spacing={2}>
                        {wasm !== null &&
                            <Grid item xs={12}>
                                <pre className={classes.console}>
                                    {wasm.Solgame.help()}
                                </pre> 
                            </Grid>
                        }
                        {wasm !== null &&
                            <Grid item xs={12}>
                                <pre className={classes.console}>
                                    {display}
                                </pre>
                            </Grid>                            
                        }
                        <Grid item xs={12}>
                            <AlertBar />
                        </Grid>
                        {wasm !== null &&
                            <Grid item xs={12}>
                                <CommandBar />
                            </Grid>
                        }
                        {wasm !== null &&
                            <Grid item xs={12}>
                                <InputBox />
                            </Grid>
                        }
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default GameLayout;
