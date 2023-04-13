import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

export const StyledStartButton = styled.a`
    position: relative;
    background-color: #F36B2B;
    color: black;
    font-size: 1.25vw;
    letter-spacing: 0.5vw;
    font-weight: bold;
    padding: 10px 30px;
    border-radius: 10px;
    top: 20px; 

    :hover {
    background-color: #D1E64B;
    }
`

export const Starter = ({ setStarter }) => {
  const dispatch = useDispatch()
  const onStart = () => {
    setStarter(false)
    dispatch(quiz.actions.restart())
  }
  return (
    <div>
      <StyledStartButton
        type="button"
        onClick={onStart}>
            Start Quiz
      </StyledStartButton>
    </div>
  )
}