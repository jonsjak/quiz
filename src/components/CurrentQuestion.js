import React from 'react'
import { useSelector } from 'react-redux'
import { Starter } from 'components/Starter';
import Summary from './Summary'
import Progressbar from './Progressbar'
import RestartBtn from './RestartBtn'
import { AnswerOptions } from './AnswerOptions';
import { OptionContainer, BackgroundStarter, InnerContainer } from './Style/GlobalStyle';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const isQuizOver = useSelector((store) => store.quiz.quizOver)
  const quizStarted = useSelector((store) => store.quiz.quizStarted)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <BackgroundStarter>
      {!quizStarted && <Starter />}
      {!isQuizOver && quizStarted && (
        <InnerContainer key={question.id}>
          <h1>{question.questionText}</h1>
          <OptionContainer>
            <AnswerOptions />
          </OptionContainer>
          <Progressbar />
          <RestartBtn />
        </InnerContainer>)}
      {isQuizOver && (
        <Summary />)}
    </BackgroundStarter>
  )
}