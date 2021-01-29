import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'
import Link from '../src/components/Link'

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

          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
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

          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Quizes da galera</h1>

              <ul>
                {db.external.map((linkExterno) => {

                  const [projectName, gitHubUser] = linkExterno
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.')

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        href={`/quiz/${projectName}___${gitHubUser}`}
                        as={Link}
                      >
                        {`${gitHubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  )
                })}
              </ul>

            </Widget.Content>
          </Widget>

          <Footer 
            as={motion.footer}
            transition={{ delay: 1, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>

        <GitHubCorner projectUrl="https://github.com/Ralisson-mattias" />

      </QuizBackground>
    </>
  )
}
