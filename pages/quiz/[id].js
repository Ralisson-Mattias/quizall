import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage({ dbExterno }) {
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen
                externalQuestions={dbExterno.questions}
                externalBg={dbExterno.bg}
            />
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {

    const [ projectName, giHubUser ] = context.query.id.split('___')


    const dbExterno = await fetch(`https://${projectName}.${giHubUser}.vercel.app/api/db`)
        .then((respostaDoServer) => {
            if (respostaDoServer.ok) {
                return respostaDoServer.json()
            }
            throw new Error('Falha ao pegar dados')
        })
        .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
        .catch((err) => {
            console.log(err)
        })

    return {
        props: {
            dbExterno,
        }
    }
}