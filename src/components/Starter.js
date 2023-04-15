/* eslint-disable max-len */
import React from 'react'
import { useDispatch } from 'react-redux'
import { startQuiz } from 'reducers/quiz'
import { StartContainer, StyledButton } from './Style/GlobalStyle'

export const Starter = () => {
  const dispatch = useDispatch()

  const handleStartQuiz = () => {
    dispatch(startQuiz())
  }

  return (
    <StartContainer>
      <h1>
        Welcome to the Zombie Quiz Game!
      </h1>
      <p>
        In this game, you will be tested on your knowledge of everything zombie-related. <br />
        Do you think you have what it takes to make it through the apocalypse? <br />
        Put your knowledge to the test and find out! <br />
        Are you ready to survive the zombie apocalypse? <br />

        Let&apos;s find out!
      </p>
      <StyledButton
        type="button"
        onClick={handleStartQuiz}>
            START ZOMBIE QUIZ
      </StyledButton>
    </StartContainer>
  )
}