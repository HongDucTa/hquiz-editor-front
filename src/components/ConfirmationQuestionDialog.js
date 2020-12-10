import { React } from 'react'

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'

export default function ConfirmationQuestionDialog(props) {
    return (
        <Dialog open={props.open}>
            <DialogTitle >{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{props.question}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Fermer</Button>
            </DialogActions>
        </Dialog>
    )
} 