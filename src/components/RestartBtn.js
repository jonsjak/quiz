import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

export const StyledRestartButton = styled.a`
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

const RestartBtn = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <StyledRestartButton
        type="button"
        onClick={onRestart}>
            RESTART
      </StyledRestartButton>
    </div>
  )
}

export default RestartBtn;