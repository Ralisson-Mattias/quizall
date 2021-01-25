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
          <title>QuizAll</title>
          <meta property="og:title" content="QuizAll" />
          <meta property="og:site_name" content="QuizAll" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:locale" content="pt_BR" />

          <meta property="og:image" content="https://i2.wp.com/css-tricks.com/wp-content/uploads/2017/06/css-is-awesome-scaled.jpg?resize=1536%2C1208&ssl=1" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="800" /> 
          <meta property="og:image:height" content="600" /> 
          <meta property="og:type" content="website" />

        </Head>
            <GlobalStyle />
            <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
