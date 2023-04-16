import styled, { createGlobalStyle, css } from 'styled-components';
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
    background-repeat: no-repeat;
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
    gap: 10px;
    height: 75%;
    width: 75%;
    border-radius: 25px;
    margin: auto;
    top: 10%;
    padding: 20px 20px;
  
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
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2,1fr);
    width: 100%;
    gap: 25px;
    justify-content: center;
    margin: auto;

    @media (min-width: 768px) and (max-width: 1023px) {
      width: 400px;
      gap: 30px;
    }

    @media (min-width: 1023px) {
      width: 600px;
      gap: 30px;
    }
`

export const InnerContainer = styled.section`
    background-color: var(--eggpink);
    border-radius: 25px;
    top: 10%;
    height: 80%;
    width: 75%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 20px 20px;

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 20px 50px;
    }

    @media (min-width: 1023px) {
        height: 75%;
        padding: 20px 50px;
    }
`

export const SummaryContainer = styled.div`
    height: 400px;
    overflow: scroll;
  `
export const StyledButton = styled.button`
    
    background-color: #F36B2B;
    color: black;
    font-size: 1.25vw;
    letter-spacing: 0.5vw;
    font-weight: bold;
    padding: 10px 30px;
    border-radius: 10px;
    top: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    :hover {
        background-color: #D1E64B;
    }

    ${(props) => props.optionbutton && css`
        letter-spacing: 0.1vw;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        padding: 10px;
        border none;
        background: #D1E64B;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;

        word-break: break-all;
        word-break: break-word;
        overflow-wrap: break-word;
        -webkit-box-shadow: 0px 0px 0px 0.5em #D1E64B;
        -moz-box-shadow: 0px 0px 0px 0.5em #D1E64B;
        box-shadow: 0px 0px 0px 0.5em #D1E64B;
  `}

    ${(props) => props.accordian && css`
        letter-spacing: 0.1vw;
        outline: none;
        border: none;
        background: #d1e64bce;
        width: 100%;

        :hover {
            background-color: #D1E64B;
        }

  `}
`

export const AccordionH5 = styled.h5`
    font-weight: 900;
    font-size: 16px;
    padding: 0;
    margin: 12px;
    font-family: 'Syne Mono', monospace;
  }
`

export const StyledAccordion = styled.div`
    overflow-y: scroll;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    width: 100%;
  }
`

export const AnswersContainer = styled.div`
    background: #D1E64B;
    padding: 10px 20px;
    border-radius: 10px;
  }
`
/* Add styling for active/inactive accordion and hovering? */

export default GlobalStyles;