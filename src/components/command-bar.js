import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

import * as Actions from '../redux/game-actions';

const useStyles = makeStyles(theme => ({
    paper: {
        borderRadius: '10px',
        padding: '1em',
    },
    btnctr: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));

const CommandBar = () => {
    const dispatch = useDispatch();
    const command = useSelector((state) => state.command);
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2} justify="space-between">
                <Grid item xs={7}>
                    <Typography variant="h5" component="span">
                        {command}
                    </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4} className={classes.btnctr}>
                    <Button onClick={() => dispatch(Actions.executeCommand())}>Execute</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CommandBar;
