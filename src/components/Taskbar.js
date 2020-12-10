import React from 'react'

import { makeStyles, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'grey'
    },
    button: {
        backgroundColor: 'grey',
        color: 'white'
    }
})

export default function Taskbar() {
    const classes = useStyles()

    return (
        <div>
            <Grid container className={classes.taskbar}>
                <Grid item>
                    <Button className={classes.button} href='/ajoutQuestion'>Ajouter une question</Button>
                </Grid>
            </Grid>
        </div>
    )
}