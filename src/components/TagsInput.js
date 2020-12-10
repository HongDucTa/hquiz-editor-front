import React from 'react'

import { TextField } from '@material-ui/core'

export default function TagsInput(props) {
    return (
        <TextField label="Tags" value={props.tags.join(';')} onChange={props.handleTags} fullWidth></TextField>
    )
}