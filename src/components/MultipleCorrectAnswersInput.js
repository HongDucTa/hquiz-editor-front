import React from 'react'

import { Checkbox, FormControlLabel } from '@material-ui/core'

export default function MultipleCorrectAnswersInput(props) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={props.multipleCorrectAnswers}
                    onChange={props.handleMultipleCorrectAnswers}
                    color="primary"
                />
            }
            label="Plusieurs réponses correctes ?"
        />
    )
}