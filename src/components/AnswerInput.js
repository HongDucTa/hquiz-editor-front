import React from 'react'

import { TableRow, TableCell, Checkbox, TextField } from '@material-ui/core'

export default function AnswerInput(props) {
    return (
        <TableRow>
            <TableCell align="center">
                <Checkbox checked={props.isCorrectAnswer} onChange={props.handleIsCorrectAnswer}></Checkbox>
            </TableCell>
            <TableCell>
                <TextField label={props.label} value={props.answerValue} onChange={props.handleAnswer} fullWidth></TextField>
            </TableCell>
        </TableRow>
    )
}