import { React } from 'react'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

export default function QuestionsDisplay(props) {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Question</TableCell>
                        <TableCell align="right">Tags</TableCell>
                        <TableCell align="right">Difficulté</TableCell>
                        <TableCell align="right">Date de création</TableCell>
                        <TableCell align="right">Mise à jour</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.questions.map((question) => (
                        <TableRow key={question._id}>
                            <TableCell>{question._id}</TableCell>
                            <TableCell>{question.question}</TableCell>
                            <TableCell>{question.tags.join(';')}</TableCell>
                            <TableCell>{question.difficulty}</TableCell>
                            <TableCell>{question.date}</TableCell>
                            <TableCell>{question.lastUpdate}</TableCell>
                            <TableCell><a href={`/editQuestion/${question._id}`}>Editer</a></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}