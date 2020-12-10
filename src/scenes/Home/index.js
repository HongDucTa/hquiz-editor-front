import { React, useState, useEffect } from 'react'

import Header from '../../components/Header.js'

import { Container } from '@material-ui/core'

import QuestionsDisplay from './Components/QuestionsDisplay.js'
import Taskbar from '../../components/Taskbar.js'

import fetchAllQuestions from '../../services/FetchAllQuestionsService'

export default function Home() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetchAllQuestions()
            try {
                setQuestions(res.data)
            } catch {
                alert('Echec de la récupération des questions')
            }
        }
        fetchData()
        return (<QuestionsDisplay questions={questions} />)
    }, [])

    return (
        <Container>
            <Header />
            <Taskbar />
            <QuestionsDisplay questions={questions} />
        </Container>
    )
}