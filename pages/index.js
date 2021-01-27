import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'

export default function Home() {

  const router = useRouter()

  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>

          <QuizLogo />

          <Widget>
            <Widget.Header>
              <h1>GOD OF WAR</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Teste seus conhecimentos contra o poderoso Deus da Guerra</p>
              <form onSubmit={(e) => onSubmit(e)}>
                <Input
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <Button
                  disabled={name.length === 0}
                  name={name}
                  text={`Jogar como ${name}`}
                />

              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>Lorem Ipsum ai</p>
            </Widget.Content>
          </Widget>

          <Footer />
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/Ralisson-mattias" />

      </QuizBackground>
    </>
  )
}
