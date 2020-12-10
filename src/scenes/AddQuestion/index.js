import { React, useState } from 'react'

import { Container, TextField, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, Button } from '@material-ui/core'
import Header from '../../components/Header.js'
import AnswerInput from '../../components/AnswerInput'
import DifficultyInput from '../../components/DifficultyInput'
import MultipleCorrectAnswersInput from '../../components/MultipleCorrectAnswersInput'
import TagsInput from '../../components/TagsInput'
import ConfirmationQuestionDialog from '../../components/ConfirmationQuestionDialog'

import addQuestion from '../../services/AddQuestionsService'


export default function AddQuestion() {
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
    const [openConfirmationDialog, setConfirmationDialog] = useState(false)
    const [questionCreated, setQuestionCreated] = useState('')

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
        setConfirmationDialog(false)
    }

    const createQuestion = async () => {
        const newQuestion = {
            question: question,
            answers: {
                answerA: answerA,
                answerB: answerB,
                answerC: answerC,
                answerD: answerD,
                answerE: answerE,
                answerF: answerF
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
            difficulty: difficulty,
            date: new Date(),
            lastUpdate: new Date()
        }

        const res = await addQuestion(newQuestion)
        if (res.status === 201) {
            setQuestionCreated(question)
            setConfirmationDialog(true)
        }
        else {
            alert('Erreur !')
        }

    }

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
                <Button onClick={createQuestion} fullWidth>Créer la question</Button>
                <ConfirmationQuestionDialog title="Question ajoutée" open={openConfirmationDialog} handleClose={handleCloseDialog} question={questionCreated} />
            </form>
        </Container>
    )
}