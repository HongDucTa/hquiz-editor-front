import React from 'react'

import { Grid, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'purple'
    },
    title: {
        color: 'white'
    }
})

export default function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item>
                    <Button href='/'><h1 className={classes.title}>HQUIZ</h1></Button>
                </Grid>
            </Grid>
        </div>
    )
}