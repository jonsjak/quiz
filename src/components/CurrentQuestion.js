import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOptionClick = (optionIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId: question.id,
      answerIndex: optionIndex
    }))
  }

  const handleRestartClick = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option) => (
        <div key={option.id}>
          <button type="button" onClick={() => handleOptionClick(option)}>{option}</button>
        </div>
      ))}
      <p>Correct answer: {question.correctAnswerIndex} </p>
      <button type="button" onClick={handleRestartClick}>Restart</button>
    </div>
  )
}
