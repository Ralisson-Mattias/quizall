import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
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
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>QuizGod</title>
        <meta name="title" content="QuizGod" />
        <meta name="description" content="Um quiz sobre o halloween" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quizall.ralisson-mattias.vercel.app/" />
        <meta property="og:title" content="QuizGod" />
        <meta property="og:description" content="Um quiz sobre o God Of War" />
        <meta property="og:image" content="hhttps://image.api.playstation.com/vulcan/img/rnd/202010/2217/KAmUQWQ5V9QF3XDzmty1VkKj.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quizall.ralisson-mattias.vercel.app/" />
        <meta property="twitter:title" content="QuizGod" />
        <meta property="twitter:description" content="Um quiz sobre o God Of War" />
        <meta property="twitter:image" content="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/KAmUQWQ5V9QF3XDzmty1VkKj.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
