import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'

import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>QuizHallo</title>
          <meta name="title" content="QuizHallo" />
          <meta name="description" content="Um quiz sobre o halloween" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://quizall.ralisson-mattias.vercel.app/" />
          <meta property="og:title" content="QuizHallo" />
          <meta property="og:description" content="Um quiz sobre o halloween" />
          <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://quizall.ralisson-mattias.vercel.app/" />
          <meta property="twitter:title" content="QuizHallo" />
          <meta property="twitter:description" content="Um quiz sobre o halloween" />
          <meta property="twitter:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />


        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
