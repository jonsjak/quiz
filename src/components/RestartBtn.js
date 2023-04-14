import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { StyledButton } from './Style/GlobalStyle'

const RestartBtn = () => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <StyledButton
        type="button"
        onClick={onRestart}>
            RESTART
      </StyledButton>
    </div>
  )
}

export default RestartBtn;