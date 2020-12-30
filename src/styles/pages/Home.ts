import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding-right: 200px;
  padding-top: 50px;
`

export const Header = styled.header`
  display: flex;
  margin-bottom: 100px;
  padding-left: 200px;

  h3 {
    margin-right: 50px;
  }

  button {
    width: 150px;
    height: 50px;
    margin-right: 10px;
    margin-top: -10px;
    border-radius: 4px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .menu {
    display: flex;
    flex-direction: row;
    margin-right: 70px;
    justify-content: flex-end;
    width: 100%;
  }

  .signIn {
    border: 1px solid #bcd0e5;
    background-color: ${props => props.theme.colors.backgroud};
  }

  .signUp {
    background-color: ${props => props.theme.colors.primary};
    border: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.backgroud};
  }
`

export const FirstSection = styled.section`
  display: flex;
  padding-left: 200px;

  h3 {
    margin-bottom: 30px;
  }

  input {
    width: 85%;
    height: 50px;
    border: 1px solid #ff9900;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  input::placeholder {
    color: ${props => props.theme.colors.primary};
    padding-left: 20px;
    font-family: Poppins;
    font-weight: 600;
  }

  button {
    width: 30%;
    height: 50px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary};
    border: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.backgroud};
    font: 400 20px Poppins, sans-serif;
    font-weight: 600;
  }

  span {
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text-underline {
    text-decoration-line: underline;
    color: #ff9900;
    margin-left: 10px;
  }

  .section-image {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .section-title {
    display: flex;
    flex-direction: column;
  }

  .text-title {
    font-size: 44px;
    line-height: 54px;
    margin-bottom: 30px;
  }
`

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100vw;

  span {
    text-align: center;
    width: 100%;
    margin-bottom: 100px;
  }

  .text-title {
    font-size: 44px;
    line-height: 54px;
    margin-bottom: 30px;
    text-align: center;
    justify-content: center;
    width: 100%;
    background: linear-gradient(
      179.59deg,
      rgba(255, 229, 210, 0.629261) 0.35%,
      rgba(255, 244, 229, 0.0001) 99.63%
    );
    transform: rotate(180deg);
  }
`
