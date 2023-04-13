import styled, { css } from 'styled-components';

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
  `}
`