import React, { useEffect, useState } from 'react'
import db from '../db.json'

import Button from '../src/components/Button'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizContainer from '../src/components/QuizContainer'


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

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {

    const questionId = `question_${questionIndex}`

    const [active, setActive] = useState(false)

    return (
        <Widget>
            <Widget.Header>
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

                <form onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit()
                }}>
                    {question.alternatives.map((alternative, index) => {

                        const alternativeID = `alternative_${index}`

                        return (
                            <Widget.Topic as="label" htmlFor={alternativeID} key={index}
                                // style={{
                                //     borderWidth: 1,
                                //     borderColor: '#f00',
                                //     borderStyle: 'solid'
                                // }}
                                >

                                <input
                                    // style={{ display: 'none' }}
                                    id={alternativeID}
                                    name={questionIndex}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        )
                    })}
                    <Button
                        text="Confirmar"
                    />
                </form>


            </Widget.Content>

        </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage() {

    const [loading, setLoading] = useState(true)
    const [screenState, setScreenState] = useState(screenStates.LOADING);

    const totalQuestions = db.questions.length
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questionIndex = currentQuestion
    const question = db.questions[questionIndex]


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
                <QuizBackground backgroundImage={db.bgquiz}>
                    <QuizContainer>

                        <QuizLogo />

                        {screenState === screenStates.QUIZ && (

                            <QuestionWidget
                                question={question}
                                totalQuestions={totalQuestions}
                                questionIndex={questionIndex}
                                onSubmit={handleSubmit}
                            />
                        )
                        }

                        {screenState === screenStates.LOADING && <LoadingWidget />}

                        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}




                    </QuizContainer>

                    <GitHubCorner projectUrl="https://github.com/Ralisson-mattias" />
                </QuizBackground>
            </>
        </>
    )
}