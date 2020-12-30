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

const Bg = ({ style }) => {
  return (
    <div className={style}>
      <svg
        width="2211"
        height="390"
        viewBox="0 0 2211 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1098.34 389.999C613.738 390.592 127.88 117.037 -14.4089 30.006C-27.0488 22.2748 -21.4946 3.71594 -6.67773 3.69778L2217.89 0.973206C2232.75 0.955017 2238.32 19.5737 2225.62 27.2901C2081.79 114.702 1590.69 389.396 1098.34 389.999Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2225.9"
            y1="388.689"
            x2="2225.44"
            y2="-0.328079"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE5D2" stopOpacity="0.629261" />
            <stop offset="1" stopColor="#FFF4E5" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const PointerIcon = () => {
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <g opacity="0.848005" filter="url(#filter0_f)">
          <rect
            x="0.5"
            y="25"
            width="50"
            height="25"
            rx="12.5"
            fill="#7752BE"
          />
        </g>
        <rect width="50" height="50" rx="19" fill="#7752BE" />
        <path
          d="M29.1161 27.5982L19.9732 18.4554C19.8661 18.3393 19.7232 18.2857 19.5714 18.2857C19.5 18.2857 19.4196 18.3036 19.3571 18.3304C19.1429 18.4196 19 18.625 19 18.8571V32.2857C19 32.5179 19.1429 32.7232 19.3571 32.8125C19.4196 32.8393 19.5 32.8571 19.5714 32.8571C19.7232 32.8571 19.8661 32.7946 19.9732 32.6875L22.7589 29.9018L24.4643 33.9375C24.5893 34.2232 24.9196 34.3661 25.2143 34.2411L26.7946 33.5714C27.0804 33.4464 27.2232 33.1161 27.0982 32.8214L25.3036 28.5714H28.7143C28.9464 28.5714 29.1518 28.4286 29.2411 28.2143C29.3304 28.0089 29.2857 27.7589 29.1161 27.5982Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-26.6828"
          y="-2.18282"
          width="104.366"
          height="79.3656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.5914"
            result="effect1_foregroundBlur"
          />
        </filter>
        <clipPath id="clip0">
          <rect width="51" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const BudgetIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <g opacity="0.848005" filter="url(#filter0_f)">
          <rect y="25" width="50" height="25" rx="12.5" fill="#FAB005" />
        </g>
        <rect width="50" height="50" rx="19" fill="#FAB005" />
        <path
          d="M25.4821 24.6429L26.6518 25.1875L28.3929 24.6696V23.4554C28.3929 21.3929 26.6518 19.7411 24.5714 19.7411C22.5 19.7411 20.75 21.3839 20.75 23.4286V28.9643C20.75 29.4732 20.3393 29.875 19.8393 29.875C19.3393 29.875 18.9286 29.4732 18.9286 28.9643V26.625H16C16 28.9732 16 29 16 29C16 31.1161 17.7143 32.8304 19.8304 32.8304C21.9286 32.8304 23.6607 31.1429 23.6607 29.0536V23.5893C23.6607 23.0893 24.0714 22.6786 24.5714 22.6786C25.0714 22.6786 25.4821 23.0893 25.4821 23.5893V24.6429ZM30.2143 26.625V29.0804C30.2143 29.5804 29.8036 29.9821 29.3036 29.9821C28.8036 29.9821 28.3929 29.5804 28.3929 29.0804V26.6696L26.6518 27.1875L25.4821 26.6429V29.0357C25.4821 31.1339 27.2054 32.8304 29.3125 32.8304C31.4286 32.8304 33.1429 31.1161 33.1429 29C33.1429 29 33.1429 28.9732 33.1429 26.625H30.2143Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-27.1828"
          y="-2.18282"
          width="104.366"
          height="79.3656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.5914"
            result="effect1_foregroundBlur"
          />
        </filter>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const HeartIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <g opacity="0.848005" filter="url(#filter0_f)">
          <rect y="25" width="50" height="25" rx="12.5" fill="#F03E3D" />
        </g>
        <rect width="50" height="50" rx="19" fill="#F03E3D" />
        <path
          d="M25 33.1429C25.1429 33.1429 25.2857 33.0893 25.3929 32.9821L30.9554 27.625C31.0357 27.5446 33 25.75 33 23.6071C33 20.9911 31.4018 19.4286 28.7321 19.4286C27.1696 19.4286 25.7054 20.6607 25 21.3571C24.2946 20.6607 22.8304 19.4286 21.2679 19.4286C18.5982 19.4286 17 20.9911 17 23.6071C17 25.75 18.9643 27.5446 19.0357 27.6071L24.6071 32.9821C24.7143 33.0893 24.8571 33.1429 25 33.1429Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-27.1828"
          y="-2.18282"
          width="104.366"
          height="79.3656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.5914"
            result="effect1_foregroundBlur"
          />
        </filter>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const TimeIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <g opacity="0.848005" filter="url(#filter0_f)">
          <rect y="25" width="50" height="25" rx="12.5" fill="#4DADF7" />
        </g>
        <rect width="50" height="50" rx="19" fill="#4DADF7" />
        <path
          d="M30.5714 19.4286H31.4286C31.5893 19.4286 31.7143 19.3036 31.7143 19.1429V18.5714C31.7143 18.4107 31.5893 18.2857 31.4286 18.2857H18.2857C18.125 18.2857 18 18.4107 18 18.5714V19.1429C18 19.3036 18.125 19.4286 18.2857 19.4286H19.1429C19.1429 22.7321 20.7232 25.125 22.4732 26.2857C20.7232 27.4464 19.1429 29.8393 19.1429 33.1429H18.2857C18.125 33.1429 18 33.2679 18 33.4286V34C18 34.1607 18.125 34.2857 18.2857 34.2857H31.4286C31.5893 34.2857 31.7143 34.1607 31.7143 34V33.4286C31.7143 33.2679 31.5893 33.1429 31.4286 33.1429H30.5714C30.5714 29.8393 28.9911 27.4464 27.2411 26.2857C28.9911 25.125 30.5714 22.7321 30.5714 19.4286ZM29.4286 19.4286C29.4286 20.7321 29.1339 21.8839 28.6696 22.8571H21.0446C20.5804 21.8839 20.2857 20.7321 20.2857 19.4286H29.4286ZM28.9196 30.2857H20.7946C21.4554 28.5625 22.6429 27.3393 23.8304 26.8571H25.8839C27.0714 27.3393 28.2589 28.5625 28.9196 30.2857Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-27.1828"
          y="-2.18282"
          width="104.366"
          height="79.3656"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="13.5914"
            result="effect1_foregroundBlur"
          />
        </filter>
        <clipPath id="clip0">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
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
        {/* <span>
            <NextIcon />
          </span> */}

        <SecondSection>
          <h1 className="text-title">
            Monte seu evento de maneira
            <br /> ágil e pratica
          </h1>

          <Bg style="bg" />
          <div className="features-container">
            <div className="features-resume">
              <PointerIcon />
              <h3>Busque serviços</h3>
              <p>
                While most people enjoy
                <br /> casino gambling
              </p>
            </div>
            <div className="features-resume">
              <BudgetIcon />
              <h3>Solicite Orçamentos</h3>
              <p>
                Sports betting, lottery and
                <br /> bingo playing for the fun
              </p>
            </div>
            <div className="features-resume">
              <HeartIcon />
              <h3>Compare Preços</h3>
              <p>
                The Myspace page defines
                <br /> the individual.
              </p>
            </div>
            <div className="features-resume">
              <TimeIcon />
              <h3>Escolha o melhor</h3>
              <p>
                Personal choices and the
                <br /> overall personality of the
                <br /> person.
              </p>
            </div>
          </div>
        </SecondSection>
      </Container>
    </>
  )
}

export default Home
