import React from 'react'

import { Button } from '@material-ui/core'

export default function DeleteQuestionButton(props) {
    return (
        <Button variant="contained" color="secondary" onClick={props.handleDeleteQuestion} fullWidth>Supprimer</Button>
    )
}