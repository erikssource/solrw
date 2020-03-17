import React, {useContext} from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import {GameContext} from '../context/game-context';

const useStyles = makeStyles(theme => ({
    game: {
        flexGrow: 1,
        backgroundColor: '#cccccc',
        height: '100vh',
        padding: '2em',
    },
    console: {
        backgroundColor: '#000000',
        color: '#00aa00',
        padding: '1em',
        border: '2px solid #cccccc',
        borderRadius: '10px',
    },
}));

const GameLayout = () => {
    const game = useContext(GameContext);
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.game}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <pre className={classes.console}>
                                {game.wasm.Solgame.help()}
                            </pre> 
                        </Grid>
                        <Grid item xs={12}>
                            <pre className={classes.console}>
                                {game.solGame.display()}
                            </pre>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default GameLayout;
