import styled, { createGlobalStyle } from 'styled-components';
import backgroundimg from 'images/startimg.jpg';

const GlobalStyles = createGlobalStyle`
*,
body {
margin: 0;
padding: 0;
}
`

export const BackgroundStarter = styled.div`
background-image: url(${backgroundimg});
display: flex;
background-size: cover;
position: absolute;
width: 100vw;
height: 100vh;
`

export const StartContainer = styled.section`
  align-items: center;
  justify-content: center;
  background-color: var(--yellow);
  display: flex; 
  flex-direction: column;
  height: 75%;
  width: 75%;
  border-radius: 25px;
  margin: auto;
  top: 10%;
  
  h1 {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 4px;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    line-height: 125%;
    padding: 0 20px;
    text-align: center;
  }
  
  @media (min-width: 767px) {
  
    h1 {
    font-size: 2.5rem;
    padding: 0 20px;
  }

  p {
    font-size: 1rem;
    line-height: 125%;
    padding: 0 70px 0 70px;
  }
}

  @media (min-width: 1024px) {
    background-color: var(--yellowtrans);
  
    h1 {
    font-size: 4.4rem;
    padding: 0 20px;
  }

  p {
    font-size: 1.4rem;
    line-height: 125%;
    padding: 0 70px 0 70px;
  }
}  
`

export const OptionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 65%;
    gap: 25px;
    justify-content: center;
`

export const MainContainer = styled.section`
  align-items: center;
  justify-content: center;
  background-color: var(--eggpink);
  display: flex; 
  flex-direction: column;
  height: 75%;
  width: 75%;
  border-radius: 25px;
  margin: auto;
  top: 10%;
  `

export default GlobalStyles;