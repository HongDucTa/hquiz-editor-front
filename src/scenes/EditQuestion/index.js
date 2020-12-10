import { React, useState, useEffect } from 'react'

import { Container, TextField, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, Button } from '@material-ui/core'
import Header from '../../components/Header.js'
import AnswerInput from '../../components/AnswerInput'
import DifficultyInput from '../../components/DifficultyInput'
import MultipleCorrectAnswersInput from '../../components/MultipleCorrectAnswersInput'
import TagsInput from '../../components/TagsInput'
import ConfirmationQuestionDialog from '../../components/ConfirmationQuestionDialog.js'
import DeleteQuestionButton from './components/DeleteQuestionButton.js'

import fetchQuestion from '../../services/FetchQuestionService'
import editQuestion from '../../services/EditQuestionService'
import deleteQuestion from '../../services/DeleteQuestionService'


export default function EditQuestion(props) {
    const [question, setQuestion] = useState('')
    const [answerA, setAnswerA] = useState('')
    const [answerB, setAnswerB] = useState('')
    const [answerC, setAnswerC] = useState('')
    const [answerD, setAnswerD] = useState('')
    const [answerE, setAnswerE] = useState('')
    const [answerF, setAnswerF] = useState('')
    const [multipleCorrectAnswers, setMultipleCorrectAnswers] = useState(false)
    const [isCorrectAnswerA, setIsCorrectAnswerA] = useState(false)
    const [isCorrectAnswerB, setIsCorrectAnswerB] = useState(false)
    const [isCorrectAnswerC, setIsCorrectAnswerC] = useState(false)
    const [isCorrectAnswerD, setIsCorrectAnswerD] = useState(false)
    const [isCorrectAnswerE, setIsCorrectAnswerE] = useState(false)
    const [isCorrectAnswerF, setIsCorrectAnswerF] = useState(false)
    const [tags, setTags] = useState([])
    const [difficulty, setDifficulty] = useState('Easy')
    const [openConfirmationEditDialog, setConfirmationEditDialog] = useState(false)
    const [openConfirmationDeleteDialog, setConfirmationDeleteDialog] = useState(false)

    const handleQuestion = (event) => { setQuestion(event.target.value) }
    const handleAnswerA = (event) => { setAnswerA(event.target.value) }
    const handleAnswerB = (event) => { setAnswerB(event.target.value) }
    const handleAnswerC = (event) => { setAnswerC(event.target.value) }
    const handleAnswerD = (event) => { setAnswerD(event.target.value) }
    const handleAnswerE = (event) => { setAnswerE(event.target.value) }
    const handleAnswerF = (event) => { setAnswerF(event.target.value) }
    const handleMultipleCorrectAnswers = (event) => { setMultipleCorrectAnswers(event.target.checked) }
    const handleIsCorrectAnswerA = (event) => { setIsCorrectAnswerA(event.target.checked) }
    const handleIsCorrectAnswerB = (event) => { setIsCorrectAnswerB(event.target.checked) }
    const handleIsCorrectAnswerC = (event) => { setIsCorrectAnswerC(event.target.checked) }
    const handleIsCorrectAnswerD = (event) => { setIsCorrectAnswerD(event.target.checked) }
    const handleIsCorrectAnswerE = (event) => { setIsCorrectAnswerE(event.target.checked) }
    const handleIsCorrectAnswerF = (event) => { setIsCorrectAnswerF(event.target.checked) }
    const handleTags = (event) => { setTags(event.target.value.split(';')) }
    const handleDifficulty = (event) => { setDifficulty(event.target.value) }
    const handleCloseDialog = () => {
        setConfirmationEditDialog(false)
        setConfirmationDeleteDialog(false)
    }

    const handleEditQuestion = async () => {
        const editedQuestion = {
            question: question,
            answers: {
                answerA: answerA,
                answerB: answerB,
                answerC: answerC,
                answerD: answerD,
                answerE: answerE,
                answerF: answerF,
            },
            multipleCorrectAnswers: multipleCorrectAnswers,
            correctAnswers: {
                answerA: isCorrectAnswerA,
                answerB: isCorrectAnswerB,
                answerC: isCorrectAnswerC,
                answerD: isCorrectAnswerD,
                answerE: isCorrectAnswerE,
                answerF: isCorrectAnswerF,
            },
            tags: tags,
            difficulty: difficulty
        }
        const res = await editQuestion(props.match.params.id, editedQuestion)
        if (res.status === 204) {
            setConfirmationEditDialog(true)
        } else {
            alert('Echec de la requête')
        }
    }

    const handleDeleteQuestion = async () => {
        const res = await deleteQuestion(props.match.params.id)
        if (res.status === 204) {
            setConfirmationDeleteDialog(true)
        } else {
            alert('Echec de la suppression de la question')
        }
    }

    useEffect(async () => {
        const res = await fetchQuestion(props.match.params.id)
        try {
            setQuestion(res.data[0].question)
            setAnswerA(res.data[0].answers.answerA)
            setAnswerB(res.data[0].answers.answerB)
            setAnswerC(res.data[0].answers.answerC)
            setAnswerD(res.data[0].answers.answerD)
            setAnswerE(res.data[0].answers.answerE)
            setAnswerF(res.data[0].answers.answerF)
            setMultipleCorrectAnswers(res.data[0].multipleCorrectAnswers)
            setIsCorrectAnswerA(res.data[0].correctAnswers.answerA)
            setIsCorrectAnswerB(res.data[0].correctAnswers.answerB)
            setIsCorrectAnswerC(res.data[0].correctAnswers.answerC)
            setIsCorrectAnswerD(res.data[0].correctAnswers.answerD)
            setIsCorrectAnswerE(res.data[0].correctAnswers.answerE)
            setIsCorrectAnswerF(res.data[0].correctAnswers.answerF)
            setTags(res.data[0].tags)
            setDifficulty(res.data[0].difficulty)
        } catch {
            alert('Echec lors de la récupération de la question')
        }
    }, [])

    return (
        <Container>
            <Header />
            <form>
                <TextField label="Question" value={question} onChange={handleQuestion} fullWidth></TextField>
                <MultipleCorrectAnswersInput multipleCorrectAnswers={multipleCorrectAnswers} handleMultipleCorrectAnswers={handleMultipleCorrectAnswers} />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Bonne réponse</TableCell>
                                <TableCell>Réponse</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <AnswerInput label="Réponse A" answerValue={answerA} handleAnswer={handleAnswerA} isCorrectAnswer={isCorrectAnswerA} handleIsCorrectAnswer={handleIsCorrectAnswerA} />
                            <AnswerInput label="Réponse B" answerValue={answerB} handleAnswer={handleAnswerB} isCorrectAnswer={isCorrectAnswerB} handleIsCorrectAnswer={handleIsCorrectAnswerB} />
                            <AnswerInput label="Réponse C" answerValue={answerC} handleAnswer={handleAnswerC} isCorrectAnswer={isCorrectAnswerC} handleIsCorrectAnswer={handleIsCorrectAnswerC} />
                            <AnswerInput label="Réponse D" answerValue={answerD} handleAnswer={handleAnswerD} isCorrectAnswer={isCorrectAnswerD} handleIsCorrectAnswer={handleIsCorrectAnswerD} />
                            <AnswerInput label="Réponse E" answerValue={answerE} handleAnswer={handleAnswerE} isCorrectAnswer={isCorrectAnswerE} handleIsCorrectAnswer={handleIsCorrectAnswerE} />
                            <AnswerInput label="Réponse F" answerValue={answerF} handleAnswer={handleAnswerF} isCorrectAnswer={isCorrectAnswerF} handleIsCorrectAnswer={handleIsCorrectAnswerF} />
                        </TableBody>
                    </Table>
                </TableContainer>

                <DifficultyInput difficulty={difficulty} handleDifficulty={handleDifficulty} />
                <TagsInput tags={tags} handleTags={handleTags} />
                <Button onClick={handleEditQuestion} fullWidth>Editer la question</Button>
                <ConfirmationQuestionDialog title="Question éditée" open={openConfirmationEditDialog} handleClose={handleCloseDialog} question={question} />
                <ConfirmationQuestionDialog title="Question supprimée" open={openConfirmationDeleteDialog} handleClose={handleCloseDialog} question={question} />
                <DeleteQuestionButton handleDeleteQuestion={handleDeleteQuestion}/>
            </form>
        </Container>
    )
}