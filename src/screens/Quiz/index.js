import React, { useEffect, useState } from 'react'

// import db from '../../../db.json'
import AlternativesForm from '../../components/AlternativesForm'
import BackLinkArrow from '../../components/BackLinkArrow'
import Button from '../../components/Button'
import GitHubCorner from '../../components/GitHubCorner'
import QuizBackground from '../../components/QuizBackground'
import QuizContainer from '../../components/QuizContainer'
import QuizLogo from '../../components/QuizLogo'
import Widget from '../../components/Widget'



function ResultWidget({ results }) {
    return (
        <Widget>
            <Widget.Header>
                <h1>Tela de resultados</h1>
            </Widget.Header>

            <Widget.Content>
                <p>
                     Você acertou
                     {' '}
                    {results.filter((x) => x).length}
                    {' '}
                    perguntas
                </p>

                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            #
                            {index + 1}
                            {' '}
                            Resultado:
                            {result === true ? ' Acertou' : ' Errou'}
                        </li>
                    ))}
                </ul>
            </Widget.Content>

        </Widget>
    )
}

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                <h1>Carregando</h1>
            </Widget.Header>

            <img
                alt="Loadig"
                style={{
                    width: '100%',
                    objectFit: 'cover'
                }}
                src="https://media.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif"
            />
        </Widget>
    )
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {

    const questionId = `question_${questionIndex}`
    const [selectedAlternative, setSelectedAlternative] = useState(undefined)
    const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
    const isCorrect = selectedAlternative === question.answer
    const hasAlternativeSelected = selectedAlternative !== undefined

    return (
        <Widget>
            <Widget.Header>
                <BackLinkArrow href="/" />
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover'
                }}
                src={question.image}
            />

            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>

                <AlternativesForm onSubmit={(e) => {
                    e.preventDefault()
                    setIsQuestionSubmited(true)

                    setTimeout(() => {
                        addResult(isCorrect)
                        onSubmit()
                        setIsQuestionSubmited(false)
                        setSelectedAlternative(undefined)
                    }, 3000)
                }}>
                    {question.alternatives.map((alternative, index) => {

                        const alternativeID = `alternative_${index}`
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
                        const isSelected = selectedAlternative === index

                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeID}
                                key={alternativeID}
                                data-selected={isSelected}
                                data-status={isQuestionSubmited && alternativeStatus}
                            >

                                <input
                                    style={{ display: 'none' }}
                                    id={alternativeID}
                                    onChange={() => setSelectedAlternative(index)}
                                    name={questionId}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        )
                    })}
                    <Button
                        text="Confirmar"
                        disabled={!hasAlternativeSelected}
                    />

                    {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
                    {isQuestionSubmited && !isCorrect && <p>Você Errou!</p>}

                </AlternativesForm>


            </Widget.Content>

        </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {

    const [screenState, setScreenState] = useState(screenStates.LOADING);
    const [results, setResults] = useState([])
    const totalQuestions = externalQuestions.length
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questionIndex = currentQuestion
    const question = externalQuestions[questionIndex]

    const bg = externalBg

    function addResult(result) {
        setResults([
            ...results,
            result
        ])
    }


    useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1000);
    }, [])

    function handleSubmit() {
        const nextQuestion = questionIndex + 1

        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion)
            console.log('Ta entrando')
        } else {
            setScreenState(screenStates.RESULT);
        }
    }

    return (
        <>
            <>
                <QuizBackground backgroundImage={bg}>
                    <QuizContainer>

                        <QuizLogo />

                        {screenState === screenStates.QUIZ && (

                            <QuestionWidget
                                question={question}
                                totalQuestions={totalQuestions}
                                questionIndex={questionIndex}
                                onSubmit={handleSubmit}
                                addResult={addResult}
                            />
                        )
                        }

                        {screenState === screenStates.LOADING && <LoadingWidget />}

                        {screenState === screenStates.RESULT && <ResultWidget results={results} />}


                    </QuizContainer>

                    <GitHubCorner projectUrl="https://github.com/Ralisson-mattias" />
                </QuizBackground>
            </>
        </>
    )
}