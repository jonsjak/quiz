import React from 'react'
import { useDispatch } from 'react-redux'
import { startQuiz } from 'reducers/quiz'
import { StyledButton } from './Style/Button';

export const Starter = () => {
  const dispatch = useDispatch()

  const handleStartQuiz = () => {
    dispatch(startQuiz())
  }

  return (
    <div>
      <StyledButton
        type="button"
        onClick={handleStartQuiz}>
            START QUIZ
      </StyledButton>
    </div>
  )
}