import React from 'react'

import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'

export default function DifficultyInput(props) {
    return (
        <FormControl fullWidth>
            <InputLabel>Difficulté</InputLabel>
            <Select value={props.difficulty} onChange={props.handleDifficulty}>
                <MenuItem value="Easy">Facile</MenuItem>
                <MenuItem value="Medium">Intermédiaire</MenuItem>
                <MenuItem value="Hard">Difficile</MenuItem>
            </Select>
        </FormControl>
    )
}