import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'
import FirstImg from '../assets/first-img.svg'

import {
  Container,
  Header,
  FirstSection,
  SecondSection
} from '../styles/pages/Home'

const Icon = () => {
  return (
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0323 8.47046C21.9276 8.86484 21.9276 10.1352 21.0323 10.5295L2.24621 18.8047C1.50264 19.1322 0.667706 18.5876 0.667706 17.7751V1.22486C0.667706 0.412351 1.50264 -0.132217 2.24621 0.19532L21.0323 8.47046Z"
        fill="#FF9900"
      />
    </svg>
  )
}

const NextIcon = () => {
  return (
    <svg
      width="52"
      height="24"
      viewBox="0 0 52 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.3985 22.7983C26.9901 23.1597 26.3812 23.1761 25.9539 22.8372L1.42416 3.38151C0.600971 2.7286 1.04266 1.40379 2.09296 1.3755L50.0696 0.0832777C51.1199 0.0549885 51.6323 1.3541 50.8454 2.05038L27.3985 22.7983Z"
        fill="#FF9900"
      />
    </svg>
  )
}

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <div className="logo">
            <Logo />
          </div>
          <nav className="menu">
            <h3>Product</h3>
            <h3>Custumers</h3>
            <h3>Pricing</h3>
            <h3>Resorces</h3>
            <button className="signIn">
              <h1>Sign In</h1>
            </button>
            <button className="signUp">
              <h1>Sign Up</h1>
            </button>
          </nav>
        </Header>
        <FirstSection>
          <div className="section-title">
            <h1 className="text-title">
              Encontre o que você precisa para seu evento
            </h1>
            <h3>
              Encontre buffets, fotografos, artistas, decorações,
              <br />
              espaços e outros serviços para fazer do seu
              <br /> evento inesquecível.
            </h3>
            <input placeholder="O que você procura ?" />
            <div className="actions">
              <button>Buscar</button>
              <span>
                <Icon />
              </span>
              <h1 className="text-underline">Veja como funciona</h1>
            </div>
          </div>
          <div className="section-image">
            <FirstImg />
          </div>
        </FirstSection>

        <SecondSection>
          <span>
            <NextIcon />
          </span>

          <h1 className="text-title">
            Monte seu evento de maneira
            <br /> ágil e pratica
          </h1>
        </SecondSection>
      </Container>
    </>
  )
}

export default Home
